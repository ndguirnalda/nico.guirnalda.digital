import { useEffect, useState } from "react";

const skills = [
  {
    number: "01",
    title: "Design tools",
    items: ["Figma", "Adobe Photoshop", "Illustrator", "After Effects", "Acrobat"],
  },
  {
    number: "02",
    title: "UI/UX design",
    items: ["UI Design", "UX Design", "UX Research", "Wireframes", "Prototypes"],
  },
  {
    number: "03",
    title: "Web development",
    items: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    number: "04",
    title: "Workflow",
    items: ["ClickUp", "Trello", "Monday.com", "Design Systems", "Client Support"],
  },
];

const projects = [
  {
    number: "01",
    title: "Web & UI/UX Design",
    type: "Behance collection",
    description:
      "Responsive websites and product interfaces shaped through research, wireframes, prototypes and polished high-fidelity design.",
    tags: ["Figma", "UI Design", "UX Research"],
    visual: "dashboard",
  },
  {
    number: "02",
    title: "Brand & Graphic Design",
    type: "Behance collection",
    description:
      "Visual identities, campaign graphics, social assets and marketing materials designed to feel clear, consistent and memorable.",
    tags: ["Photoshop", "Illustrator", "Branding"],
    visual: "studio",
  },
  {
    number: "03",
    title: "Motion & Digital Assets",
    type: "Behance collection",
    description:
      "Motion graphics and versatile digital content created to help brands communicate with energy across modern platforms.",
    tags: ["After Effects", "Digital", "Creative"],
    visual: "health",
  },
];

const experience = [
  {
    period: "Jan 2026 — Present",
    role: "Web / Graphic Designer",
    company: "Tata Consultancy Services",
    detail:
      "Web design, campaign assets and production-ready creative aligned with client brand standards.",
  },
  {
    period: "Sep 2025 — Nov 2025",
    role: "Graphic Designer",
    company: "Spin Virtual Solutions",
    detail:
      "Concepts, layouts and final artwork for product illustrations, company logos and websites.",
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Figma Web Designer",
    company: "UniversalTaxProfessionals",
    detail:
      "Responsive interfaces, prototypes and design systems for a project-based web engagement.",
  },
  {
    period: "Aug 2024 — Dec 2024",
    role: "Web / Graphic Designer",
    company: "Ideahub IT Solution Inc.",
    detail:
      "Landing pages, microsites and branded graphics delivered with cross-functional product teams.",
  },
  {
    period: "Nov 2023 — Aug 2024",
    role: "Web / Graphic Designer",
    company: "GoHighLevel",
    detail:
      "Figma interfaces, responsive websites, visual assets, design systems and client platform support.",
  },
  {
    period: "2021 — 2022",
    role: "Project & Administrative Support",
    company: "Central Luzon State University",
    detail:
      "Digital systems, university websites, research support, communication materials and event graphics.",
  },
  {
    period: "Mar 2017 — Aug 2020",
    role: "Data Analyst",
    company: "Accenture",
    detail:
      "Quality-focused content review, policy decisions and cross-functional delivery in a global team.",
  },
  {
    period: "Aug 2016 — Feb 2017",
    role: "Customer Support Representative",
    company: "Teletech",
    detail: "Technical and customer support through inbound calls, chat and written communication.",
  },
];

