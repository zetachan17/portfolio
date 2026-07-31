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
    slug: "assassins-creed-codename-hexe",
    title: "Assassin's Creed Codename HEXE",
    tagline: "In development at Ubisoft Montreal",
    description:
      "Ubisoft Montreal's next flagship Assassin's Creed, currently in development. As a generalist programmer on the Anvil Engine team I build C++ ImGui debugging tools for gameplay and design, automated test suites that protect core systems, and pipeline tooling that keeps the production team moving.",
    role: "Generalist Programmer",
    engine: "Anvil Engine · C++",
    year: "Jul 2024 – Present",
    category: "studio",
    image: "/images/ac-hexe.webp",
    imageAlt: "Assassin's Creed Codename HEXE official teaser art from Ubisoft",
    glyph: "AC",
    gradient: "from-red-900/80 via-zinc-800/70 to-stone-700/80",
    links: [{ label: "Read more on Ubisoft", href: "https://www.ubisoft.com/en-us/news/ignt.58630/assassin-s-creed-into-2026" }],
    highlights: [
      "C++ ImGui debugging tools accelerating iteration for gameplay & design",
      "Automated test suites covering 3C, AI, UI, and combat",
      "Cut build validation time by 3 hours per cycle",
      "Prototyped LLM-based unit test generation with R&D",
    ],
    featured: true,
  },
  {
    slug: "call-of-duty-warzone-mobile",
    title: "Call of Duty: Warzone Mobile",
    tagline: "Worldwide launch · Beenox / Activision",
    description:
      "Free-to-play Battle Royale for up to 120 players, launched worldwide in March 2024. During my gameplay programming internship at Beenox I improved Player 3C, core movement, weapon, and vehicle mechanics using C++ and Lua, worked on UI with in-house scripting tools, and helped fix issues affecting millions of players.",
    role: "Gameplay Programmer Intern",
    engine: "C++ · Lua",
    year: "Jan – Apr 2024",
    category: "studio",
    image: "/images/warzone-mobile.webp",
    imageAlt: "Call of Duty: Warzone Mobile official launch key art from Activision",
    glyph: "WZM",
    gradient: "from-amber-600/80 via-orange-600/70 to-red-500/80",
    links: [{ label: "Official page", href: "https://www.callofduty.com/warzonemobile" }],
    highlights: [
      "Engaged in the worldwide launch, March 2024",
      "Player 3C, core movement, weapons, vehicles, and UI",
      "Fixed 15+ issues affecting 30M+ active players",
    ],
    featured: true,
  },
  {
    slug: "jumpin-jazz-cats",
    title: "Jumpin' Jazz Cats",
    tagline: "Online multiplayer party game · published by Team17",
    description:
      "An online multiplayer party game by Le Catnip Collective where up to nine cats sprint, swing, and slide through a jazzy cartoon mansion. As an Unreal developer I implemented the Gameplay Ability System on top of Lyra Starter Game, built UI and HUD in UMG, and created two new game modes — it's out now on Steam.",
    role: "Unreal Developer",
    engine: "Unreal Engine 5",
    year: "May – Aug 2023",
    category: "studio",
    image: "/images/jumpinjazzcats.webp",
    imageAlt: "Jumpin' Jazz Cats key art featuring cartoon cats in a mansion",
    glyph: "JJC",
    gradient: "from-emerald-600/80 via-lime-600/70 to-teal-500/80",
    links: [{ label: "View on Steam", href: "https://store.steampowered.com/app/1951780/Jumping_Jazz_Cats/" }],
    highlights: [
      "Gameplay Ability System for player status & abilities (Lyra-based)",
      "UI and HUD built in UMG",
      "Created two new game modes",
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
      "Gameplay Ability System: character status & combat resources",
      "Frostbite ECS: hit detection & skill resources",
      "20+ gameplay tasks; prototype passed 10+ sprints",
      "UI work in UE5 and Frostbite, ImGui integration",
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
    gradient: "from-teal-600/80 via-emerald-600/70 to-lime-500/80",
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
    gradient: "from-teal-600/80 via-emerald-600/70 to-lime-500/80",
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
    gradient: "from-emerald-600/80 via-teal-600/70 to-lime-500/80",
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
    gradient: "from-lime-600/80 via-green-600/70 to-emerald-500/80",
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
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    company: "Ubisoft Montreal",
    role: "Generalist Programmer",
    period: "Jul 2024 – Present",
    location: "Montreal, QC",
    description:
      "Working on Assassin's Creed Hexe in the Anvil Engine — tooling, testing, and gameplay support across the production team.",
    highlights: [
      "Developed and maintained C++ ImGui debugging tools, accelerating iteration for gameplay and design teams",
      "Designed and maintained C++ automated test suites covering 3C, AI, UI, and combat systems",
      "Integrated automated testing into the package approval pipeline, cutting build validation by 3 hours per cycle",
      "Prototyped an LLM-based unit test generation framework with the R&D team",
    ],
    tags: ["C++", "Anvil Engine", "ImGui", "Automated Testing"],
    current: true,
  },
  {
    company: "Beenox · Activision",
    role: "Gameplay Programmer Intern",
    period: "Jan – Apr 2024",
    location: "Montreal, QC",
    description:
      "Internship on Call of Duty: Warzone Mobile, engaged through its worldwide launch.",
    highlights: [
      "Improved Player 3C, core movement, weapon, and vehicle mechanics using C++ and Lua",
      "Worked on UI with in-house scripting tools",
      "Fixed 15+ issues affecting 30M+ active players",
    ],
    tags: ["C++", "Lua", "Call of Duty: Warzone Mobile"],
  },
  {
    company: "Le Catnip Collective",
    role: "Unreal Developer",
    period: "May – Aug 2023",
    location: "Montreal, QC",
    description:
      "Unreal development on Jumpin' Jazz Cats, an online multiplayer party game built in Unreal Engine 5 and later published by Team17.",
    highlights: [
      "Implemented the Gameplay Ability System for player status and abilities, based on Lyra Starter Game",
      "Created UI and HUD in UMG",
      "Built two new game modes and a foundation for future development",
    ],
    tags: ["Unreal Engine 5", "C++", "GAS", "UMG"],
  },
  {
    company: "Motive Studio · EA",
    role: "Gameplay Programmer Intern",
    period: "Jan – Aug 2022",
    location: "Montreal, QC",
    description:
      "Eight-month internship prototyping the Iron Man title in C++ across Unreal Engine 5 and Frostbite.",
    highlights: [
      "Prototyped character status and combat resources with the Gameplay Ability System",
      "Built hit detection and skill resources with Frostbite ECS",
      "Finished 20+ gameplay tasks and helped the prototype pass 10+ sprints",
    ],
    tags: ["Unreal Engine 5", "Frostbite", "C++", "ECS", "GAS"],
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
    skills: ["C++", "C#", "Lua", "Go"],
  },
  {
    label: "Engines & APIs",
    skills: ["Unreal Engine 5", "Unity", "Anvil Engine", "Frostbite", "OpenGL"],
  },
  {
    label: "Systems",
    skills: [
      "Gameplay Ability System",
      "ECS",
      "Automated Testing",
      "ImGui Debugging Tools",
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
    skills: ["Perforce", "Git", "Visual Studio", "JetBrains Rider", "SQL", "Firebase", "LootLocker"],
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
