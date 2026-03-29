const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#works", label: "Works" },
  { href: "#profile", label: "Profile" },
  { href: "#contact", label: "Contact" },
];

const skills = [
  {
    title: "UI/UX Design",
    body: "情報設計からワイヤー、UI設計まで。ブランドらしさと使いやすさを両立した画面づくりが得意です。",
  },
  {
    title: "Web Design",
    body: "コーポレートサイト、採用サイト、LP、キャンペーンページなど、目的に沿ったビジュアル設計を行います。",
  },
  {
    title: "Graphic / Branding",
    body: "KV、バナー、SNSビジュアル、ロゴまわりまで。Webと連動したトーン設計で世界観を整えます。",
  },
  {
    title: "Front-end",
    body: "Figmaの意図を保ちながら、HTML / CSS / React / Next.jsで軽やかに実装します。",
  },
];

const tools = [
  "Figma",
  "Illustrator",
  "Photoshop",
  "After Effects",
  "HTML / CSS",
  "JavaScript",
  "React",
  "Next.js",
];

const works = [
  {
    title: "Lumiere Cafe",
    category: "Brand Site",
    year: "2025",
    summary: "都内カフェのブランドサイトをリニューアル。写真と余白設計を活かし、来店予約の導線を再構成。",
    accent: "from-[#ffb5d6] via-[#ffd7a8] to-[#fff2b8]",
    points: ["Art Direction", "UI Design", "Front-end"],
  },
  {
    title: "Megu App Launch",
    category: "LP / Campaign",
    year: "2024",
    summary: "新作ライフスタイルアプリの事前登録LP。イラストとモーション前提で、期待感のあるファーストビューを設計。",
    accent: "from-[#8ed8ff] via-[#b8b3ff] to-[#ffd7f4]",
    points: ["Landing Page", "KV Design", "Motion Plan"],
  },
  {
    title: "Nico Beauty",
    category: "EC Visual",
    year: "2024",
    summary: "コスメブランドの季節特集ページとバナー群を制作。商品理解と購買導線をつなぐビジュアルを担当。",
    accent: "from-[#ffc7c2] via-[#ffdff1] to-[#ffffff]",
    points: ["Campaign Design", "Banner", "Creative Direction"],
  },
  {
    title: "Studio Comet",
    category: "Portfolio Site",
    year: "2023",
    summary: "映像チーム向けポートフォリオサイト。作品サムネイルの見せ方と、更新しやすい構成を重視して構築。",
    accent: "from-[#b8ffda] via-[#d8fff5] to-[#fdfdff]",
    points: ["Information Design", "CMS Plan", "Responsive UI"],
  },
];

const timeline = [
  {
    year: "2026",
    title: "Freelance Designer",
    body: "ブランドサイト、LP、ビジュアル制作を中心に個人案件とチーム制作を並行。",
  },
  {
    year: "2024",
    title: "Joined Creative Studio",
    body: "Webデザインと提案資料制作を担当。ファッション、美容、カルチャー領域の案件に参加。",
  },
  {
    year: "2022",
    title: "Started as UI Designer",
    body: "アプリとWebサービスのUI改善に携わり、情報設計とプロトタイピングの経験を積む。",
  },
];

