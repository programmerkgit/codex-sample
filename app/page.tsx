const heroPhoto = "https://www.figma.com/api/mcp/asset/a4fedc90-efeb-4de6-aa11-93d63a88b9ba";
const heroShape = "https://www.figma.com/api/mcp/asset/47d8bbb4-2f6c-454a-8cb2-73cbb1b0826a";
const logoMark = "https://www.figma.com/api/mcp/asset/2de5569b-3504-46a5-830a-43211191c38e";
const separator = "https://www.figma.com/api/mcp/asset/822f05a1-20ae-404d-8f1e-882f2bd4bfdc";
const portfolioHeader = "https://www.figma.com/api/mcp/asset/5e2a4c61-60b8-4c3b-9957-e580197d1e16";
const projectA = "https://www.figma.com/api/mcp/asset/66c52a4c-390c-465a-b3ff-bf09dfaea88e";
const projectB = "https://www.figma.com/api/mcp/asset/126f54b7-ad94-4423-b8f7-6112aaa0f7fd";
const projectC = "https://www.figma.com/api/mcp/asset/b8a8cd4c-5aeb-44e6-abbf-fde5908195a2";
const footerArrow = "https://www.figma.com/api/mcp/asset/31046c6a-6e38-4764-b438-b9e5147347c2";
const footerIcon1 = "https://www.figma.com/api/mcp/asset/673430ad-88d8-4d48-a4b1-490b22269bea";
const footerIcon2 = "https://www.figma.com/api/mcp/asset/bea01373-f52e-45cf-a9ee-9ca9d3fa13ed";
const footerIcon3 = "https://www.figma.com/api/mcp/asset/cb16122a-06ee-4540-b8ba-9bd0d6ddf806";

const navigation = ["About me", "Skills", "Portfolio"];

const socialLinks = ["@mail", "in", "ig"];

const services = [
  {
    title: "DESIGN",
    body: "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
  },
  {
    title: "DEVELOPMENT",
    body: "I can build modern front-end experiences and ship responsive interfaces that match the visual direction precisely.",
  },
  {
    title: "MAINTENANCE",
    body: "I can improve existing products, fix visual issues, and keep websites healthy after launch.",
  },
];

const usingNow = [
  { label: "HTML5", icon: "https://www.figma.com/api/mcp/asset/1d84a536-1215-4617-8d89-cd9663ac6d41" },
  { label: "CSS3", icon: "https://www.figma.com/api/mcp/asset/ef552052-3f29-4312-b0f2-7d2d62dd09af" },
  { label: "SASS", icon: "https://www.figma.com/api/mcp/asset/08cdea49-8e5b-4fd5-a13b-5eb8e93cc7fe" },
  { label: "JAVASCRIPT", icon: "https://www.figma.com/api/mcp/asset/49f4fecb-ed50-4571-9ac1-9bccb5e0abfe" },
  { label: "REACT", icon: "https://www.figma.com/api/mcp/asset/643fea35-ebee-4909-811a-592a000ded4d" },
  { label: "BOOTSTRAP", icon: "https://www.figma.com/api/mcp/asset/7e716c94-07c4-466d-8aff-9b4b18986e5f" },
  { label: "GIT", icon: "https://www.figma.com/api/mcp/asset/b09a8b7a-752a-429c-8c48-0251f95e097d" },
  { label: "FIGMA", icon: "https://www.figma.com/api/mcp/asset/b0928d6c-adfa-4996-828d-8fcaab74e69e" },
];

const learning = [
  { label: "NODEJS", icon: "https://www.figma.com/api/mcp/asset/e194a65e-50ab-4883-9863-bd53cdd99786" },
  { label: "MYSQL", icon: "https://www.figma.com/api/mcp/asset/91430580-1c0d-4a53-a16b-411dc4408a02" },
  { label: "MONGODB", icon: "https://www.figma.com/api/mcp/asset/9fa6201b-f525-4252-992d-1ff7f18d013a" },
  { label: "TYPESCRIPT", icon: "https://www.figma.com/api/mcp/asset/e78ae4de-9508-4f8c-81e4-984358da5fd9" },
];

const otherSkills = [
  { label: "ANGIELSKI C1/C2", icon: "https://www.figma.com/api/mcp/asset/eadcb931-204d-4eee-b3e3-c58a1343135e" },
  { label: "HISZPAŃSKI B1/B2", icon: "https://www.figma.com/api/mcp/asset/50b85511-4309-42a0-8dba-d3e8917ee796" },
  { label: "C++", icon: "https://www.figma.com/api/mcp/asset/1a95aa89-209d-48fc-85f1-fe1a8f04fc51" },
  { label: "C", icon: "https://www.figma.com/api/mcp/asset/ea73654f-c33f-48bd-a1e3-db941780955c" },
];

