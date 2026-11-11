// Everything you'll want to edit lives here.
window.SITE = {
  name: "Rhedak",
  tagline: "Hobby Writer, Game Dev and AI enthusiast",
  location: "Tokyo",
  github: "rhedak",

  // Top-of-page buttons (the "link in bio" part).
  links: [
    { label: "Honeyfeed", url: "https://www.honeyfeed.fm/u/45686/novels" },
    { label: "Panzer Island", url: "https://rhedak.github.io/panzer_island_pages/" },
    { label: "GitHub", url: "https://github.com/rhedak" },
    { label: "Ko-fi", url: "https://ko-fi.com/rhedak" },
    { label: "X", url: "https://x.com/rhedak1", icon: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
    { label: "Instagram", url: "https://www.instagram.com/rhedak00/", icon: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" },
    { label: "YouTube", url: "https://www.youtube.com/@Rhedak", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  ],

  // Game. Same card shape as writing.
  games: [
    {
      title: "Panzer Island",
      blurb: "A reactive turn-based strategy game: every step your units take triggers an immediate response from nearby drones. There is no end-turn button.",
      url: "https://store.steampowered.com/app/4757690/Panzer_Island/",
      image: "assets/cover-panzer-island.webp",
      alt: "Panzer Island key art: a tank, helicopter and ship above three characters looking over the island",
      where: "Steam · Android · Web",
      extra: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.rhedak.panzerisland" },
        { label: "Play in browser", url: "https://rhedak.itch.io/panzer-island-web" },
        { label: "Guides & docs", url: "https://rhedak.github.io/panzer_island_pages/" },
      ],
    },
  ],

  // Writing. Blurbs are condensed from the Honeyfeed pages.
  writing: [
    {
      title: "Time Slider Katherina",
      blurb: "A genius witch graduates four years early, just as rifts into parallel worlds start tearing reality apart.",
      url: "https://www.honeyfeed.fm/novels/33829",
      image: "assets/cover-time-slider-katherina.webp",
      alt: "Cover of Time Slider Katherina: a young witch with a staff and a bat",
      where: "Honeyfeed · Ongoing · Fantasy",
    },
    {
      title: "The Hero of the Mist Tragedy",
      blurb: "A contaminated Mist swallowed the kingdom of Okiri, and an innkeeper's boy better with a blade than he should be wants back in.",
      url: "https://www.honeyfeed.fm/novels/32712",
      image: "assets/cover-hero-of-the-mist.webp",
      alt: "Cover of The Hero of the Mist Tragedy: a young swordsman standing in mist",
      where: "Honeyfeed · Finished · Fantasy / Mystery",
    },
    {
      title: "The Bureaucracy of Blood",
      blurb: "In a Europe the vampires hold, humans are donors and the rules are three lines on the wall: no speaking, no attachment.",
      url: "https://www.honeyfeed.fm/novels/34317",
      image: "assets/cover-bureaucracy-of-blood.webp",
      alt: "Cover of The Bureaucracy of Blood: two characters under a full moon",
      where: "Honeyfeed · Finished · Drama / Fantasy",
    },
    {
      title: "The Hunt for the Everglow Crystals",
      blurb: "Candles are a crown-controlled luxury, and a storyteller is arrested for reciting a dead man's tale of stones that hold light forever.",
      url: "https://www.honeyfeed.fm/novels/33643",
      image: "assets/cover-everglow-crystals.webp",
      alt: "Cover of The Hunt for the Everglow Crystals: a bearded man and a pink-haired girl",
      where: "Honeyfeed · Finished · Adventure / Fantasy",
    },
    {
      title: "Panzer Island (webnovel)",
      blurb: "The story behind the game, in serial form.",
      url: "https://www.royalroad.com/fiction/176303/panzer-island",
      image: "assets/cover-panzer-island.webp",
      alt: "Panzer Island webnovel cover",
      where: "Royal Road",
    },
    {
      title: "Malfoid: The Girl who Yearned",
      blurb: "A free fan webcomic retelling Philosopher's Stone with a split point of view between Harry and Draconia Malfoy.",
      url: "https://rhedak.github.io/malfoid-the-girl-who-yearned/",
      image: "assets/cover-malfoid.webp",
      alt: "Cover of Malfoid: The Girl who Yearned: Draconia and Harry back to back with wands",
      where: "Free webcomic · Fan work",
    },
    {
      title: "Malfoid Gallery",
      blurb: "A gallery of Malfoid art: daily posts, Draconia Malfoid and Grok Imagine pictures.",
      url: "https://rhedak.github.io/malfoid-gallery/",
      banner: "assets/malfoid-gallery-banner.jpg",
      alt: "Malfoid Gallery banner: six Malfoid portraits with the gallery title",
      where: "Gallery · Fan art",
    },
    {
      title: "Malfoid Index",
      blurb: "An index of fanfics, fan art, comics, games and videos about Draconia Malfoid, made by other people.",
      url: "https://rhedak.github.io/malfoid-gallery/malfoid-index/",
      banner: "assets/malfoid-index-banner.jpg",
      alt: "Malfoid Index banner: six Malfoid portraits with the index title",
      where: "Index · Fan works",
    },
  ],

  // Repos listed first, in this order. Remaining non-fork repos follow by recent activity.
  featured: [
    "anime_ai_companion",
    "anime-character-creator",
    "fantasy-map-generator",
    "audiobook_tts",
  ],
  maxRepos: 9,

  // Optional thumbnails for repo cards, keyed by repo name. `video` is a muted looping clip.
  projectImages: {
    anime_ai_companion: { src: "assets/proj-anime_ai_companion.webp", video: "assets/proj-anime_ai_companion.mp4", alt: "Anime characters animated by code: dancing, tennis, swimming" },
    "anime-character-creator": { src: "assets/proj-anime-character-creator.webp", video: "assets/proj-anime-character-creator.mp4", alt: "Two anime characters, Risa and Franzi, redrawn live in code as their hair and clothes change colour" },
    "fantasy-map-generator": { src: "assets/proj-fantasy-map-generator.webp", alt: "A generated fantasy continent map" },
  },
};