const certifications = [
  { title: "UI/UX Designer Professional Certification", issuer: "UXCEL", year: "2025" },
  { title: "UX Design Foundations", issuer: "UXCEL", year: "2024" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco", year: "2023" },
  { title: "UI/UX Design using Figma", issuer: "MSTConnect Educational Consultancy", year: "2023" },
  { title: "Foundations of User Experience Design", issuer: "Coursera", year: "2021" },
  { title: "Adobe After Effects Motion Graphics", issuer: "Udemy", year: "2022" },
];

const behanceUrl = "https://www.behance.net/nicoguirnalda";
const linkedInUrl = "https://www.linkedin.com/in/nico-g-3080a3115/";

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={diagonal ? "arrow diagonal" : "arrow"}>
      {diagonal ? <path d="M6 18 18 6M8 6h10v10" /> : <path d="M5 12h14m-5-5 5 5-5 5" />}
    </svg>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "studio") {
    return (
      <div className="project-visual studio-visual" aria-hidden="true">
        <span className="studio-mark">NG</span>
        <div className="studio-copy">
          <span>Brand direction</span>
          <strong>
            IDEAS MADE
            <br />
            VISIBLE.
          </strong>
        </div>
        <span className="studio-index">Selected work / Behance</span>
      </div>
    );
  }

  if (type === "health") {
    return (
      <div className="project-visual health-visual" aria-hidden="true">
        <div className="health-top">
          <span>Motion library</span>
          <i>NG</i>
        </div>
        <div className="health-grid">
          <div className="health-score">
            <span>Digital assets</span>
            <strong>24</strong>
            <small>Creative studies</small>
          </div>
          <div className="health-bars">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual dashboard-visual" aria-hidden="true">
      <div className="dash-side">
        <b>NG / UX</b>
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="dash-main">
        <span className="dash-label">Website system</span>
        <div className="dash-total">
          UI / UX <small>Case study</small>
        </div>
        <div className="dash-chart">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="dash-stats">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerCompact, setHeaderCompact] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const updateHeader = () => setHeaderCompact(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header className={headerCompact ? "site-header is-compact" : "site-header"}>
        <a className="wordmark" href="#home" aria-label="Nico Guirnalda, home" onClick={closeMenu}>
          NG<span>.</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <i className={menuOpen ? "menu-icon is-open" : "menu-icon"} />
        </button>

        <nav id="site-navigation" className={menuOpen ? "site-nav is-open" : "site-nav"}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
        <a className="header-cta" href="#contact">
          Let&apos;s talk <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-kicker">
            <span className="status-dot" />
            Available for full-time and part-time
          </div>
          <h1>
            <span className="hero-line hero-line-first">I build digital</span>
            <span className="hero-line hero-line-second">experiences that</span>
            <em>move people.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              I&apos;m Nico Guirnalda, a web and graphic designer creating thoughtful interfaces,
              brand visuals and digital experiences.
            </p>
            <a className="circle-link" href="#work" aria-label="Explore selected work">
              <ArrowIcon diagonal />
            </a>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <span>DESIGN</span>
            <i />
            <span>DEVELOP</span>
            <i />
            <span>DELIVER</span>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-label">
            <span>01</span> About me
          </div>
          <div className="about-grid reveal" data-reveal>
            <h2>
              Built with purpose.
              <br />
              Designed to last.
            </h2>
            <div className="about-copy">
              <p className="lead">
                I combine visual design, user experience thinking and practical web skills to turn
                ideas into clear digital experiences.
              </p>
              <p>
                Based in San Jose City, Nueva Ecija, I bring experience across web design, branding,
                UI/UX, motion and production. I enjoy translating business goals into design that is
                useful, consistent and ready for the real world.
              </p>
              <a className="text-link" href={behanceUrl} target="_blank" rel="noreferrer">
                Explore my Behance <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="stats reveal" data-reveal>
            <div>
              <strong>8+</strong>
              <span>
                Years of
                <br />
                professional experience
              </span>
            </div>
            <div>
              <strong>5+</strong>
              <span>
                Design and technology
                <br />
                certifications
              </span>
            </div>
            <div>
              <strong>BSIT</strong>
              <span>
                Central Luzon
                <br />
                State University
              </span>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-label light">
            <span>02</span> Capabilities
          </div>
          <div className="skills-heading reveal" data-reveal>
            <h2>
              The tools are only
              <br />
              as good as the thinking.
            </h2>
            <p>
              My toolkit covers the full path from research and interface design to branded assets,
              motion and responsive web implementation.
            </p>
          </div>
          <div className="skill-list reveal" data-reveal>
            {skills.map((skill) => (
              <article className="skill-row" key={skill.title}>
                <span className="skill-number">{skill.number}</span>
                <h3>{skill.title}</h3>
                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="section-label">
            <span>03</span> Experience
          </div>
          <div className="experience-heading reveal" data-reveal>
            <h2>
              Experience across
              <br />
              design & technology.
            </h2>
            <p>
              A career built across creative production, digital design, technology operations and
              client support.
            </p>
          </div>
          <div className="experience-list reveal" data-reveal>
            {experience.map((item, index) => (
              <article
                className="experience-row reveal"
                data-reveal
                key={`${item.company}-${item.period}`}
              >
                <span className="experience-period">{item.period}</span>
                <span className="experience-marker" aria-hidden="true">
                  <i />
                </span>
                <div className="experience-content">
                  <span className="experience-index">{String(index + 1).padStart(2, "0")}</span>
                  <div className="experience-role">
                    <h3>{item.role}</h3>
                    <span>{item.company}</span>
                  </div>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-label">
            <span>04</span> Design work
          </div>
          <div className="work-heading reveal" data-reveal>
            <h2>
              A few things
              <br />
              I&apos;m proud of.
            </h2>
            <p>Explore Nico&apos;s UI/UX, web, graphic and motion design projects on Behance.</p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-card reveal" data-reveal key={project.title}>
                <div className="project-meta">
                  <span className="project-number">{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <ProjectVisual type={project.visual} />
                <a
                  className="project-link"
                  href={behanceUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} projects on Behance`}
                >
                  <ArrowIcon diagonal />
                </a>
                <span className="project-count">0{index + 1} / 03</span>
              </article>
            ))}
          </div>
          <a className="behance-cta" href={behanceUrl} target="_blank" rel="noreferrer">
            <span>
              View all projects on <strong>Behance</strong>
            </span>
            <ArrowIcon diagonal />
          </a>
        </section>

        <section className="credentials section" id="credentials">
          <div className="section-label light">
            <span>05</span> Credentials
          </div>
          <div className="credentials-grid reveal" data-reveal>
            <div className="education-card">
              <span className="credential-kicker">Education</span>
              <h2>Bachelor of Science in Information Technology</h2>
              <p>Central Luzon State University</p>
              <span className="education-year">2016</span>
            </div>
            <div className="certification-column">
              <span className="credential-kicker">Certifications</span>
              <div className="certification-list">
                {certifications.map((certification) => (
                  <article key={certification.title}>
                    <div>
                      <h3>{certification.title}</h3>
                      <p>{certification.issuer}</p>
                    </div>
                    <span>{certification.year}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-topline">
            <div className="section-label light">
              <span>06</span> Start a project
            </div>
            <span>Based anywhere · Working worldwide</span>
          </div>
          <p className="contact-eyebrow">Have an idea in mind?</p>
          <h2>
            Let&apos;s make it
            <br />
            <em>happen.</em>
          </h2>
          <a className="contact-button" href="mailto:nicoguirnalda@yahoo.com">
            <span>nicoguirnalda@yahoo.com</span>
            <ArrowIcon diagonal />
          </a>
          <footer>
            <span>© {new Date().getFullYear()} Nico Guirnalda</span>
            <div>
              <a href={behanceUrl} target="_blank" rel="noreferrer">
                Behance
              </a>
              <a href={linkedInUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <a href="#home">Back to top ↑</a>
          </footer>
        </section>
      </main>
    </div>
  );
}
