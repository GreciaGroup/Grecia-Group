// Bilingual content for greciagroup.com — Spanish is primary.
// Keep copy in the storyteller voice: empathetic, faith-rooted, no em dashes.

export const films = [
  { id: 1, slug: 'mi-heroe-mi-pilar',      youtube: '' },
  { id: 2, slug: 'tu-mano-en-la-mia',       youtube: '' },
  { id: 3, slug: 'papa-ya-no-se-quien-soy', youtube: '' },
  { id: 4, slug: 'cuidarte-es-salvarme',    youtube: '' },
  { id: 5, slug: 'tu-sonrisa-en-la-niebla', youtube: '' },
  { id: 6, slug: 'mi-libertad-en-tus-ojos', youtube: '' },
];

export const t = {
  es: {
    lang: 'es',
    dir: '/',
    otherHref: '/en/',
    otherLabel: 'EN',
    meta: {
      title: 'Grecia Group — Un santuario para quienes cuidan',
      description:
        'Canciones para el corazon que sostiene la mano que otros soltaron. Peliculas musicales para cuidadores, en espanol. Por Roxana Grecia.',
    },
    nav: { films: 'Las canciones', story: 'Mi historia', gift: 'Regalo', shop: 'Tienda' },
    hero: {
      brand: 'Grecia Group',
      title: 'Tender Heart Rhythms',
      tagline: 'Un santuario para quienes cuidan.',
      sub: 'Canciones para el corazon que sostiene la mano que otros soltaron.',
      ctaPrimary: 'Únete al santuario',
      ctaSecondary: 'Escuchar las canciones',
    },
    films: {
      heading: 'Las canciones',
      intro:
        'Seis canciones originales, hechas de fotos reales de familia y letras que se sienten en el pecho. Cada una es una carta de amor para quien cuida.',
      titles: {
        1: 'Mi Heroe, Mi Pilar',
        2: 'Tu Mano en la Mia',
        3: 'Papa, ya no se quien soy',
        4: 'Cuidarte es Salvarme',
        5: 'Tu Sonrisa en la Niebla',
        6: 'Mi Libertad en tus Ojos',
      },
      dedications: {
        1: 'Para mi padre. Se fue en 15 dias. Esta cancion es mi promesa.',
        2: 'Para mi madre. Ella ya olvida, pero el amor no se olvida.',
        3: 'Cuando cuidas a todos, quien te cuida a ti.',
        4: 'Nadie aplaude al que cuida. Esta cancion, si.',
        5: 'Busco tu sonrisa, papa, en cada amanecer.',
        6: 'Dicen que soy prisionera. No saben que soy libre.',
      },
      comingSoon: 'Muy pronto',
    },
    epigraph: {
      a: 'Hay despedidas que terminan una vida…',
      b: 'Y hay despedidas que dan origen a una promesa de amor eterno.',
    },
    story: {
      heading: 'Mi historia',
      photoAlt: 'Roxana y su madre, frente con frente, tomadas de la mano',
      blocks: [
        { type: 'p', text: `Hay promesas que nacen del amor. Y hay promesas tan profundas que terminan convirtiéndose en el propósito de una vida.` },
        { type: 'p', text: `Mi padre era un hombre fuerte, noble, digno, y profundamente enamorado de mi madre. Un cáncer agresivo apareció sin anunciarse y, en apenas quince días, nos llevó hasta el momento más difícil de nuestras vidas.` },
        { type: 'p', text: `Tuve el privilegio de acompañarlo hasta su último aliento. Aún puedo sentir la calidez de su mano entre las mías. Miró a la mujer que había amado durante toda su vida con unos ojos llenos de ternura y de lágrimas. Después volvió su mirada hacia mí. Con la voz quebrada, pero con el corazón lleno de amor, me dijo:` },
        { type: 'quote', text: `Hijita... cuando yo ya no esté y tu madre mire hacia la puerta esperándome, abrázala por mí. Cuando extrañe mi voz, háblale con ternura de mí. Cuando necesite una mano para caminar, préstale la tuya como si fuera la mía la que la apoya. Y cuando una lágrima le recuerde que ya no estoy, recuérdale que nunca dejé de amarla... porque el amor verdadero no muere con quien parte. Solo encuentra otro corazón desde donde seguir amando. Hoy ese corazón será el tuyo.` },
        { type: 'p', text: `No fue una obligación. Fue el regalo más sagrado que un padre pudo confiarle a su hija.` },
        { type: 'p', text: `Y le dije que no se preocupara, que descansara, que nunca soltaría la mano de mi madre. Desde aquel día, esa promesa se convirtió en el camino de mi vida.` },
        { type: 'p', text: `Hoy sigo caminando junto a mi madre. Hay mañanas en las que una delicada niebla parece acariciar algunos de sus recuerdos. Otras veces, el tiempo juega en silencio con pequeños fragmentos de su historia.` },
        { type: 'p', text: `Entonces descubro algo maravilloso. La memoria puede cambiar. Las palabras pueden esconderse.` },
        { type: 'em', text: `Pero el amor siempre encuentra el camino de regreso.` },
        { type: 'p', text: `Cada día intento llenar su mundo de calma, de canciones, de abrazos, de sonrisas y de esos pequeños detalles que hacen que el alma descanse un poco más.` },
        { type: 'p', text: `Porque cuidar no es solo ayudar. Cuidar es decir todos los días: «Aquí estoy». Aunque el cansancio nadie lo vea. Aunque el corazón también necesite descansar, seguimos amando sin límites. Aunque muchas veces el mundo olvide que los cuidadores también necesitan ser abrazados.` },
        { type: 'p', text: `Estas canciones nacieron precisamente allí... entre el dolor más profundo de la pérdida y el amor inmenso de la aceptación. En el lugar donde el amor vence al miedo. Donde una promesa sigue respirando. Donde una hija intenta honrar, cada día, el último deseo de su padre.` },
        { type: 'closing', text: `Y si tú también cuidas a alguien... quiero que sepas que este abrazo también es para ti. Porque te veo. Porque entiendo ese amor silencioso, ese cansancio que a veces nos gana. Y porque nunca has estado solo. Nunca has estado sola.` },
      ],
      signoff: 'Con todo mi cariño,',
      name: 'Roxana Grecia',
    },
    gift: {
      heading: 'Recibe una canción para tu alma',
      sub: 'Deja tu correo y te envío un regalo gratis para los días difíciles, y te aviso cuando salga cada nueva canción.',
      placeholder: 'tu correo',
      button: 'Quiero mi regalo',
      privacy: 'Sin spam. Solo consuelo. Puedes salir cuando quieras.',
    },
    shop: {
      heading: 'La tienda',
      intro: 'Recursos para acompanar tu camino de cuidado.',
      etsy: 'Ver en Etsy',
      soon: 'Mas productos muy pronto',
    },
    footer: {
      brand: 'Grecia Group',
      sub: 'Tender Heart Rhythms',
      rights: 'Hecho con fe y amor.',
    },
  },

  en: {
    lang: 'en',
    dir: '/en/',
    otherHref: '/',
    otherLabel: 'ES',
    meta: {
      title: 'Grecia Group — A sanctuary for those who care',
      description:
        'Songs for the heart that holds the hand others let go of. Musical films for caregivers. By Roxana Grecia.',
    },
    nav: { films: 'The songs', story: 'My story', gift: 'Gift', shop: 'Shop' },
    hero: {
      brand: 'Grecia Group',
      title: 'Tender Heart Rhythms',
      tagline: 'A sanctuary for those who care.',
      sub: 'Songs for the heart that holds the hand others let go of.',
      ctaPrimary: 'Join the sanctuary',
      ctaSecondary: 'Listen to the songs',
    },
    films: {
      heading: 'The songs',
      intro:
        'Six original songs, made from real family photographs and lyrics you feel in your chest. Each one is a love letter to the caregiver.',
      titles: {
        1: 'My Hero, My Pillar',
        2: 'Your Hand in Mine',
        3: 'Papa, I No Longer Know Who I Am',
        4: 'Caring for You Is Saving Me',
        5: 'Your Smile in the Fog',
        6: 'My Freedom in Your Eyes',
      },
      dedications: {
        1: 'For my father. He was gone in 15 days. This song is my promise.',
        2: 'For my mother. She forgets now, but love is never forgotten.',
        3: 'When you care for everyone, who cares for you.',
        4: 'No one applauds the caregiver. This song does.',
        5: 'I look for your smile, Papa, in every sunrise.',
        6: 'They say I am a prisoner. They do not know I am free.',
      },
      comingSoon: 'Coming soon',
    },
    epigraph: {
      a: 'There are farewells that end a life…',
      b: 'And there are farewells that give rise to a promise of eternal love.',
    },
    story: {
      heading: 'My story',
      photoAlt: 'Roxana and her mother, forehead to forehead, holding hands',
      blocks: [
        { type: 'p', text: `There are promises born of love. And there are promises so deep that they become the purpose of a life.` },
        { type: 'p', text: `My father was a strong, noble, dignified man, and deeply in love with my mother. An aggressive cancer appeared without warning, and in just fifteen days it carried us to the hardest moment of our lives.` },
        { type: 'p', text: `I had the privilege of being with him until his last breath. I can still feel the warmth of his hand in mine. He looked at the woman he had loved his whole life with eyes full of tenderness and tears. Then he turned his gaze to me. With a broken voice, but a heart full of love, he said:` },
        { type: 'quote', text: `My little girl... when I am no longer here and your mother looks toward the door waiting for me, hold her for me. When she misses my voice, speak of me with tenderness. When she needs a hand to walk, lend her yours as if it were mine holding her. And when a tear reminds her that I am gone, remind her that I never stopped loving her... because true love does not die with the one who leaves. It only finds another heart from which to keep loving. And today, that heart will be yours.` },
        { type: 'p', text: `It was not an obligation. It was the most sacred gift a father could entrust to his daughter.` },
        { type: 'p', text: `And I told him not to worry, to rest, that I would never let go of my mother's hand. From that day on, that promise became the path of my life.` },
        { type: 'p', text: `Today I keep walking beside my mother. There are mornings when a gentle fog seems to brush against some of her memories. Other times, time plays quietly with small fragments of her story.` },
        { type: 'p', text: `And then I discover something wonderful. Memory can change. Words can hide.` },
        { type: 'em', text: `But love always finds its way back.` },
        { type: 'p', text: `Every day I try to fill her world with calm, with songs, with embraces, with smiles, and with the small things that let the soul rest a little more.` },
        { type: 'p', text: `Because caring is not only helping. Caring is saying, every single day: "I am here." Even when no one sees the exhaustion. Even when the heart also needs to rest, we keep loving without limits. Even when the world so often forgets that caregivers need to be held too.` },
        { type: 'p', text: `These songs were born right there... between the deepest pain of loss and the immense love of acceptance. In the place where love conquers fear. Where a promise keeps breathing. Where a daughter tries to honor, every day, her father's last wish.` },
        { type: 'closing', text: `And if you care for someone too... I want you to know that this embrace is for you as well. Because I see you. Because I understand that silent love, that exhaustion that sometimes overtakes us. And because you have never been alone.` },
      ],
      signoff: 'With all my love,',
      name: 'Roxana Grecia',
    },
    gift: {
      heading: 'Receive a song for your soul',
      sub: 'Leave your email and I will send you a free gift for the hard days, and let you know when each new song is released.',
      placeholder: 'your email',
      button: 'Send my gift',
      privacy: 'No spam. Only comfort. Leave anytime.',
    },
    shop: {
      heading: 'The shop',
      intro: 'Resources to walk beside you on your caregiving journey.',
      etsy: 'View on Etsy',
      soon: 'More products coming soon',
    },
    footer: {
      brand: 'Grecia Group',
      sub: 'Tender Heart Rhythms',
      rights: 'Made with faith and love.',
    },
  },
};