const portfolioItems = [
  { title: "Mountains", image: projectA },
  { title: "eatsome.", image: projectC, featured: true },
  { title: "Cars", image: projectB },
  { title: "Lights", image: projectB },
  { title: "Forest", image: projectA },
  { title: "Pattern", image: projectC },
];

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mx-auto flex w-fit flex-col items-center gap-8">
      <div className="border-4 border-black px-10 py-4 text-center text-[1.1rem] font-bold tracking-[0.45em] text-black sm:text-[1.35rem]">
        {title}
      </div>
      <img alt="" className="h-3 w-[9.5rem]" src={separator} />
    </div>
  );
}

function SkillGrid({
  title,
  items,
}: {
  title: string;
  items: { label: string; icon: string }[];
}) {
  return (
    <div className="mt-14">
      <h3 className="text-center text-sm font-bold tracking-[0.35em] text-black sm:text-left">
        {title}
      </h3>
      <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-3 text-center">
            <img alt="" className="h-14 w-14 object-contain" src={item.icon} />
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-[#333]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-black">
      <section className="relative overflow-hidden bg-black">
        <div className="mx-auto grid min-h-[100svh] max-w-[1600px] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative bg-[#d7d7d7] px-8 pb-16 pt-8 sm:px-14 lg:px-20 lg:pt-12">
            <div
              className="absolute inset-y-0 right-[-8rem] hidden w-48 skew-x-[-18deg] bg-black lg:block"
              aria-hidden="true"
            />

            <header className="relative z-10 flex items-center justify-between gap-6">
              <img alt="Logo" className="h-9 w-auto" src={logoMark} />
              <nav className="hidden items-center gap-8 text-[0.72rem] font-semibold tracking-[0.18em] text-[#111] sm:flex">
                {navigation.map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>
                    {item}
                  </a>
                ))}
              </nav>
            </header>

            <div className="relative z-10 flex min-h-[calc(100svh-8rem)] max-w-[32rem] flex-col justify-center">
              <p className="text-xl font-bold sm:text-2xl">Hi, I am</p>
              <h1 className="mt-4 text-[2.5rem] leading-none font-bold tracking-[-0.04em] sm:text-[4.2rem]">
                Tomasz Gajda
              </h1>
              <p className="mt-3 text-sm font-medium text-[#909090] sm:text-base">
                Front-end Developer / UI Designer
              </p>

              <div className="mt-10 flex gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item}
                    className="flex h-10 w-10 items-center justify-center bg-[#c4c4c4] text-[0.65rem] font-bold uppercase tracking-[0.12em] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                    href="#contact"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[26rem] overflow-hidden bg-black">
            <div
              className="absolute left-[-10%] top-[-16%] h-[130%] w-[85%] rotate-[10deg] bg-center bg-cover bg-no-repeat opacity-90"
              style={{ backgroundImage: `url(${heroShape})` }}
            />
            <nav className="absolute right-6 top-6 z-20 hidden items-center gap-8 text-[0.72rem] font-semibold tracking-[0.18em] text-white sm:flex lg:right-14 lg:top-10">
              {navigation.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>
                  {item}
                </a>
              ))}
              <a
                className="rounded-full border-4 border-white bg-white px-5 py-1.5 text-black"
                href="#contact"
              >
                CONTACT ME
              </a>
            </nav>
            <div className="relative z-10 flex h-full items-end justify-center px-6 pt-24">
              <img
                alt="Tomasz Gajda portrait"
                className="max-h-[88svh] w-auto object-contain"
                src={heroPhoto}
              />
            </div>
            <p className="absolute bottom-5 right-6 z-20 max-w-[9rem] text-[0.6rem] text-white/70">
              this is not my photo, but I dearly hope to get one just like this
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1d] px-6 py-10 text-white sm:px-12 lg:px-24">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-lg font-bold tracking-[0.35em]">IT BERRIES</h2>
          <p className="mt-5 max-w-[70rem] text-sm leading-7 text-white/80">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
            finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
            viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus,
            lacus odio rutrum augue, in semper sem magna quis tellus.
          </p>
          <a
            className="mt-6 inline-flex items-center gap-4 border-x-2 border-black px-4 py-2 text-xs font-semibold tracking-[0.22em]"
            href="#about-me"
          >
            READ MORE
          </a>
        </div>
      </section>

      <section
        className="bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.08),_transparent_46%),linear-gradient(90deg,_#ffffff,_#ffffff)] px-6 py-20 sm:px-12 lg:px-24 lg:py-28"
        id="about-me"
      >
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading title="ABOUT ME" />
          <p className="mx-auto mt-10 max-w-[48rem] text-center text-sm leading-7 text-[#111]">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
            finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
            viverra facilisis ut ac est.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              className="inline-flex items-center gap-4 border-x-2 border-black px-4 py-2 text-xs font-semibold tracking-[0.22em]"
              href="#skills"
            >
              EXPLORE
            </a>
          </div>

          <div className="mt-20 grid gap-12 sm:grid-cols-2">
            {services.slice(0, 2).map((service) => (
              <div key={service.title} className="mx-auto max-w-[28rem] text-center sm:text-left">
                <h3 className="text-lg font-bold tracking-[0.25em]">{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#111]">{service.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <div className="max-w-[28rem] text-center">
              <h3 className="text-lg font-bold tracking-[0.25em]">{services[2].title}</h3>
              <p className="mt-5 text-sm leading-7 text-[#111]">{services[2].body}</p>
            </div>
          </div>

          <div className="mt-24" id="skills">
            <SectionHeading title="SKILLS" />
            <div className="mx-auto mt-8 max-w-[64rem]">
              <SkillGrid title="USING NOW:" items={usingNow} />
              <SkillGrid title="LEARNING:" items={learning} />
              <SkillGrid title="OTHER SKILLS:" items={otherSkills} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a]" id="portfolio">
        <div
          className="relative overflow-hidden px-6 py-20 sm:px-12"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.1)), url(${portfolioHeader})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto w-fit border-4 border-black bg-white/10 px-10 py-4 text-center text-[1.1rem] font-bold tracking-[0.45em] text-black backdrop-blur-[1px]">
              PORTFOLIO
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-8">
          <div className="flex items-center justify-center gap-8 border-b border-white/25 pb-4 text-xs font-semibold tracking-[0.25em] text-[#7c7c7c]">
            <span className="text-white">ALL</span>
            <span>CODED</span>
            <span>DESIGNED</span>
          </div>

          <div className="mt-8 grid gap-px bg-black sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <article
                key={item.title}
                className="group relative aspect-[16/10] overflow-hidden bg-neutral-900"
              >
                <img
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.image}
                />
                {item.featured ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/76 text-center text-white">
                    <p className="text-[0.65rem] font-semibold italic tracking-[0.15em]">
                      coded, designed
                    </p>
                    <h3 className="mt-3 text-2xl font-bold tracking-[0.22em]">eatsome.</h3>
                    <p className="mt-4 max-w-[18rem] text-[0.72rem] tracking-[0.06em] text-white/85">
                      Restaurant browsing in React.js (Using Yelp API)
                    </p>
                    <div className="mt-8 flex gap-6 text-[0.68rem] font-semibold tracking-[0.18em]">
                      <a href="#contact">DEMO</a>
                      <a href="#contact">MORE</a>
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm font-semibold text-white">
            And many more to come!
          </p>
        </div>
      </section>

      <section
        className="bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.08),_transparent_46%),linear-gradient(90deg,_#ffffff,_#ffffff)] px-6 py-20 sm:px-12 lg:px-24"
        id="contact"
      >
        <div className="mx-auto max-w-[840px]">
          <SectionHeading title="CONTACT" />
          <p className="mx-auto mt-8 max-w-[44rem] text-center text-sm leading-7 text-[#111]">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
            finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
            viverra facilisis ut ac est.
          </p>

          <form className="mx-auto mt-14 max-w-[38rem] space-y-8">
            <label className="block">
              <span className="mb-2 block text-xs font-bold tracking-[0.16em] text-[#8b8b8b]">
                ENTER YOUR NAME*
              </span>
              <input
                className="w-full border-b-[5px] border-l-[5px] border-black bg-transparent px-4 py-3 text-sm outline-none"
                type="text"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-bold tracking-[0.16em] text-[#8b8b8b]">
                ENTER YOUR EMAIL*
              </span>
              <input
                className="w-full border-b-[5px] border-l-[5px] border-black bg-transparent px-4 py-3 text-sm outline-none"
                type="email"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-bold tracking-[0.16em] text-[#8b8b8b]">
                PHONE NUMBER
              </span>
              <input
                className="w-full border-b-[5px] border-l-[5px] border-black bg-transparent px-4 py-3 text-sm outline-none"
                type="tel"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-bold tracking-[0.16em] text-[#8b8b8b]">
                YOUR MESSAGE*
              </span>
              <textarea
                className="min-h-40 w-full resize-y border-b-[5px] border-l-[5px] border-black bg-transparent px-4 py-3 text-sm outline-none"
              />
            </label>
            <div className="flex justify-center">
              <button
                className="inline-flex items-center gap-4 border-x-2 border-black px-5 py-2 text-sm font-bold tracking-[0.2em]"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] px-6 py-14 text-white">
        <div className="mx-auto flex max-w-[900px] flex-col items-center">
          <a className="flex flex-col items-center gap-4" href="#top">
            <img alt="" className="h-4 w-4 rotate-90" src={footerArrow} />
            <span className="text-sm font-bold tracking-[0.18em]">BACK TO TOP</span>
          </a>
          <div className="mt-9 flex items-center gap-7">
            <img alt="" className="h-6 w-6" src={footerIcon1} />
            <img alt="" className="h-6 w-6" src={footerIcon2} />
            <img alt="" className="h-6 w-6" src={footerIcon3} />
          </div>
          <p className="mt-8 text-center text-sm">
            @2020 Tomasz Gajda <span className="font-normal">All Rights Reserved.</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
