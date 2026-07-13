// Netlify serverless function: receives the site's form submissions and
// creates/updates a contact in GoHighLevel (Honor Elevate sub-account).
// Secrets come from Netlify env vars — never hardcoded, never sent to the client.
//   GHL_PIT_TOKEN   = Private Integration Token (contacts.readonly + contacts.write)
//   GHL_LOCATION_ID = the sub-account location id
//
// The three site forms POST JSON here with a `form` field:
//   "gift"      -> gift/lead magnet email capture (field: email)
//   "gratitude" -> gratitude page card capture     (field: email)
//   "story"     -> "Comparte tu historia"          (fields: name, email, story)

const GHL_BASE = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';

// Which tags + source each form applies, so Roxana can build automations per list.
const FORM_MAP = {
  gift: { tags: ['web-regalo', 'lead-magnet'], source: 'greciagroup.com regalo' },
  gratitude: { tags: ['web-gratitud', 'tarjetas-gratitud'], source: 'greciagroup.com gratitud' },
  story: { tags: ['web-comparte-historia'], source: 'greciagroup.com comparte' },
};

const json = (statusCode, obj) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(obj),
});

const isEmail = (v) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { ok: false, error: 'Method not allowed' });
  }

  const token = process.env.GHL_PIT_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    // Misconfiguration on our side — don't blame the visitor.
    return json(500, { ok: false, error: 'Server not configured yet. Please try again later.' });
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { ok: false, error: 'Invalid request.' });
  }

  const formKey = String(data.form || '').toLowerCase();
  const cfg = FORM_MAP[formKey];
  if (!cfg) return json(400, { ok: false, error: 'Unknown form.' });

  const email = (data.email || '').trim();
  if (!isEmail(email)) return json(400, { ok: false, error: 'Please enter a valid email.' });

  const name = (data.name || '').trim();
  const story = (data.story || '').trim();

  const ghlHeaders = {
    Authorization: `Bearer ${token}`,
    Version: GHL_VERSION,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  try {
    // 1) Upsert the contact (create, or update if the email already exists).
    const upsertBody = {
      locationId,
      email,
      tags: cfg.tags,
      source: cfg.source,
    };
    if (name) upsertBody.firstName = name;

    const upsertRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: ghlHeaders,
      body: JSON.stringify(upsertBody),
    });

    if (!upsertRes.ok) {
      const detail = await upsertRes.text();
      console.error('GHL upsert failed', upsertRes.status, detail);
      return json(502, { ok: false, error: 'Could not save right now. Please try again.' });
    }

    const upsertJson = await upsertRes.json().catch(() => ({}));
    const contactId = upsertJson?.contact?.id || upsertJson?.id;

    // 2) If they shared a story, attach it as a note on the contact.
    if (story && contactId) {
      const noteRes = await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
        method: 'POST',
        headers: ghlHeaders,
        body: JSON.stringify({ body: story }),
      });
      if (!noteRes.ok) {
        // The contact is saved; a failed note shouldn't fail the whole submission.
        console.error('GHL note failed', noteRes.status, await noteRes.text());
      }
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error('ghl-lead error', err);
    return json(502, { ok: false, error: 'Could not save right now. Please try again.' });
  }
};
