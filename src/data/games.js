const BASE = import.meta.env.BASE_URL || '/';

export const games = [
  {
    id: "doodlerush",
    title: "DoodleRush",
    tagline: "Draw. Guess. Rush to the top.",
    description: "DoodleRush is a multiplayer drawing and guessing game where players race against the clock to draw, guess, and score points.",
    version: "1.0.0",
    platform: "Android",
    size: "89 MB",
    status: "AVAILABLE",
    categories: ["Multiplayer", "Casual"],
    technologies: ["Flutter", "Firebase", "WebRTC"],
    features: [
      "Multiplayer rooms",
      "Real-time drawing",
      "Guessing system",
      "Voice chat",
      "Live scoring",
      "Leaderboards"
    ],
    image: `${BASE}assets/games/doodlerush/cover.jpg`,
    banner: `${BASE}assets/games/doodlerush/banner.jpg`,
    screenshots: [
      `${BASE}assets/games/doodlerush/screenshot1.jpg`,
      `${BASE}assets/games/doodlerush/screenshot2.jpg`,
      `${BASE}assets/games/doodlerush/screenshot3.jpg`,
      `${BASE}assets/games/doodlerush/screenshot4.jpg`
    ],
    downloadUrl: "https://github.com/IchigoxBankai/doodle-rush/releases/download/v1.0.0/app-release.apk",
    githubUrl: "https://github.com/IchigoxBankai/doodle-rush"
  },
  {
    id: "anime-gacha",
    title: "Anime Gacha",
    tagline: "Summon, collect, and build your ultimate anime squad.",
    description: "Anime Gacha is an exciting mobile gacha RPG where you can summon legendary anime heroes, unlock mythic tiers, manage friends, and level up your ultimate collection.",
    version: "1.0.0",
    platform: "Android",
    size: "225 MB",
    status: "AVAILABLE",
    categories: ["RPG", "Gacha", "Anime"],
    technologies: ["Flutter", "Dart", "Firebase"],
    features: [
      "Character Summoning & Pulls",
      "Mythic & Legendary Rarities",
      "Friends System & Social",
      "Hero Upgrades & Inventory",
      "Daily Quests & Rewards",
      "Audio FX & Notification System"
    ],
    image: `${BASE}assets/games/anime-gacha/cover.jpg`,
    banner: `${BASE}assets/games/anime-gacha/banner.jpg`,
    screenshots: [
      `${BASE}assets/games/anime-gacha/screenshot1.jpg`,
      `${BASE}assets/games/anime-gacha/screenshot2.jpg`,
      `${BASE}assets/games/anime-gacha/screenshot3.jpg`,
      `${BASE}assets/games/anime-gacha/screenshot4.jpg`
    ],
    downloadUrl: "https://github.com/IchigoxBankai/Anime-Gatcha/releases/download/v1.0.0/app-release.apk",
    githubUrl: "https://github.com/IchigoxBankai/Anime-Gatcha"
  },
  {
    id: "word-whisper",
    title: "Word Whisper",
    tagline: "Uncover the impostor. Whisper the secret word.",
    description: "Word Whisper is a thrilling social deduction party game. Players receive secret words while undercover impostors blend in. Give subtle clues, interrogate suspects, and vote to eliminate the liar!",
    version: "1.0.0",
    platform: "Android",
    size: "89 MB",
    status: "AVAILABLE",
    categories: ["Multiplayer", "Party", "Social Deduction", "Casual"],
    technologies: ["Flutter", "Dart", "Firebase"],
    features: [
      "Local Pass-and-Play & Online Rooms",
      "Private Word & Secret Role Reveal",
      "Subtle Clue Giving & Discussion",
      "Impostor vs Citizen Mind Games",
      "Confidential Pass-to-Vote System",
      "Custom Word Packs & Categories"
    ],
    image: `${BASE}assets/games/word-whisper/cover.jpg`,
    banner: `${BASE}assets/games/word-whisper/banner.jpg`,
    screenshots: [
      `${BASE}assets/games/word-whisper/screenshot1.jpg`,
      `${BASE}assets/games/word-whisper/screenshot2.jpg`,
      `${BASE}assets/games/word-whisper/screenshot3.jpg`
    ],
    downloadUrl: "https://github.com/IchigoxBankai/word-whisper/releases/download/word-whisper/app-release.apk",
    githubUrl: "https://github.com/IchigoxBankai/word-whisper"
  }
];

export const getGameById = (id) => games.find(game => game.id === id);

export const getAllCategories = () => {
  const categories = new Set();
  games.forEach(game => game.categories.forEach(cat => categories.add(cat)));
  return Array.from(categories);
};
