export type ProjectCategory = "studio" | "competition" | "game-jam" | "school";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  engine: string;
  year?: string;
  category: ProjectCategory;
  image?: string;
  imageAlt?: string;
  glyph: string;
  gradient: string;
  links?: { label: string; href: string }[];
  highlights: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "jumpin-jazz-cats",
    title: "Jumpin' Jazz Cats",
    tagline: "Online multiplayer party game · published by Team17",
    description:
      "An online multiplayer party game by Le Catnip Collective where up to nine cats sprint, swing, and slide through a jazzy cartoon mansion. I worked on gameplay programming, UI, and the online side of the game in Unreal Engine 5 — it's out now on Steam.",
    role: "Gameplay / UI / Online Programmer",
    engine: "Unreal Engine 5",
    year: "2022 – 2023",
    category: "studio",
    image: "/images/jumpinjazzcats.webp",
    imageAlt: "Jumpin' Jazz Cats key art featuring cartoon cats in a mansion",
    glyph: "JJC",
    gradient: "from-violet-600/80 via-fuchsia-600/70 to-pink-500/80",
    links: [{ label: "View on Steam", href: "https://store.steampowered.com/app/1951780/Jumping_Jazz_Cats/" }],
    highlights: [
      "Gameplay and minigame programming in UE5",
      "UI programming, HUD and player systems",
      "Online multiplayer aspects of the game",
      "Released on Steam under Team17",
    ],
    featured: true,
  },
  {
    slug: "iron-man",
    title: "Iron Man Game",
    tagline: "AAA internship at EA Motive",
    description:
      "Eight months on the Iron Man title at Motive Studio as a gameplay programmer intern. I used UE5's Gameplay Ability System to build health, shield, and combat resource systems, worked with Frostbite's ECS on hit detection and finisher resources, and helped integrate ImGui into the editor workflow.",
    role: "Gameplay Programmer Intern",
    engine: "Unreal Engine 5 · Frostbite",
    year: "Jan – Aug 2022",
    category: "studio",
    image: "/images/ironman.webp",
    imageAlt: "Iron Man key art from the Motive Studio project",
    glyph: "IM",
    gradient: "from-red-600/80 via-orange-600/70 to-amber-500/80",
    highlights: [
      "Gameplay Ability System: health, shield, combat resources",
      "Frostbite ECS: hit detection, finisher resources",
      "UI work in UE5 and Frostbite, ImGui integration",
      "Documented systems on Confluence for the team",
    ],
    featured: true,
  },
  {
    slug: "imminent",
    title: "Imminent",
    tagline: "Roguelike deck-builder · Ubisoft Game Lab 2022",
    description:
      "A roguelike deck-building game made with a team of eight in Unity for the Ubisoft Game Lab Competition. I built the grid-based prototype with cards that auto-attach to the grid in C#, and wired up Firebase and LootLocker for an online discussion board.",
    role: "Gameplay Programmer",
    engine: "Unity (C#)",
    year: "Jan – Apr 2022",
    category: "competition",
    image: "/images/imminent.webp",
    imageAlt: "Imminent gameplay screenshot showing a grid and cards",
    glyph: "IM",
    gradient: "from-cyan-600/80 via-sky-600/70 to-blue-500/80",
    links: [{ label: "More on itch.io", href: "https://zetachan.itch.io/" }],
    highlights: [
      "Nominated for Best Game Design and Best Art Direction & Production",
      "Grid + card prototype with auto-attachment in C#",
      "Firebase database and LootLocker integration",
      "Online discussion board feature",
    ],
    featured: true,
  },
  {
    slug: "space-rides",
    title: "Space Rides",
    tagline: "3D space combat · A*, steering & behavior trees",
    description:
      "A 3D space combat game inspired by Star Wars: Squadrons and Kirby Air Ride, built in Unity with a team of three. I implemented A* pathfinding, steering behaviors like wandering, chasing and evading, and a behavior tree for enemy AI decision-making.",
    role: "Gameplay / AI Programmer",
    engine: "Unity (C#)",
    year: "Jan – Apr 2023",
    category: "school",
    image: "/images/spaceriders.webp",
    imageAlt: "Space Rides gameplay screenshot with ships in space",
    glyph: "SR",
    gradient: "from-indigo-600/80 via-violet-600/70 to-purple-500/80",
    links: [{ label: "More on itch.io", href: "https://zetachan.itch.io/" }],
    highlights: [
      "A* algorithm for AI pathfinding",
      "Steering behaviors: wander, chase, evade",
      "Behavior tree AI decision-making",
    ],
    featured: true,
  },
  {
    slug: "warzone-game",
    title: "Warzone Game",
    tagline: "Risk-style strategy · C++ & STL",
    description:
      "A Risk-style game built in C++ with the STL in a team of five. I created a simple state-machine game engine, applied MVC and the Observer pattern for game logging, and used the Adapter pattern so the engine reads commands from both the console and a file.",
    role: "Gameplay / Engine Programmer",
    engine: "C++ · STL",
    year: "Sep – Dec 2022",
    category: "school",
    glyph: "WZ",
    gradient: "from-emerald-600/80 via-teal-600/70 to-cyan-500/80",
    highlights: [
      "State machine driven game engine",
      "MVC architecture and Observer pattern logging",
      "Adapter pattern for console + file commands",
    ],
  },
  {
    slug: "rootin-4-ya",
    title: "Rootin' 4 Ya!",
    tagline: "4-player farming party game · Global Game Jam 2023",
    description:
      "A chaotic 4-player local multiplayer farming game made at Global Game Jam 2023. Play as the cat, the dog, the capybara, or the donkey — collect vegetables and rush to sell the highest-demand crops before the market closes.",
    role: "Gameplay Programmer",
    engine: "Unity (C#)",
    year: "Feb 2023",
    category: "game-jam",
    image: "/images/rootin4ya.webp",
    imageAlt: "Rootin' 4 Ya! cover art with cute farm animals",
    glyph: "R4Y",
    gradient: "from-lime-600/80 via-green-600/70 to-emerald-500/80",
    links: [{ label: "More on itch.io", href: "https://zetachan.itch.io/" }],
    highlights: ["4-player local multiplayer", "Vegetable collecting + market selling loop", "Made in 48 hours for GGJ 2023"],
  },
  {
    slug: "shadows",
    title: "Shadows",
    tagline: "3D puzzle stealth FPS",
    description:
      "A 3D puzzle stealth FPS built in Unity. Sneak through handcrafted levels, use light and shadow as both a weapon and a hiding place, and outsmart guards to reach the exit.",
    role: "Gameplay Programmer",
    engine: "Unity (C#)",
    category: "school",
    image: "/images/shadows.webp",
    imageAlt: "Shadows cover art with a dark silhouetted scene",
    glyph: "SH",
    gradient: "from-slate-700/80 via-slate-600/70 to-zinc-500/80",
    highlights: ["Stealth and puzzle mechanics", "Level design and lighting direction", "Made in Unity"],
  },
  {
    slug: "kitty-and-katy",
    title: "Kitty and Katy: Ghost Hunt",
    tagline: "2D puzzle escape · Coco Jam 2021",
    description:
      "A 2D puzzle escape game made for Coco Jam 2021. Guide Kitty and Katy through a ghostly house, solving item-based puzzles to unlock each room and escape together.",
    role: "Gameplay Programmer",
    engine: "Unity (C#)",
    year: "2021",
    category: "game-jam",
    image: "/images/kittyandkaty.webp",
    imageAlt: "Kitty and Katy cover art with two cats and a ghost",
    glyph: "KK",
    gradient: "from-amber-600/80 via-orange-600/70 to-rose-500/80",
    links: [{ label: "More on itch.io", href: "https://zetachan.itch.io/" }],
    highlights: ["2D puzzle escape gameplay", "Item-based room puzzles", "Made for Coco Jam 2021"],
  },
  {
    slug: "super-hyper-cube",
    title: "Super Hyper Cube",
    tagline: "3D puzzle game · OpenGL from scratch",
    description:
      "A playable 3D puzzle game built from scratch in C++ and OpenGL. I wrote shaders for models, lighting and shadows, used hierarchical modeling to construct the scene, and integrated Freetype, ImGui, and Assimp for text rendering, tooling, and external models.",
    role: "Graphics / Gameplay Programmer",
    engine: "C++ · OpenGL",
    year: "Aug 2021",
    category: "school",
    glyph: "SHC",
    gradient: "from-fuchsia-600/80 via-purple-600/70 to-violet-500/80",
    highlights: [
      "Custom shaders for lighting and shadows",
      "Hierarchical modeling with OpenGL",
      "Freetype, ImGui and Assimp integration",
    ],
  },
];

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "studio", label: "Studio Work" },
  { id: "competition", label: "Competition" },
  { id: "game-jam", label: "Game Jams" },
  { id: "school", label: "School" },
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Le Catnip Collective",
    role: "Gameplay / UI / Online Programmer",
    period: "2022 – 2023",
    location: "Montreal, QC",
    description:
      "Gameplay, UI, and online programming on Jumpin' Jazz Cats, an online multiplayer party game built in Unreal Engine 5 and later published by Team17.",
    highlights: [
      "Built gameplay and minigame systems in UE5",
      "Owned UI programming and HUD systems",
      "Worked on the online multiplayer side of the game",
    ],
    tags: ["Unreal Engine 5", "Gameplay", "UI", "Online"],
  },
  {
    company: "Motive Studio (EA)",
    role: "Gameplay Programmer Intern",
    period: "Jan – Aug 2022",
    location: "Montreal, QC",
    description:
      "Eight-month internship on the Iron Man title. Worked in C++ across Unreal Engine 5 and Frostbite, collaborating closely with the gameplay design team.",
    highlights: [
      "Implemented health, shield, and combat resources with the Gameplay Ability System",
      "Used Frostbite ECS for hit detection and finisher resources",
      "Created UI in UE5/Frostbite and helped integrate ImGui",
      "Wrote Confluence documentation for the systems I built",
    ],
    tags: ["Unreal Engine 5", "Frostbite", "C++", "ECS", "GAS"],
  },
  {
    company: "Matrox Graphics",
    role: "Automation Software Developer Intern",
    period: "Sep – Dec 2021",
    location: "Dorval, QC",
    description:
      "Automation and tooling for hardware verification on the software team.",
    highlights: [
      "Developed Perl scripts for automated reporting",
      "Built C# and Perl analysis tools to assist IC designers",
    ],
    tags: ["Perl", "C#", "Automation"],
  },
  {
    company: "Concordia University",
    role: "B.Sc. Computer Science",
    period: "2019 – 2023",
    location: "Montreal, QC",
    description:
      "Bachelor of Computer Science with a focus on game development, gameplay and UI programming, computer graphics, and game engines.",
    highlights: ["Dean's List 2020 – 2021", "Member of the Concordia Game Development Club"],
    tags: ["C++", "Data Structures", "Computer Graphics", "AI"],
  },
];

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Languages",
    skills: ["C++", "C#", "Python", "Perl"],
  },
  {
    label: "Engines & APIs",
    skills: ["Unreal Engine 5", "Unity", "Frostbite", "OpenGL"],
  },
  {
    label: "Systems",
    skills: [
      "Gameplay Ability System",
      "ECS",
      "Behavior Trees",
      "Steering Behaviors",
      "A* Pathfinding",
      "Multiplayer / Online",
      "UI Programming",
      "Shaders",
    ],
  },
  {
    label: "Tools",
    skills: ["Perforce", "Git", "Visual Studio", "JetBrains Rider", "ImGui", "Firebase", "LootLocker"],
  },
];

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/zetachan17", handle: "@zetachan17" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/runzezhu/", handle: "in/runzezhu" },
  { label: "itch.io", href: "https://zetachan.itch.io/", handle: "zetachan" },
  { label: "Spotify", href: "https://open.spotify.com/user/mu83fj9jr919d2nedm9n8xdkx", handle: "swiftie mode" },
  { label: "Email", href: "mailto:zetachan17@gmail.com", handle: "zetachan17@gmail.com" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const resumeHref = "/Runze_Zhu_Resume.pdf";
