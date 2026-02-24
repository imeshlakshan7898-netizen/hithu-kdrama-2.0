// ============================================================
// DRAMA / SERIES DATA - Easy to edit!
// To add a new drama: copy a drama object and change the values.
// To add episodes: add new entries to the `episodes` array.
// Each episode needs an `embedUrl` from Internet Archive.
// Server sources go in each episode's `sources` array.
// ============================================================

export interface Source {
  name: string
  embedUrl: string
}

export interface Episode {
  number: number
  title: string
  sources: Source[]
  /** Direct download links (optional per episode) */
  telegramUrl?: string
  googleDriveUrl?: string
}

export interface Drama {
  id: string
  title: string
  year: number
  genre: string[]
  description: string
  posterUrl: string
  episodeCount: number
  episodes: Episode[]
  featured?: boolean
}

// ============================================================
// ADD / EDIT YOUR DRAMAS BELOW
// ============================================================

export const dramas: Drama[] = [
  {
    id: "vincenzo",
    title: "vincenzo ",
    year: 2021,
    genre: ["Crime / Mafia", "Drama", "Action","Thriller"],
    description:
"ඉතාලියේ mafia lawyer කෙනෙකු ලෙස වැඩ කරන කොරියානු වංශයේ Vincenzo Cassano, සඟවා තිබූ රන් තොගයක් හේතුවෙන් දකුණු කොරියාවට ආපසු පැමිණේ. එහිදී ඔහු දුෂිත හා බලවත් Babel Group නම් සමාගමකට එරෙහිව නීතියෙන් සහ නීතියෙන් පිටතත් ක්‍රම භාවිතා කරමින් සටන් කරයි. විනෝදජනක dark comedy, ක්‍රියාදාම, නීතිමය බුද්ධිමත් සැලසුම් සහ සූක්ෂම පළිගැනීම් එකට මිශ්‍ර වූ මෙම කතාව, අසාමාන්‍ය මිතුරන් සමඟ එක්ව අධර්මයට එරෙහිව කරන සටනක් ගැන වේ.",
    posterUrl: "https://i.ibb.co/jP97T54k/MV5-BNj-A1-Ym-Ji-NTMt-MDc4-OC00-Zjlk-LTgy-Mjct-Yz-Rm-MWJh-Mm-Zh-Mjky-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
    episodeCount: 20,
    featured: true,
    episodes: [
      {
        number: 1,
        title: "Episode 1 - Arrival of a Mafia Lawyer",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-01.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-01.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/example1",
      },
      {
        number: 2,
        title: "Episode 2 - The Tenant with a Secret",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-02.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-02.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/example2",
      },
      {
        number: 3,
        title: "Episode 3 - The Battle Begins",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-03.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-03.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/example3",
      },
      {
        number: 4,
        title: "Episode 4 - A Dangerous Deal",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-04.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-04.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/example4",
      },
      {
        number: 5,
        title: "Episode 5 - The Villain’s Mask",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-05.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-05.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/example5",
      },
      {
        number: 6,
        title: "Episode 6 - Hidden Truths",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-06.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-06.-x-264.540-p.-nf.-web-dl-imagine"},
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/example6",
      },
      {
        number: 7,
        title: "Episode 7 - The Trap",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-07.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-07.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/example7",
      },
      {
        number: 8,
        title: "Episode 8 - Double Cross",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-08.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-08.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/example8",
      },
      {
        number: 9,
        title: "Episode 9 - The Game Changes",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-09.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-09.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/example9",
      },
      {
        number: 10,
        title: "Episode 10 - Sweet Revenge",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-10.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-10.-x-264.540-p.-nf.-web-dl-imagine"},
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/example10",
      },
      {
        number: 11,
        title: "Episode 11 - The Enemy Within",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-11.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-12.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/example11",
      },
      {
        number: 12,
        title: "Episode 12 - A Bloody Warning",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-12.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-12.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/example12",
      },
      {
        number: 13,
        title: "Episode 13 - Justice, Mafia Style",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-13.-x-264.540-p.-nf.-web-dl-imagine_202510" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-13.-x-264.540-p.-nf.-web-dl-imagine_202510" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/example12",
      },
       {
        number: 14,
        title: "Episode 14 - The Final Move",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-s-01e-14.210404.720-p-next" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-s-01e-14.210404.720-p-next" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo3",
      },
      {
        number: 15,
        title: "Episode 15 - No Mercy",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-15.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-15.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo3",
      },
      {
       number: 16,
        title: "Episode 16 - A New Alliance",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-16.-x-264.540-p.-nf.-web-dl-imagin" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-16.-x-264.540-p.-nf.-web-dl-imagin" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo3",
      },
      {
        number: 17,
        title: "Episode 17 - The Price of Revenge",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-17.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-17.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo3",
      },
      {
        number: 18,
        title: "Episode 18 - Fall of Babel",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-18.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-18.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo3",
      },
      {
        number: 19,
        title: "Episode 19 - The Last Plan",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-19.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-19.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo3",
      },
      {
        number: 20,
        title: "Episode 20 - A Mafia’s Goodbye",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/vincenzo.-e-20.-x-264.540-p.-nf.-web-dl-imagine" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/vincenzo.-e-20.-x-264.540-p.-nf.-web-dl-imagine" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo3",
      },
    ],
  },
  {
    id: "my-demon",
    title: "My Demon",
    year: 2023,
    genre: ["Fantasy", "Comedy", "Drama", "Romance"],
    description:
    "ශතවර්ෂ ගණනාවක් ජීවත් වෙමින් මිනිසුන් සමඟ ගිවිසුම් කරන ඩීමන් කෙනෙකුගේ බලය අහම්බෙන් බලවත් ව්‍යාපාරික තරුණියකට මාරු වීමෙන් ආරම්භ වන රසවත් ප්‍රේම කතාවක්. රහස්, අභියෝග සහ ආදරයෙන් පිරුණු fantasy romance කතාමාලාවක්.",
    posterUrl: "https://i.ibb.co/gZfGkcz2/MV5-BNTg5-Ym-U0-OTYt-Nz-Iz-Ny00-Mz-M1-LWI0-OWEt-Yzc5-Zm-Rl-Nm-Jl-ODk5-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
    episodeCount: 16,
    episodes: [
      {
        number: 1,
        title: "Episode 1 - The Demon Lives Next Door",
        sources: [
          { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=kHLbqTwrgR3NPxE3OY6" },
          { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=kHLbqTwrgR3NPxE3OY6" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo1",
      },
      {
        number: 2,
        title: "Episode 2 - Deal with the Devil",
        sources: [
          { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k50x4qv6CGembYE3PVS" },
          { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k50x4qv6CGembYE3PVS" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo2",
      },
      {
        number: 3,
        title: "Episode 3 - Contract Marriage",
        sources: [
          { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k6uyQ2xUOYKIwBE3W3w" },
          { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k6uyQ2xUOYKIwBE3W3w" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo3",
      },
      {
        number: 4,
        title: "Episode 4 - Dangerous Attraction",
        sources: [
          { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k2Q1LuYeGcRcVPE4bIe" },
          { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k2Q1LuYeGcRcVPE4bIe" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo4",
      },
      {
        number: 5,
        title: "Episode 5 - A Demon’s Protection",
        sources: [
          { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k5VNzYFPYeyEhFE4bGK" },
          { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k5VNzYFPYeyEhFE4bGK" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo5",
      },
      {
        number: 6,
        title: "Episode 6 - Hidden Truths",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-06.-nf.-x-264.540-p-mkvdrama.-org" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-06.-nf.-x-264.540-p-mkvdrama.-org"}
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo6",
      },
      {
        number: 7,
        title: "Episode 7 - Trust and Doubt",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-07.-nf.-x-264.540-p-mkvdrama.-org" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-07.-nf.-x-264.540-p-mkvdrama.-org" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo7",
      },
      {
        number: 8,
        title: "Episode 8 - A Growing Bond",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-08.-nf.-x-264.540-p-mkvdrama.-org" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-08.-nf.-x-264.540-p-mkvdrama.-org" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo8",
      },
      {
        number: 9,
        title: "Episode 9 - Secrets Revealed",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-09.-nf.-x-264.540-p-mkvdrama.-org" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-09.-nf.-x-264.540-p-mkvdrama.-org" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo8",
      },
       {
        number: 10,
        title: "Episode 10 -  Betrayal",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-10.-nf.-x-264.540-p-mkvdrama.-org" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-10.-nf.-x-264.540-p-mkvdrama.-org" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/vincenzo8",
      },
      {
        number: 11,
        title: "Episode 11- Losing Power",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-11.-nf.-x-264.540-p-mkvdrama.-org" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-11.-nf.-x-264.540-p-mkvdrama.-org" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/goblin1",
      },
       {
        number: 12,
        title: "Episode 12 - Love and Sacrifice",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-12.-nf.-x-264.540-p-mkvdrama.-org" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-12.-nf.-x-264.540-p-mkvdrama.-org" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/goblin1",
      },
      {
        number: 13,
        title: "Episode 13 - Facing Fate",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-13.-nf.-x-264.540-p-mkvdrama.-org" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-13.-nf.-x-264.540-p-mkvdrama.-org" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/goblin1",
      },
      {
        number: 14,
        title: "Episode 14 - The Final Battle",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-14.-nf.-x-264.540-p-mkvdrama.-org" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-14.-nf.-x-264.540-p-mkvdrama.-org" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/goblin1",
      },
      {
        number: 15,
        title: "Episode 15 - Until We Meet Again",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-15.-nf.-x-264.540-p-mkvdrama.-org" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-15.-nf.-x-264.540-p-mkvdrama.-org" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/goblin1",
      },
      {
        number: 16,
        title: "Episode 16 - Our Eternal Promise",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-16.-nf.-x-264.540-p-mkvdrama.-org" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/my.-demon.-s-01e-16.-nf.-x-264.540-p-mkvdrama.-org" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/goblin1",
      },
    ],
  },
  {
    id: "love-untangled",
    title: "Love Untangled",
    year: 2016,
    genre: ["Comedy", "Youth", "Drama"],
    description:
  "අතීත ආදර වේදනා සහ ගැටළු වලින් පීඩිත වූ දෙදෙනෙකු අහම්බෙන් හමුවෙමින්, එකිනෙකාගේ ජීවිතයේ ගැටළු විසඳා ගනිමින් ආදරයට ලඟා වන සරළ සහ හෘදයාංගම කොරියානු නාට්‍යයක්.",
    posterUrl: "https://i.ibb.co/FbtBL2bz/ENUS-Love-Untangled-Teaser-KA-Vertical-RGB-PRE.jpg",
    episodeCount: 1,
    episodes: [
      {
        number: 1,
        title: "Full Movie",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/love.-untangled.-2025.-x-264.540-p.-nf.-web-dl-dramaday.-me" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/love.-untangled.-2025.-x-264.540-p.-nf.-web-dl-dramaday.-me" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/goblin1",
      },
    ],
  },
  {
    id: "pilot",
    title: "Pilot",
    year: 2024,
    genre: ["Romance", "Drama", "Comedy"],
    description:
    "සාර්ථක ගුවන් නියමුවෙකුගේ ජීවිතය හදිසි සිද්ධියක් නිසා කඩා වැටෙමින්, වෙනස් හැඳුනුම්පතක් යටතේ නැවත ඔහුගේ වෘත්තිය ගොඩනැගීමට උත්සාහ කරන විහිළු සහ හැඟීම් පිරුණු කොරියානු චිත්‍රපටයක්.",
    posterUrl: "https://i.ibb.co/VWqRDGHr/MV5-BYTAw-N2-Y3-Nzgt-Zjcy-My00-MTVh-LWEx-MWUt-NDgx-MDQx-NDZj-Zjgx-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
    episodeCount: 1,
    episodes: [
      {
        number: 1,
        title: "Full Movie",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/pilot.-2024.720-p.-webrip.-x-264.-aac-baiscopedownloads.-link" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/pilot.-2024.720-p.-webrip.-x-264.-aac-baiscopedownloads.-link" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/squid1",
      },
      
    ],
  },
  {
    id: "ghost-train",
    title: "Ghost Train",
    year: 2025,
    genre: ["Horror", "Thriller", "Mystery"],
    description:
    "රාත්‍රී දුම්රියක සිදු වන අමුතු හා භයානක සිද්ධි අතර අතුරුදන් වූ මිනිසුන්ගේ රහස හෙළි කිරීමට උත්සාහ කරන යාත්‍රිකයන්ගේ horror-mystery කතාවක්.",
    posterUrl: "https://i.ibb.co/zHjZzS3H/poster-14392.jpg",
    episodeCount: 1,
    episodes: [
      {
        number: 1,
        title: "Full Movie",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/ghost-train-2025-720-p.-webrip.-baiscopedownloads.-link" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/ghost-train-2025-720-p.-webrip.-baiscopedownloads.-link" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/star1",
      },
    ],
  },
   {
    id: "Mantis",
    title: "Mantis",
    year: 2025,
    genre: ["Crime", "Thriller", "Mystery"],
    description:
    "‘Mantis’ ලෙස හඳුන්වන බුද්ධිමත් serial killer කෙනෙකු සහ ඔහු අල්ලා ගැනීමට උත්සාහ කරන detective කෙනෙකු අතර ඇතිවන suspense සහ thriller පිරුණු අපරාධ කතාවක්.",
    posterUrl: "https://i.ibb.co/bgCZ64c3/Mantis-film-poster.png",
    episodeCount: 1,
    episodes: [
      {
        number: 1,
        title: "Full Movie",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/mantis.-2025.-x-264.540-p.-nf.-web-dl-dramaday.-me" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/mantis.-2025.-x-264.540-p.-nf.-web-dl-dramaday.-me" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/star1",
      },
    ],
  },
  {
    id: "Lost-In-Starlight",
    title: "Lost In Starlight",
    year: 2025,
    genre: ["Crime", "Thriller", "Mystery"],
    description:
     "අහම්බෙන් හමුවූ දෙදෙනෙකු අතර තරු මෙන් දිග හැරෙන ආදරයක්, කාලය සහ දුර හරහා පරීක්ෂාවට ලක් වෙමින් ගලායන රසවත් fantasy-ප්‍රේම කතාවක්.",
    posterUrl: "https://i.ibb.co/XZBfRVBD/MV5-BNGY3-OWYx-Mz-At-Nzll-NC00-MGU0-LThh-NDUt-Mj-U1-Mj-Nh-MWIx-Yjg1-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1000.jpg",
    episodeCount: 1,
    episodes: [
      {
        number: 1,
        title: "Full Movie",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/lost.-in.-starlight.-2025.720-p.-webrip.-x-264.-aac-yts.-mx" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/lost.-in.-starlight.-2025.720-p.-webrip.-x-264.-aac-yts.-mx" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/star1",
      },
    ],
  },
  {
  id: "My-Youth",
  title: "My Youth",
  year: 2025,
  genre: ["Youth", "Romance", "Drama"],
  description:
  "තරුණ කාලයේ සිහින, ආදරය සහ ජීවිතයේ අභියෝග අතර ගමන් කරන තරුණයින්ගේ කතාවක්. අතීතයේ සම්බන්ධතාවයක් නැවත හමුවීමත් සමඟ ඔවුන්ගේ ජීවිත වෙනස්වන emotional youth romance drama එකක්.",
  posterUrl: "https://i.ibb.co/wh2rM763/My-Youth-TV-series.png",
  episodeCount: 12,
  episodes: [
    {
      number: 1,
      title: "Episode 1 - A New Beginning",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-01.-friday.-x-264.540-p-mkvdrama.-me-1" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-01.-friday.-x-264.540-p-mkvdrama.-me-1" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/myyouth1",
    },
    {
      number: 2,
      title: "Episode 2 - Crossing Paths",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-02.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-02.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/myyouth2",
    },
    {
      number: 3,
      title: "Episode 3 - Old Memories",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-03.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-03.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/myyouth3",
    },
    {
      number: 4,
      title: "Episode 4 - Growing Closer",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-04.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-04.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/myyouth4",
    },
    {
      number: 5,
      title: "Episode 5 - Hidden Feelings",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-05.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-05.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/myyouth5",
    },
    {
      number: 6,
      title: "Episode 6 - Confession",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-06.-friday.-x-264.540-p-mkvdrama.-net" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-06.-friday.-x-264.540-p-mkvdrama.-net" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/myyouth6",
    },
    {
      number: 7,
      title: "Episode 7 - Broken Trust",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-07.-friday.-x-264.540-p-mkvdrama.-net" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-07.-friday.-x-264.540-p-mkvdrama.-net" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/myyouth7",
    },
    {
      number: 8,
      title: "Episode 8 - Reunion",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-08.-friday.-x-264.540-p-mkvdrama.-net" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-08.-friday.-x-264.540-p-mkvdrama.-net" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/myyouth8",
    },
    {
      number: 9,
      title: "Episode 9 - Facing the Past",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-09.-friday.-x-264.540-p-mkvdrama.-net" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-09.-friday.-x-264.540-p-mkvdrama.-net" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/myyouth9",
    },
    {
      number: 10,
      title: "Episode 10 - Turning Point",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-10.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-10.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/myyouth10",
    },
    {
      number: 11,
      title: "Episode 11 - Until Tomorrow",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-11.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-11.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/myyouth11",
    },
    {
      number: 12,
      title: "Episode 12 - Our Youth",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-12.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/my.-youth.-s-01e-12.-x-264.540-p.-friday.-web-dl-aric-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/myyouth12",
    },
  ],
},
{
  id: "good-boy",
  title: "Good Boy",
  year: 2025,
  genre: ["Action", "Comedy", "Crime", "Drama"],
  description:
  "පැරණි ජාතික ක්‍රීඩකයන් පිරිසක් විශේෂ පොලිස් කණ්ඩායමක් ලෙස එකතු වී අපරාධවලට එරෙහිව සටන් කරන Action සහ Comedy මිශ්‍ර කොරියානු නාට්‍යයක්.",
  posterUrl: "https://i.ibb.co/v65SzxLq/zs-Zyv-EU2cb-Nknrl-ESV9bh3-YMh-JH.jpg",
  episodeCount: 16,
  episodes: [
    {
      number: 1,
      title: "Episode 1 - The Return of Champions",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-01.-x-264.540-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-01.-x-264.540-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy1",
    },
    {
      number: 2,
      title: "Episode 2 - Special Task Force",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-02.-x-264.540-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-02.-x-264.540-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy2",
    },
    {
      number: 3,
      title: "Episode 3 - First Mission",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-03.-x-264.540-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-03.-x-264.540-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy3",
    },
    {
      number: 4,
      title: "Episode 4 - Old Rival",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-04.-x-264.540-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-04.-x-264.540-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy4",
    },
    {
      number: 5,
      title: "Episode 5 - Undercover",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-05.-x-264.540-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-05.-x-264.540-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy5",
    },
    {
      number: 6,
      title: "Episode 6 - The Trap",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-06" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-06" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy6",
    },
    {
      number: 7,
      title: "Episode 7 - Broken Rules",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-07" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-07" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy7",
    },
    {
      number: 8,
      title: "Episode 8 - Unexpected Bond",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-08" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-08" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy8",
    },
    {
      number: 9,
      title: "Episode 9 - Hidden Enemy",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-09" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-09" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy9",
    },
    {
      number: 10,
      title: "Episode 10 - Turning Point",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-10" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-10" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy10",
    },
    {
      number: 11,
      title: "Episode 11 - The Betrayal",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-11.-x-265.720-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-11.-x-265.720-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy11",
    },
    {
      number: 12,
      title: "Episode 12 - The Final Plan",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-12.-x-265.720-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-12.-x-265.720-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy12",
    },
    {
      number: 13,
      title: "Episode 13 - Showdown",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-13.-x-265.720-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-13.-x-265.720-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy13",
    },
    {
      number: 14,
      title: "Episode 14 - Sacrifice",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-14.-x-265.720-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-14.-x-265.720-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy14",
    },
    {
      number: 15,
      title: "Episode 15 - The Last Stand",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-15.-x-265.720-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-15.-x-265.720-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy15",
    },
    {
      number: 16,
      title: "Episode 16 - A New Beginning",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-16.-x-265.720-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/good.-boy.-s-01e-16.-x-265.720-p.-amzn.-web-dl-mrhulk-dramaday.-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/goodboy16",
    },
  ],
},
{
  id: "Would-You-Marry-Me",
  title: "Would You Marry Me",
  year: 2025,
  genre: ["Romance", "Comedy", "Drama"],
  description:
  "අහම්බෙන් හමුවූ දෙදෙනෙකු අතර ආරම්භ වන අසාමාන්‍ය සම්බන්ධතාවයක් විවාහයක් දක්වා ගමන් කරන අතර, ආදරය, විශ්වාසය සහ ජීවිතයේ තීරණ අතර ගැටෙන romantic comedy drama එකක්.",
  posterUrl: "https://i.ibb.co/CKcmdz1t/MV5-BZDhj-OGQ0-ZDkt-NGEy-ZS00-ZWIy-LWI2-Y2-Qt-Nm-Q4-ZWJj-NTU5-ZTc2-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
  episodeCount: 12,
  episodes: [
    {
      number: 1,
      title: "Episode 1 - First Encounter",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/would.-you.-marry.-me.-s-01e-01.-dsnp.-x-264.540-p-mkvdrama.-net-1" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/would.-you.-marry.-me.-s-01e-01.-dsnp.-x-264.540-p-mkvdrama.-net-1" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/wym1",
    },
    {
      number: 2,
      title: "Episode 2 - Unexpected Proposal",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/would.-you.-marry.-me.-s-01e-02.-dsnp.-x-264.540-p-mkvdrama.-net" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/would.-you.-marry.-me.-s-01e-02.-dsnp.-x-264.540-p-mkvdrama.-net" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/wym2",
    },
    {
      number: 3,
      title: "Episode 3 - Contract Relationship",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/would.-you.-marry.-me.-s-01e-03.-dsnp.-x-264.540-p-mkvdrama.-net" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/would.-you.-marry.-me.-s-01e-03.-dsnp.-x-264.540-p-mkvdrama.-net" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/wym3",
    },
    {
      number: 4,
      title: "Episode 4 - Growing Feelings",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/would.-you.-marry.-me.-s-01e-04.-dsnp.-x-264.540-p-mkvdrama.-net" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/would.-you.-marry.-me.-s-01e-04.-dsnp.-x-264.540-p-mkvdrama.-net" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/wym4",
    },
    {
      number: 5,
      title: "Episode 5 - Jealousy",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/would.-you.-marry.-me.-s-01e-05.-dsnp.-x-264.540-p-mkvdrama.-net" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/would.-you.-marry.-me.-s-01e-05.-dsnp.-x-264.540-p-mkvdrama.-net" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/wym5",
    },
    {
      number: 6,
      title: "Episode 6 - Confession",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/would.-you.-marry.-me.-s-01e-06.-dsnp.-x-264.540-p-mkvdrama.-net" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/would.-you.-marry.-me.-s-01e-06.-dsnp.-x-264.540-p-mkvdrama.-net" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/wym6",
    },
    {
      number: 7,
      title: "Episode 7 - The Secret",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/would-you-marry-me-s-01e-07-x-265-720-p-dsnp-web-dl-bioma-dramaday-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/would-you-marry-me-s-01e-07-x-265-720-p-dsnp-web-dl-bioma-dramaday-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/wym7",
    },
    {
      number: 8,
      title: "Episode 8 - Breakup",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/would-you-marry-me-s-01e-08-x-265-720-p-dsnp-web-dl-aric-dramaday-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/would-you-marry-me-s-01e-08-x-265-720-p-dsnp-web-dl-aric-dramaday-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/wym8",
    },
    {
      number: 9,
      title: "Episode 9 - Reunion",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/would-you-marry-me-s-01e-09-x-265-720-p-dsnp-web-dl-aric-dramaday-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/would-you-marry-me-s-01e-09-x-265-720-p-dsnp-web-dl-aric-dramaday-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/wym9",
    },
    {
      number: 10,
      title: "Episode 10 - Truth Revealed",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/would-you-marry-me-s-01e-10-x-265-720-p-dsnp-web-dl-aric-dramaday-me" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/would-you-marry-me-s-01e-10-x-265-720-p-dsnp-web-dl-aric-dramaday-me" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/wym10",
    },
    {
      number: 11,
      title: "Episode 11 - Final Decision",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/would-you-marry-me-s-01e-11-x-265-720-p-dsnp-web-dl-aric-dramaday-me-1" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/would-you-marry-me-s-01e-11-x-265-720-p-dsnp-web-dl-aric-dramaday-me-1" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/wym11",
    },
    {
      number: 12,
      title: "Episode 12 - Happily Ever After",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/would-you-marry-me-s-01e-12-x-265-720-p-dsnp-web-dl-aric-dramaday-me-1" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/would-you-marry-me-s-01e-12-x-265-720-p-dsnp-web-dl-aric-dramaday-me-1" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/wym12",
    },
  ],
},
{
  id: "When-Life-Gives-You-Tangerines",
  title: "When Life Gives You Tangerines",
  year: 2025,
  genre: ["Romance", "Drama", "Life"],
  description:
  "ජීවිතයේ සතුටු හා දුක අතර ගමන් කරන දෙදෙනෙකුගේ දිගු කාලීන ආදර කතාවක්. කාලය, සිහින සහ අභියෝග හරහා ඔවුන්ගේ ජීවිත වෙනස්වන emotional romance drama එකක්.",
  posterUrl: "https://i.ibb.co/Wv2qb0p0/en-us-wlgyt-s1-main-da-ka-spring-vertical-27x40-rgb-pre-1.jpg",
  episodeCount: 16,
  episodes: [
    {
      number: 1,
      title: "Episode 1 - First Meeting",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-01.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-01.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine1",
    },
    {
      number: 2,
      title: "Episode 2 - A Promise",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-02.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-02.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine2",
    },
    {
      number: 3,
      title: "Episode 3 - Growing Feelings",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-03.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-03.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine3",
    },
    {
      number: 4,
      title: "Episode 4 - Memories",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-04.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-04.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine4",
    },
    {
      number: 5,
      title: "Episode 5 - Separation",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-05.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-05.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine5",
    },
    {
      number: 6,
      title: "Episode 6 - Reunion",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-06.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-06.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine6",
    },
    {
      number: 7,
      title: "Episode 7 - New Path",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-07.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-07.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine7",
    },
    {
      number: 8,
      title: "Episode 8 - Hard Times",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-08.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-08.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine8",
    },
    {
      number: 9,
      title: "Episode 9 - Dreams",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-09.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-09.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine9",
    },
    {
      number: 10,
      title: "Episode 10 - Truth",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-10.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-10.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine10",
    },
    {
      number: 11,
      title: "Episode 11 - Decision",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-11.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-11.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine11",
    },
    {
      number: 12,
      title: "Episode 12 - New Beginning",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-12.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-12.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine12",
    },
    {
      number: 13,
      title: "Episode 13 - Reunion",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-13.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-13.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine13",
    },
    {
      number: 14,
      title: "Episode 14 - Memories Return",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-14.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-14.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine14",
    },
    {
      number: 15,
      title: "Episode 15 - Final Choice",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-15.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-15.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine15",
    },
    {
      number: 16,
      title: "Episode 16 - Our Story",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-16.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/when.-life.-gives.-you.-tangerines.-s-01e-16.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tangerine16",
    },
  ],
}, 
{
  id: "The-King's-Affection",
  title: "The King's Affection",
  year: 2021,
  genre: ["Historical", "Romance", "Drama"],
  description:
  "ජෝසොන් රාජවංශයේ උපන් රහස් සඟවා ගත් රාජකීය කුමරියක් තම සහෝදරයාගේ මරණයෙන් පසු රජු ලෙස ජීවිතය ගත කරමින් ආදරය හා රාජකීය කුතුහල අතර ගැටෙන historical romance drama එකක්.",
  posterUrl: "https://i.ibb.co/wN3sJJ03/2-Qim2gr-Fzf-NJ4h3-QSTzxi8-Cs-Kd-G.jpg",
  episodeCount: 20,
  episodes: [
    {
      number: 1,
      title: "Episode 1 - The Hidden Twin",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k20IeEA81g7PfLE3pW0" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k20IeEA81g7PfLE3pW0" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka1",
    },
    {
      number: 2,
      title: "Episode 2 - A Dangerous Secret",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k38QsdrVrNIj3yE3rI6" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k38QsdrVrNIj3yE3rI6" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka2",
    },
    {
      number: 3,
      title: "Episode 3 - Becoming the Crown Prince",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k1QkZCP9BdWsbUE3rL4" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k1QkZCP9BdWsbUE3rL4" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka3",
    },
    {
      number: 4,
      title: "Episode 4 - First Love",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k7nIhEUiKCWXmtE3rNm" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k7nIhEUiKCWXmtE3rNm" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka4",
    },
    {
      number: 5,
      title: "Episode 5 - Palace Intrigue",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k6hpzgncWbgFeXE3rP4" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k6hpzgncWbgFeXE3rP4" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka5",
    },
    {
      number: 6,
      title: "Episode 6 - Conflicted Hearts",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k16Ws7iW1kD5VaE3wjA" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k16Ws7iW1kD5VaE3wjA" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka6",
    },
    {
      number: 7,
      title: "Episode 7 - A Risky Choice",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k5RUjVIXU7ktsvE3xay" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k5RUjVIXU7ktsvE3xay" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka7",
    },
    {
      number: 8,
      title: "Episode 8 - Truth Revealed",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k7LE32N8bCvO7zE3xC0" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k7LE32N8bCvO7zE3xC0" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka8",
    },
    {
      number: 9,
      title: "Episode 9 - Forbidden Feelings",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k6dulBVmuqfcUYE3yfY" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k6dulBVmuqfcUYE3yfY" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka9",
    },
    {
      number: 10,
      title: "Episode 10 - The King's Burden",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k5Ba3AXEec4q2JE3OzC" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k5Ba3AXEec4q2JE3OzC" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka10",
    },
    {
      number: 11,
      title: "Episode 11 - Betrayal",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k3babl0dFdeuzpE3ODo" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k3babl0dFdeuzpE3ODo" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka11",
    },
    {
      number: 12,
      title: "Episode 12 - A Dangerous Game",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k775pqqEDMryFPE3RPK" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k775pqqEDMryFPE3RPK" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka12",
    },
    {
      number: 13,
      title: "Episode 13 - Hidden Emotions",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k7lFS7H0l4OUv6E3SC2" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k7lFS7H0l4OUv6E3SC2" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka13",
    },
    {
      number: 14,
      title: "Episode 14 - Crisis",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k1xjShlRFkEPJGE3W84" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k1xjShlRFkEPJGE3W84" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka14",
    },
    {
      number: 15,
      title: "Episode 15 - The Truth Comes Out",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k6xGw6azKqgjcNE3X9a" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k6xGw6azKqgjcNE3X9a" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka15",
    },
    {
      number: 16,
      title: "Episode 16 - A Royal Decision",
      sources: [
        { name: "Server 1", embedUrl: "https://geo.dailymotion.com/player.html?video=k5g4GuXT16SBfuE4bJu" },
        { name: "Server 2", embedUrl: "https://geo.dailymotion.com/player.html?video=k5g4GuXT16SBfuE4bJu" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka16",
    },
    {
      number: 17,
      title: "Episode 17",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/the.-kings.-affection.-s-01e-17.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/the.-kings.-affection.-s-01e-17.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka17",
    },
    {
      number: 18,
      title: "Episode 18",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/the.-kings.-affection.-s-01e-18.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/the.-kings.-affection.-s-01e-18.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka18",
    },
    {
      number: 19,
      title: "Episode 19",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/the.-kings.-affection.-s-01e-19.-nf.-x-264.540-p-mkvdrama.-org" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/the.-kings.-affection.-s-01e-19.-nf.-x-264.540-p-mkvdrama.-org" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka19",
    },
    {
      number: 20,
      title: "Episode 20 - The King's Affection",
      sources: [
        { name: "Server 1", embedUrl: "https://archive.org/embed/the.-kings.-affection.-s-01e-20.-nf.-x-264.540-p-mkvdrama.-org_202510" },
        { name: "Server 2", embedUrl: "https://archive.org/embed/the.-kings.-affection.-s-01e-20.-nf.-x-264.540-p-mkvdrama.-org_202510" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/tka20",
    },
  ],
},
 {
    id: "Ballerina",
    title: "Ballerina",
    year: 2023,
    genre: ["Crime", "Thriller", "Action"],
    description:
    "තම හිතවත් යාලුවෙක්ගේ මරණයට වගකිව යුතු පුද්ගලයාගෙන් පලිගැනීමට යන හිටපු bodyguard කෙනෙකුගේ dark action revenge කතාවක්.",
      posterUrl: "https://i.ibb.co/wFY8bSbr/MV5-BOTgx-Nz-A0-MDkt-Yzc5-ZC00-MGY3-LWIw-Yj-It-MDJh-Nz-E2-ZGFj-Ym-E1-Xk-Ey-Xk-Fqc-Gc-V1-QL75-UX190-CR0-0-19.jpg",
    episodeCount: 1,
    episodes: [
      {
        number: 1,
        title: "Full Movie",
        sources: [
          { name: "Server 1", embedUrl: "https://archive.org/embed/mkvdrama.-org-ballerina.-2023.-nf.-x-264.720-p" },
          { name: "Server 2", embedUrl: "https://archive.org/embed/mkvdrama.-org-ballerina.-2023.-nf.-x-264.720-p" },
        ],
        telegramUrl: "https://t.me/example_channel",
        googleDriveUrl: "https://drive.google.com/file/d/star1",
      },
    ],
  },
  {
  id: "Alchemy-of-Souls",
  title: "Alchemy of Souls",
  year: 2022,
  genre: ["Fantasy", "Historical", "Romance"],
  description:
    "මැජික් සහ ආත්ම මාරු වීම සිදු වන ලෝකයක තරුණ මැජික් ශිල්පීන්ගේ ජීවිත, ආදරය හා රහස් ගැටෙන fantasy historical drama කතාවක්.",
  posterUrl: "https://i.ibb.co/0kMgfbh/q2iiprsxpoz6qvrj36wrayeqyhs.jpg",
  episodeCount: 20,
  episodes: [

{
number:1,
title:"Episode 1 - The Fate Begins",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1NlQstVVNJ9WDLN4n_LjMWPR5fVKOeHdX/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1NlQstVVNJ9WDLN4n_LjMWPR5fVKOeHdX/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1NlQstVVNJ9WDLN4n_LjMWPR5fVKOeHdX",
},

{
number:2,
title:"Episode 2 - A Soul Shift",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/19oa3CWTdd1FYwOxtxR8B_dfOmtfP0Fnv/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/19oa3CWTdd1FYwOxtxR8B_dfOmtfP0Fnv/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=19oa3CWTdd1FYwOxtxR8B_dfOmtfP0Fnv",
},

{
number:3,
title:"Episode 3 - Secret Training",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1cfHXTn5PQ5Gl7wTDkoPMbecy9glpp3qX/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1cfHXTn5PQ5Gl7wTDkoPMbecy9glpp3qX/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1cfHXTn5PQ5Gl7wTDkoPMbecy9glpp3qX",
},

{
number:4,
title:"Episode 4 - Hidden Power",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1HiI-fvLD3bEPCITR9ILxiaKWpk0ao8sP/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1HiI-fvLD3bEPCITR9ILxiaKWpk0ao8sP/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1HiI-fvLD3bEPCITR9ILxiaKWpk0ao8sP",
},

{
number:5,
title:"Episode 5 - A Dangerous Bond",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1y1y4Xcssp5Td13OSAlwXOcG5IIjfiwNP/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1y1y4Xcssp5Td13OSAlwXOcG5IIjfiwNP/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1y1y4Xcssp5Td13OSAlwXOcG5IIjfiwNP",
},

{
number:6,
title:"Episode 6 - Enemies Rise",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1iXTQ0ohem16fmigoxQzHYrBYY16Nrady/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1iXTQ0ohem16fmigoxQzHYrBYY16Nrady/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1iXTQ0ohem16fmigoxQzHYrBYY16Nrady",
},

{
number:7,
title:"Episode 7 - The Duel",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/16N4BEBTLAnWKFG5iqEncJvxu0YOfk8Tg/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/16N4BEBTLAnWKFG5iqEncJvxu0YOfk8Tg/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=16N4BEBTLAnWKFG5iqEncJvxu0YOfk8Tg",
},

{
number:8,
title:"Episode 8 - Truth Unveiled",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1Z8u15kOn5znLo89E2PoRdE349ziEcdFt/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1Z8u15kOn5znLo89E2PoRdE349ziEcdFt/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1Z8u15kOn5znLo89E2PoRdE349ziEcdFt",
},

{
number:9,
title:"Episode 9 - A New Alliance",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1FN8V7ZVADSOf4ENrQvaa9sAwWuNVFxlO/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1FN8V7ZVADSOf4ENrQvaa9sAwWuNVFxlO/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1FN8V7ZVADSOf4ENrQvaa9sAwWuNVFxlO",
},

{
number:10,
title:"Episode 10 - Betrayal",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1NZ0AfGtISabmZPADS7WpixlxJjopI6d-/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1NZ0AfGtISabmZPADS7WpixlxJjopI6d-/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1NZ0AfGtISabmZPADS7WpixlxJjopI6d-",
},

{
number:11,
title:"Episode 11 - Dark Secrets",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/14-R8uoFzlPmrLfRbqaDW5X7O06FljvOR/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/14-R8uoFzlPmrLfRbqaDW5X7O06FljvOR/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=14-R8uoFzlPmrLfRbqaDW5X7O06FljvOR",
},

{
number:12,
title:"Episode 12 - The Mage War",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1dCAWyXN8KQq4T2TJYAr9I1Q459yvnwb-/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1dCAWyXN8KQq4T2TJYAr9I1Q459yvnwb-/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1dCAWyXN8KQq4T2TJYAr9I1Q459yvnwb-",
},

{
number:13,
title:"Episode 13 - The Queen's Plan",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1SpreE_z5uAaqDjs-qmWBwEG7yHc45FPH/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1SpreE_z5uAaqDjs-qmWBwEG7yHc45FPH/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1SpreE_z5uAaqDjs-qmWBwEG7yHc45FPH",
},

{
number:14,
title:"Episode 14 - The Trap",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1oLK_0RGTROLPBC0MtFV2PgDmWAeclVQy/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1oLK_0RGTROLPBC0MtFV2PgDmWAeclVQy/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1oLK_0RGTROLPBC0MtFV2PgDmWAeclVQy",
},

{
number:15,
title:"Episode 15 - A Promise",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1kUn5tqS5L0luZecAwZtW6dC2ZQ0ictjZ/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1kUn5tqS5L0luZecAwZtW6dC2ZQ0ictjZ/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1kUn5tqS5L0luZecAwZtW6dC2ZQ0ictjZ",
},

{
number:16,
title:"Episode 16 - The Battle",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1q0ysCgTxy_5jdkMihIau47GQT_355ZH4/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1q0ysCgTxy_5jdkMihIau47GQT_355ZH4/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1q0ysCgTxy_5jdkMihIau47GQT_355ZH4",
},

{
number:17,
title:"Episode 17 - Final War",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1DzeGR0aHIm2tTPVJOalHxS1GdA6AegD9/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1DzeGR0aHIm2tTPVJOalHxS1GdA6AegD9/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1DzeGR0aHIm2tTPVJOalHxS1GdA6AegD9",
},

{
number:18,
title:"Episode 18 - Sacrifice",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1okrkCmlxJIkAiOmRgjv1w7o24eKIHHkQ/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1okrkCmlxJIkAiOmRgjv1w7o24eKIHHkQ/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1okrkCmlxJIkAiOmRgjv1w7o24eKIHHkQ",
},

{
number:19,
title:"Episode 19 - The End Nears",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1QfXTvMIzeYhdSrU1VpYpAUV1PA56_3cv/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1QfXTvMIzeYhdSrU1VpYpAUV1PA56_3cv/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1QfXTvMIzeYhdSrU1VpYpAUV1PA56_3cv",
},

{
number:20,
title:"Episode 20 - Finale",
sources:[
{name:"Server 1",embedUrl:"https://drive.google.com/file/d/1x3laWdabdeVZSfHZmnzV8hwpRuB7i1pe/preview"},
{name:"Server 2",embedUrl:"https://drive.google.com/file/d/1x3laWdabdeVZSfHZmnzV8hwpRuB7i1pe/preview"},
],
telegramUrl:"https://t.me/example_channel",
googleDriveUrl:"https://drive.google.com/uc?export=download&id=1x3laWdabdeVZSfHZmnzV8hwpRuB7i1pe",
},

]
},
{
  id: "a-good-day-to-be-a-dog",
  title: "A Good Day to Be a Dog",
  year: 2023,
  genre: ["Romance", "Fantasy", "Comedy"],
  description:
    "ශාපයකින් පසු පවුලේ රහසක් හේතුවෙන් සුනඛයෙකු බවට පත්වන ගුරුවරියක් සහ සුනඛයන්ට බය වන ගුරුවරයෙකු අතර ආදරයෙන් පිරුණු fantasy romance drama එකක්.",
  posterUrl: "https://i.ibb.co/6hnf8rc/MV5-BMTAw-Mm-Rl-NGYt-NDlm-NC00-NGQw-LTli-ZGYt-MDIy-Mz-A1-Zm-M4-Mz-Nh-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1000.jpg",
  episodeCount: 14,
  featured: false,
  episodes: [
    {
      number: 1,
      title: "Episode 1 - The Unexpected Curse",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/1drFm5pvo2gZMsxGMfC3V77-U_0jCFXOi/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/1drFm5pvo2gZMsxGMfC3V77-U_0jCFXOi/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/1drFm5pvo2gZMsxGMfC3V77-U_0jCFXOi/view"
    },
    {
      number: 2,
      title: "Episode 2 - A Secret Revealed",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/1pE8xMydJeSDZZuP4UCZKIkfq9xOjzcah/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/1pE8xMydJeSDZZuP4UCZKIkfq9xOjzcah/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/1pE8xMydJeSDZZuP4UCZKIkfq9xOjzcah/view"
    },
    {
      number: 3,
      title: "Episode 3 - Confusing Feelings",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/1DPUBmM7H392LbxEjQj8E-AdcgeFlkY9S/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/1DPUBmM7H392LbxEjQj8E-AdcgeFlkY9S/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/1DPUBmM7H392LbxEjQj8E-AdcgeFlkY9S/view"
    },
    {
      number: 4,
      title: "Episode 4 - A Growing Bond",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/1bYw5qE2YKqX0_A_vJABcrZhwQa1uxXrj/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/1bYw5qE2YKqX0_A_vJABcrZhwQa1uxXrj/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/1bYw5qE2YKqX0_A_vJABcrZhwQa1uxXrj/view"
    },
    {
      number: 5,
      title: "Episode 5 - Jealousy",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/1DsTgbYrJH4jr9Y60jhKmuOzyew1_erGM/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/1DsTgbYrJH4jr9Y60jhKmuOzyew1_erGM/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/1DsTgbYrJH4jr9Y60jhKmuOzyew1_erGM/view"
    },
    {
      number: 6,
      title: "Episode 6 - A Turning Point",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/1DsTgbYrJH4jr9Y60jhKmuOzyew1_erGM/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/1DsTgbYrJH4jr9Y60jhKmuOzyew1_erGM/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/1DsTgbYrJH4jr9Y60jhKmuOzyew1_erGM/view"
    },
    {
      number: 7,
      title: "Episode 7 - Love Blossoms",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/1wY1GivJ7GX7CRK6wsNa6f4qieTlkjrt6/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/1wY1GivJ7GX7CRK6wsNa6f4qieTlkjrt6/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/1wY1GivJ7GX7CRK6wsNa6f4qieTlkjrt6/view"
    },
    {
      number: 8,
      title: "Episode 8 - The Truth About the Curse",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/1Vs8LKrfOtpIhnYJ8ubvruwUFpyEIHHiP/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/1Vs8LKrfOtpIhnYJ8ubvruwUFpyEIHHiP/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/1Vs8LKrfOtpIhnYJ8ubvruwUFpyEIHHiP/view"
    },
    {
      number: 9,
      title: "Episode 9 - Facing Reality",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/1_EPyFm6WZp4hbrvWobLsjt6Im8jQtCUz/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/1_EPyFm6WZp4hbrvWobLsjt6Im8jQtCUz/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/1_EPyFm6WZp4hbrvWobLsjt6Im8jQtCUz/view"
    },
    {
      number: 10,
      title: "Episode 10 - A Brave Confession",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/1hsxZGZJP1s8r1UtP099N8CeQBBExtYYA/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/1hsxZGZJP1s8r1UtP099N8CeQBBExtYYA/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/1hsxZGZJP1s8r1UtP099N8CeQBBExtYYA/view"
    },
    {
      number: 11,
      title: "Episode 11 - Obstacles",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/1oHpJPecJdD4FROOaRZXGH87zzBhWXwGW/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/1oHpJPecJdD4FROOaRZXGH87zzBhWXwGW/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/1oHpJPecJdD4FROOaRZXGH87zzBhWXwGW/view"
    },
    {
      number: 12,
      title: "Episode 12 - Separation",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/1OHdHQH2zpxwW1n3C8ANByOE9AYhzfa8p/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/1OHdHQH2zpxwW1n3C8ANByOE9AYhzfa8p/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/1OHdHQH2zpxwW1n3C8ANByOE9AYhzfa8p/view"
    },
    {
      number: 13,
      title: "Episode 13 - The Final Test",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/17PPD14kHVG2EPde3C6x3dIvsz0wXMFDU/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/17PPD14kHVG2EPde3C6x3dIvsz0wXMFDU/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/17PPD14kHVG2EPde3C6x3dIvsz0wXMFDU/view"
    },
    {
      number: 14,
      title: "Episode 14 - A Happy Ending",
      sources: [
        { name: "Server 1", embedUrl: "https://drive.google.com/file/d/1rDSY1fiA0BI14l5E3FH3rGzOwzTB6OvU/preview" },
        { name: "Server 2", embedUrl: "https://drive.google.com/file/d/1rDSY1fiA0BI14l5E3FH3rGzOwzTB6OvU/preview" },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl: "https://drive.google.com/file/d/1rDSY1fiA0BI14l5E3FH3rGzOwzTB6OvU/view"
    }
  ]
},
 {
  id: "my-daughter-is-a-zombie",
  title: "My Daughter Is a Zombie",
  year: 2025,
  genre: ["Comedy", "Horror", "Family"],
  description:
    "සොම්බි ව්‍යාප්තියක් අතරතුර තමාගේ දියණිය සොම්බියෙකු බවට පත්වුවත් ඇයව ආරක්ෂා කරමින් සාමාන්‍ය ජීවිතයක් ගත කිරීමට උත්සාහ කරන පියාකෙකුගේ හෘදයාංගමත් හා විහිළුමය කතාවක්.",
  posterUrl: "https://i.ibb.co/Nv0V3C3/vertical-a942507d-5434-449f-9c3a-6831ac7d4631.jpg",
  episodeCount: 1,
  featured: false,
  episodes: [
    {
      number: 1,
      title: "Full Movie",
      sources: [
        {
          name: "Server 1",
          embedUrl:
            "https://drive.google.com/file/d/1OwCVjI5WgGGO8K1GzfXNKcwfurgAqgzs/preview",
        },
        {
          name: "Server 2",
          embedUrl:
            "https://drive.google.com/file/d/1OwCVjI5WgGGO8K1GzfXNKcwfurgAqgzs/preview",
        },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl:
        "https://drive.google.com/file/d/1OwCVjI5WgGGO8K1GzfXNKcwfurgAqgzs/view",
    },
  ],
},
{
  id: "treasure-web-drama",
  title: "Treasure Web Drama",
  year: 2021,
  genre: ["Youth", "Comedy", "Horror"],
  description:
  "Class එක තුළ සිදුවෙන අමුතු අද්භූත සිද්ධි හේතුවෙන් සිසුන්ට සැකයක් පටන් ගනී. ඔවුන් අතරම ghost කෙනෙක් ඉන්නවාද කියලා හොයන, භීතියත් විහිළුත් එක්ක ගැලපෙන school horror mystery drama එකක්.",
  posterUrl: "https://i.ibb.co/FLkYH1Y3/FDKF1-LSa-MAAl4-KP.jpg",
  episodeCount: 8,
  featured: false,
  episodes: [
    {
      number: 1,
      title: "Episode 1 - The Beginning",
      sources: [
        {
          name: "Server 1",
          embedUrl:
            "https://drive.google.com/file/d/1CrxvBOWQD6m1UIzph2a7MlIooH5pICap/preview",
        },
        {
          name: "Server 2",
          embedUrl:
            "https://drive.google.com/file/d/1CrxvBOWQD6m1UIzph2a7MlIooH5pICap/preview",
        },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl:
        "https://drive.google.com/file/d/1CrxvBOWQD6m1UIzph2a7MlIooH5pICap/view",
    },
    {
      number: 2,
      title: "Episode 2 - New Challenges",
      sources: [
        {
          name: "Server 1",
          embedUrl:
            "https://drive.google.com/file/d/1q90tXgDhwoPcZNIPs_gUTPCTZKUkoMKq/preview",
        },
        {
          name: "Server 2",
          embedUrl:
            "https://drive.google.com/file/d/1q90tXgDhwoPcZNIPs_gUTPCTZKUkoMKq/preview",
        },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl:
        "https://drive.google.com/file/d/1q90tXgDhwoPcZNIPs_gUTPCTZKUkoMKq/view",
    },
    {
      number: 3,
      title: "Episode 3 - Friendship",
      sources: [
        {
          name: "Server 1",
          embedUrl:
            "https://drive.google.com/file/d/1uBMv9NNbLInw4YkC1g3MbRm726KKVNR_/preview",
        },
        {
          name: "Server 2",
          embedUrl:
            "https://drive.google.com/file/d/1uBMv9NNbLInw4YkC1g3MbRm726KKVNR_/preview",
        },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl:
        "https://drive.google.com/file/d/1uBMv9NNbLInw4YkC1g3MbRm726KKVNR_/view",
    },
    {
      number: 4,
      title: "Episode 4 - Growing Dreams",
      sources: [
        {
          name: "Server 1",
          embedUrl:
            "https://drive.google.com/file/d/1KAwYJZ3Cn0uSXuF65w5ubMyVDImCgJhf/preview",
        },
        {
          name: "Server 2",
          embedUrl:
            "https://drive.google.com/file/d/1KAwYJZ3Cn0uSXuF65w5ubMyVDImCgJhf/preview",
        },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl:
        "https://drive.google.com/file/d/1KAwYJZ3Cn0uSXuF65w5ubMyVDImCgJhf/view",
    },
    {
      number: 5,
      title: "Episode 5 - Conflicts",
      sources: [
        {
          name: "Server 1",
          embedUrl:
            "https://drive.google.com/file/d/12TxpVeJGTJvmA8Q7Ix6rGQtXs2i0zdNb/preview",
        },
        {
          name: "Server 2",
          embedUrl:
            "https://drive.google.com/file/d/12TxpVeJGTJvmA8Q7Ix6rGQtXs2i0zdNb/preview",
        },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl:
        "https://drive.google.com/file/d/12TxpVeJGTJvmA8Q7Ix6rGQtXs2i0zdNb/view",
    },
    {
      number: 6,
      title: "Episode 6 - A Turning Point",
      sources: [
        {
          name: "Server 1",
          embedUrl:
            "https://drive.google.com/file/d/1fZLVK6DGjgGAn6iyvNYlBhmejAfxgJal/preview",
        },
        {
          name: "Server 2",
          embedUrl:
            "https://drive.google.com/file/d/1fZLVK6DGjgGAn6iyvNYlBhmejAfxgJal/preview",
        },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl:
        "https://drive.google.com/file/d/1fZLVK6DGjgGAn6iyvNYlBhmejAfxgJal/view",
    },
    {
      number: 7,
      title: "Episode 7 - Determination",
      sources: [
        {
          name: "Server 1",
          embedUrl:
            "https://drive.google.com/file/d/1OF61-ZatPuouDvHOgaw3kH2I5zOHJEMy/preview",
        },
        {
          name: "Server 2",
          embedUrl:
            "https://drive.google.com/file/d/1OF61-ZatPuouDvHOgaw3kH2I5zOHJEMy/preview",
        },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl:
        "https://drive.google.com/file/d/1OF61-ZatPuouDvHOgaw3kH2I5zOHJEMy/view",
    },
    {
      number: 8,
      title: "Episode 8 - Final Stage",
      sources: [
        {
          name: "Server 1",
          embedUrl:
            "https://drive.google.com/file/d/1IjCt56qzUfgHwkDxHMKIATopvspbLggx/preview",
        },
        {
          name: "Server 2",
          embedUrl:
            "https://drive.google.com/file/d/1IjCt56qzUfgHwkDxHMKIATopvspbLggx/preview",
        },
      ],
      telegramUrl: "https://t.me/example_channel",
      googleDriveUrl:
        "https://drive.google.com/file/d/1IjCt56qzUfgHwkDxHMKIATopvspbLggx/view",
    },
  ],
}
]