function SectionIntro({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={`text-xs font-bold tracking-[0.28em] uppercase ${
          light ? "text-[#fff59a]" : "text-[#ff4d8d]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl ${
          light ? "text-white" : "text-[#221b44]"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-5 text-sm leading-8 sm:text-base ${light ? "text-white/78" : "text-[#5e5a77]"}`}>
        {body}
      </p>
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="relative mx-auto w-full max-w-[36rem]">
      <div className="float-gentle relative overflow-hidden rounded-[2.5rem] border-[3px] border-[#221b44] bg-[linear-gradient(160deg,#fff9ff_0%,#ffeef8_40%,#e9f4ff_100%)] p-5 shadow-[0_28px_70px_rgba(77,54,131,0.18)]">
        <div className="absolute -left-4 top-8 rounded-full border-2 border-[#221b44] bg-[#fff59a] px-4 py-1 text-[0.65rem] font-bold tracking-[0.22em] text-[#221b44] rotate-[-8deg]">
          NEW VISUAL
        </div>
        <div className="absolute -right-4 bottom-10 rounded-full border-2 border-[#221b44] bg-[#86e4ff] px-4 py-1 text-[0.65rem] font-bold tracking-[0.2em] text-[#221b44] rotate-[10deg]">
          WEB & UI
        </div>
        <svg
          aria-hidden="true"
          className="h-auto w-full"
          viewBox="0 0 620 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="42" y="82" width="536" height="392" rx="42" fill="#FFFFFF" stroke="#221B44" strokeWidth="4" />
          <rect x="70" y="110" width="480" height="336" rx="30" fill="#F8F4FF" />
          <circle cx="118" cy="154" r="14" fill="#FF8DB7" />
          <circle cx="158" cy="154" r="14" fill="#FFD76F" />
          <circle cx="198" cy="154" r="14" fill="#8CE7FF" />
          <rect x="102" y="196" width="160" height="180" rx="28" fill="#FFE0EF" />
          <rect x="288" y="196" width="220" height="28" rx="14" fill="#D8CCFF" />
          <rect x="288" y="242" width="180" height="16" rx="8" fill="#221B44" fillOpacity="0.14" />
          <rect x="288" y="274" width="210" height="16" rx="8" fill="#221B44" fillOpacity="0.14" />
          <rect x="288" y="320" width="140" height="44" rx="22" fill="#FF7BAC" />
          <rect x="102" y="396" width="406" height="18" rx="9" fill="#E2DCF8" />
          <path d="M158 258C158 219.34 189.34 188 228 188V188C266.66 188 298 219.34 298 258V356H158V258Z" fill="#221B44" />
          <path d="M180 210C180 161.399 219.399 122 268 122V122C316.601 122 356 161.399 356 210V258H180V210Z" fill="#FFB5D6" />
          <path d="M214 237C214 192.265 250.265 156 295 156V156C339.735 156 376 192.265 376 237V353H214V237Z" fill="#FFF9FF" stroke="#221B44" strokeWidth="4" />
          <circle cx="294" cy="233" r="72" fill="#FFD7A8" stroke="#221B44" strokeWidth="4" />
          <path d="M242 228C247.964 194.778 276.975 170 311 170C339.719 170 364.993 187.661 376 214.658C368.128 192.957 348.026 177.461 324.304 177.461H289.22C267.324 177.461 247.922 191.639 242 212.719V228Z" fill="#221B44" />
          <path d="M239 228C250.415 189.343 282.501 164 320.417 164C348.787 164 374.132 178.193 388 200.355C384.41 176.433 364.947 158 340 158H284C257.49 158 235.283 178.664 231 204.826L239 228Z" fill="#221B44" />
          <ellipse cx="268" cy="238" rx="7" ry="10" fill="#221B44" />
          <ellipse cx="323" cy="238" rx="7" ry="10" fill="#221B44" />
          <path d="M274 278C283.701 288.439 301.054 289.026 311.441 279.31" stroke="#221B44" strokeWidth="4" strokeLinecap="round" />
          <circle cx="246" cy="259" r="11" fill="#FFB1C4" fillOpacity="0.8" />
          <circle cx="343" cy="259" r="11" fill="#FFB1C4" fillOpacity="0.8" />
          <path d="M235 351H378C378 312.34 346.66 281 308 281H305C266.34 281 235 312.34 235 351Z" fill="#8ED8FF" stroke="#221B44" strokeWidth="4" />
          <path d="M413 244L443 206L469 247" stroke="#FF7BAC" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M440 209V287" stroke="#FF7BAC" strokeWidth="8" strokeLinecap="round" />
          <circle cx="440" cy="194" r="18" fill="#FFF59A" stroke="#221B44" strokeWidth="4" />
          <path d="M123 251C123 251 145.303 219 179 219" stroke="#221B44" strokeWidth="4" strokeLinecap="round" />
          <path d="M124 281C124 281 145.303 249 179 249" stroke="#221B44" strokeWidth="4" strokeLinecap="round" />
          <path d="M124 311C124 311 145.303 279 179 279" stroke="#221B44" strokeWidth="4" strokeLinecap="round" />
          <path d="M104 92L145 57" stroke="#221B44" strokeWidth="4" strokeLinecap="round" />
          <path d="M502 494L538 524" stroke="#221B44" strokeWidth="4" strokeLinecap="round" />
          <circle cx="530" cy="111" r="23" fill="#86E4FF" stroke="#221B44" strokeWidth="4" />
          <circle cx="92" cy="455" r="19" fill="#FFD76F" stroke="#221B44" strokeWidth="4" />
        </svg>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main
      id="top"
      className="overflow-hidden bg-[linear-gradient(180deg,#fff8fd_0%,#fffefb_38%,#f8fbff_100%)] text-[#221b44]"
    >
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[-6rem] top-[-4rem] h-56 w-56 rounded-full bg-[#ffd2ea] blur-3xl" />
          <div className="absolute right-[-4rem] top-24 h-64 w-64 rounded-full bg-[#cfefff] blur-3xl" />
          <div className="absolute left-1/2 top-[28rem] h-40 w-40 -translate-x-1/2 rounded-full bg-[#fff0a5] blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-14 pt-5 sm:px-8 lg:px-10 lg:pb-24 lg:pt-8">
          <header className="rounded-full border-2 border-[#221b44] bg-white/75 px-5 py-3 backdrop-blur sm:px-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <a href="#" className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border-2 border-[#221b44] bg-[#fff59a] text-lg font-black">
                  M
                </span>
                <span>
                  <span className="block text-sm font-black tracking-[0.12em]">Mio Akiyama</span>
                  <span className="block text-[0.68rem] tracking-[0.22em] text-[#756f96] uppercase">
                    Web Designer Portfolio
                  </span>
                </span>
              </a>

              <nav className="hidden items-center gap-6 text-sm font-bold text-[#4a4567] md:flex">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="transition-transform duration-200 hover:-translate-y-0.5">
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href="#contact"
                className="inline-flex items-center rounded-full border-2 border-[#221b44] bg-[#221b44] px-5 py-2 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#3a2f6f]"
              >
                Contact
              </a>
            </div>
          </header>

          <div className="grid items-center gap-12 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16">
            <div className="relative">
              <div className="inline-flex rotate-[-6deg] rounded-full border-2 border-[#221b44] bg-[#fff59a] px-4 py-2 text-[0.72rem] font-black tracking-[0.22em] text-[#221b44] uppercase">
                Available for selected projects
              </div>
              <p className="mt-8 text-sm font-bold tracking-[0.28em] text-[#ff4d8d] uppercase">
                Web Designer / UI Designer / Brand Visual
              </p>
              <h1 className="mt-5 max-w-[12ch] text-5xl font-black leading-[0.92] tracking-[-0.06em] text-[#221b44] sm:text-6xl lg:text-7xl">
                画面に、気分まで
                <br />
                デザインする。
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a7b] sm:text-lg">
                秋山みおのポートフォリオサイトです。ブランドの空気感が伝わるWebデザインと、
                触れたくなるUIづくりを中心に、企画から実装まで一貫して対応しています。
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#works"
                  className="inline-flex items-center rounded-full border-2 border-[#221b44] bg-[#ff6aa2] px-6 py-3 text-sm font-black text-white shadow-[0_10px_24px_rgba(255,106,162,0.28)] transition-transform duration-200 hover:-translate-y-1 hover:bg-[#ff4d8d]"
                >
                  作品を見る
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border-2 border-[#221b44] bg-white px-6 py-3 text-sm font-black text-[#221b44] transition-transform duration-200 hover:-translate-y-1 hover:bg-[#fff3b8]"
                >
                  お問い合わせ
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.6rem] border-2 border-[#221b44] bg-white p-5 shadow-[0_14px_34px_rgba(47,34,92,0.08)]">
                  <p className="text-3xl font-black tracking-[-0.05em]">28+</p>
                  <p className="mt-1 text-sm text-[#6b6687]">Web / UI案件の制作実績</p>
                </div>
                <div className="rounded-[1.6rem] border-2 border-[#221b44] bg-[#e8f7ff] p-5 shadow-[0_14px_34px_rgba(47,34,92,0.08)]">
                  <p className="text-3xl font-black tracking-[-0.05em]">6yr</p>
                  <p className="mt-1 text-sm text-[#6b6687]">デザイン実務経験</p>
                </div>
                <div className="rounded-[1.6rem] border-2 border-[#221b44] bg-[#fff4dc] p-5 shadow-[0_14px_34px_rgba(47,34,92,0.08)]">
                  <p className="text-3xl font-black tracking-[-0.05em]">UI + FE</p>
                  <p className="mt-1 text-sm text-[#6b6687]">設計から実装まで対応</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-2 top-8 hidden rounded-[1.5rem] border-2 border-[#221b44] bg-white px-4 py-3 text-sm font-bold text-[#4f4a6c] shadow-[0_16px_30px_rgba(47,34,92,0.08)] lg:block">
                Figma to Front-end
              </div>
              <HeroArtwork />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="About"
            title="かわいさも、信頼感も、同時に届くデザインへ。"
            body="美容、ライフスタイル、カルチャー系のトーン設計を得意とするWebデザイナーです。やわらかい配色や印象的なビジュアルだけでなく、読みやすい情報整理やCTA設計まで含めて、サイト全体の体験を整えます。"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border-2 border-[#221b44] bg-white p-6 shadow-[0_18px_40px_rgba(47,34,92,0.08)]">
              <p className="text-sm font-black tracking-[0.2em] text-[#ff4d8d] uppercase">Strength</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">得意領域</h3>
              <p className="mt-4 text-sm leading-7 text-[#5f5a7b]">
                ファーストビューの印象設計、世界観のあるLP、女性向け商材のビジュアル設計、
                コンテンツを整理したブランドサイト制作。
              </p>
            </div>
            <div className="rounded-[2rem] border-2 border-[#221b44] bg-[#fff1f8] p-6 shadow-[0_18px_40px_rgba(47,34,92,0.08)]">
              <p className="text-sm font-black tracking-[0.2em] text-[#ff4d8d] uppercase">Style</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">制作スタンス</h3>
              <p className="mt-4 text-sm leading-7 text-[#5f5a7b]">
                見た目の楽しさだけで終わらず、誰に何を届けるかを整理してからデザインに落とし込みます。
              </p>
            </div>
            <div className="rounded-[2rem] border-2 border-[#221b44] bg-[#eef9ff] p-6 shadow-[0_18px_40px_rgba(47,34,92,0.08)] sm:col-span-2">
              <p className="text-sm font-black tracking-[0.2em] text-[#ff4d8d] uppercase">Focus</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">相談しやすい進行と、細部の仕上がりを大切にしています。</h3>
              <p className="mt-4 text-sm leading-7 text-[#5f5a7b]">
                要件整理、ムードボード、ワイヤー、デザイン、実装連携まで段階ごとに共有しながら進めます。
                小さな違和感を残さないことを重視し、公開時の見え方まで丁寧に調整します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#221b44] py-14 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionIntro
            eyebrow="Skills"
            title="設計からビジュアル、実装連携まで。"
            body="案件の立ち上げ時に必要な整理と、公開前に必要な仕上げの両方に対応できます。チーム制作では、デザイナーとエンジニアの間をつなぐ役割も担っています。"
            light
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {skills.map((skill, index) => (
              <article
                key={skill.title}
                className={`rounded-[2rem] border-2 p-6 shadow-[0_18px_36px_rgba(0,0,0,0.14)] ${
                  index % 2 === 0
                    ? "border-[#ffd6e9] bg-[#2f255d]"
                    : "border-[#b8f2ff] bg-[#31286a]"
                }`}
              >
                <h3 className="text-2xl font-black tracking-[-0.04em]">{skill.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/78">{skill.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border-2 border-white/20 bg-white/10 p-6">
            <p className="text-sm font-black tracking-[0.22em] text-[#fff59a] uppercase">Tools & Stack</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border-2 border-white/35 bg-white/10 px-4 py-2 text-sm font-bold text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Works"
            title="方向性の異なる案件でも、らしさを保ったまま仕上げます。"
            body="構成、配色、タイポグラフィ、あしらいのバランスを調整しながら、ブランドの印象が伝わる見せ方を設計しています。"
          />
          <a
            href="#contact"
            className="inline-flex w-fit items-center rounded-full border-2 border-[#221b44] bg-white px-5 py-3 text-sm font-black text-[#221b44] transition-transform duration-200 hover:-translate-y-1 hover:bg-[#fff3b8]"
          >
            制作の相談をする
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {works.map((work, index) => (
            <article
              key={work.title}
              className={`group rounded-[2.2rem] border-2 border-[#221b44] bg-white p-5 shadow-[0_18px_40px_rgba(47,34,92,0.08)] transition-transform duration-200 hover:-translate-y-1 ${
                index === 0 || index === 3 ? "lg:translate-y-6" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-[1.7rem] border-2 border-[#221b44] bg-gradient-to-br ${work.accent} p-6`}
              >
                <div className="absolute -right-4 top-4 rounded-full border-2 border-[#221b44] bg-white px-3 py-1 text-[0.7rem] font-black tracking-[0.16em] text-[#221b44] uppercase rotate-[8deg]">
                  {work.year}
                </div>
                <div className="grid min-h-64 grid-cols-[0.9fr_1.1fr] gap-4">
                  <div className="rounded-[1.4rem] border-2 border-[#221b44] bg-white/80 p-4 backdrop-blur">
                    <div className="rounded-[1rem] bg-[#221b44] px-3 py-2 text-[0.68rem] font-black tracking-[0.18em] text-white uppercase">
                      {work.category}
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="h-4 w-16 rounded-full bg-[#ff92c1]" />
                      <div className="h-4 w-24 rounded-full bg-[#ffd76f]" />
                      <div className="h-24 rounded-[1rem] bg-[#f5f2ff]" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between rounded-[1.4rem] border-2 border-[#221b44] bg-white/70 p-4 backdrop-blur">
                    <div>
                      <div className="h-28 rounded-[1.1rem] bg-[linear-gradient(135deg,rgba(34,27,68,0.92),rgba(255,122,172,0.75))]" />
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-12 rounded-xl bg-white/90" />
                        <div className="h-12 rounded-xl bg-[#fff6d6]" />
                        <div className="h-12 rounded-xl bg-[#dbf6ff]" />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {work.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border-2 border-[#221b44]/20 bg-white px-3 py-1 text-[0.68rem] font-bold text-[#4f4a6c]"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-1 pb-1 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-[#ff4d8d] uppercase">{work.category}</p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#221b44]">{work.title}</h3>
                  </div>
                  <span className="rounded-full border-2 border-[#221b44] bg-[#fff59a] px-3 py-1 text-xs font-black">
                    Featured
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#5f5a7b]">{work.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="profile" className="bg-[linear-gradient(180deg,#fff4fb_0%,#ffffff_100%)] py-14 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="rounded-[2.2rem] border-2 border-[#221b44] bg-white p-7 shadow-[0_18px_40px_rgba(47,34,92,0.08)]">
            <p className="text-sm font-black tracking-[0.22em] text-[#ff4d8d] uppercase">Profile</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">秋山 みお</h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a7b]">
              東京を拠点に活動するWebデザイナー。ブランドの世界観設計と、
              見やすく伝わるUIの両立をテーマに制作しています。
            </p>
            <div className="mt-7 rounded-[1.7rem] border-2 border-[#221b44] bg-[#eef9ff] p-5">
              <p className="text-sm leading-7 text-[#4f4a6c]">
                現在は、ブランドサイト、LP、キャンペーンビジュアル、フロントエンド連携を中心に対応中。
                ご相談内容に応じて、アートディレクションやデザインガイド整理も行っています。
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {timeline.map((item) => (
              <article
                key={item.year + item.title}
                className="rounded-[2rem] border-2 border-[#221b44] bg-white p-6 shadow-[0_18px_40px_rgba(47,34,92,0.08)]"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-black tracking-[0.22em] text-[#ff4d8d] uppercase">{item.year}</p>
                  <h3 className="text-2xl font-black tracking-[-0.04em] text-[#221b44]">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#5f5a7b]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#221b44] bg-[#221b44] px-6 py-8 text-white shadow-[0_24px_60px_rgba(34,27,68,0.24)] sm:px-8 lg:px-12 lg:py-12">
          <div className="absolute -right-14 -top-10 h-40 w-40 rounded-full bg-[#ff6aa2]/40 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-12 left-12 h-40 w-40 rounded-full bg-[#86e4ff]/30 blur-2xl" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-black tracking-[0.24em] text-[#fff59a] uppercase">Contact</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                新しいブランドサイトや
                <br />
                LP制作のご相談を受付中です。
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/78 sm:text-base">
                企画段階のご相談、デザインのみ、実装連携込みなど、内容に合わせて柔軟に対応します。
                まずは案件概要や公開時期を添えてご連絡ください。
              </p>
            </div>

            <div className="rounded-[2rem] border-2 border-white/20 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs font-black tracking-[0.22em] text-[#ffd7a8] uppercase">Mail</p>
              <a
                href="mailto:hello@mio-portfolio.jp"
                className="mt-3 block text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl"
              >
                hello@mio-portfolio.jp
              </a>
              <p className="mt-4 text-sm leading-7 text-white/72">
                ご相談内容、想定ページ数、参考サイトがあれば合わせてお送りください。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@mio-portfolio.jp"
                  className="inline-flex items-center rounded-full border-2 border-white bg-white px-5 py-3 text-sm font-black text-[#221b44] transition-transform duration-200 hover:-translate-y-1 hover:bg-[#fff3b8]"
                >
                  メールで問い合わせる
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-full border-2 border-white/45 bg-[#31286a] px-5 py-3 text-sm font-black text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-[#43378c]"
                >
                  Behanceを見る
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
