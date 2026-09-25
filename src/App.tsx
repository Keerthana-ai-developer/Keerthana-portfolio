import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Mail,
  X,
  BriefcaseBusiness,
  Camera,
} from "lucide-react";

import cuddleLogin from "./assets/cuddle-nest/login.png";
import clarioOverview from "./assets/clario/overview.png";
import noirCrumbOverview from "./assets/noir-crumb/overview.png";

import CuddleNest from "./pages/CuddleNest";
import Clario from "./pages/Clario";
import NoirCrumb from "./pages/NoirCrumb";

import "./App.css";

function App() {
  const path = window.location.pathname;
  const [contactOpen, setContactOpen] = useState(false);

  if (path === "/cuddle-nest") {
    return <CuddleNest />;
  }

  if (path === "/clario") {
    return <Clario />;
  }

  if (path === "/noir-crumb") {
  return <NoirCrumb />;
}

  return (
    <main className="portfolio">
      {/* NAVIGATION */}
      <header className="topbar">
        <a href="/" className="brand">
          KEERTHANA <span>. C</span>
        </a>

        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#lab">Lab</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="nav-cta nav-contact-button"
          onClick={() => setContactOpen(true)}
        >
          Let's talk <ArrowUpRight size={15} />
        </button>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-index">01 / PRODUCT BUILDER</div>

        <div className="hero-main">
          <h1>
            I turn
            <br />
            <em>problems</em>
            <br />
            into products.
          </h1>

          <div className="hero-side">
            <p>
              I build practical digital products by combining product thinking,
              AI and technology.
            </p>

            <a href="#work" className="circle-link" aria-label="View work">
              <ArrowDownRight size={21} />
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>PRODUCT × AI × TECHNOLOGY</span>
          <span>BASED IN INDIA</span>
          <span>AVAILABLE FOR SELECT WORK</span>
        </div>
      </section>

      {/* WORK */}
      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECTED PRODUCTS</span>
            <h2>Things I've built.</h2>
          </div>

          <span className="section-count">02 — 03</span>
        </div>

        {/* PROJECT 01 */}
        <article className="project project-cuddle">
          <div className="project-meta">
            <span>01</span>
            <span>REAL-WORLD PRODUCT</span>
          </div>

          <div className="project-title">
            <h3>Cuddle Nest</h3>
            <p>
              A multi-role school management platform built around the everyday
              needs of parents, teachers and administrators.
            </p>
          </div>

          <a href="/cuddle-nest" className="project-visual">
            <div className="visual-label">VIEW CASE STUDY ↗</div>

            <img
              src={cuddleLogin}
              alt="Cuddle Nest school management platform"
            />
          </a>

          <div className="project-footer">
            <div>
              <span>ROLE</span>
              <strong>Product & Application Developer</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>React · Firebase · JavaScript</strong>
            </div>

            <div className="project-number">01</div>
          </div>
        </article>

        {/* PROJECT 02 */}
        <article className="project project-clario">
          <div className="project-meta">
            <span>02</span>
            <span>AI PRODUCT</span>
          </div>

          <div className="project-title">
            <h3>Clario</h3>
            <p>
              An AI workspace designed around everyday business tasks instead
              of another generic AI chat interface.
            </p>
          </div>

          <a href="/clario" className="project-visual">
            <div className="visual-label">VIEW CASE STUDY ↗</div>

            <img
              src={clarioOverview}
              alt="Clario AI business workspace"
            />
          </a>

          <div className="project-footer">
            <div>
              <span>ROLE</span>
              <strong>Product Designer & Builder</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>React · Firebase · AI</strong>
            </div>

            <div className="project-number">02</div>
          </div>
        </article>

        {/* PROJECT 03 */}
<article className="project project-noir">
  <div className="project-meta">
    <span>03</span>
    <span>WEBSITE CONCEPT</span>
  </div>

  <div className="project-title">
    <h3>NOIR & CRUMB</h3>
    <p>
      A premium café website concept designed to turn a café's
      atmosphere into a memorable digital experience.
    </p>
  </div>

  <a href="/noir-crumb" className="project-visual">
    <div className="visual-label">VIEW PROJECT ↗</div>

    <img
      src={noirCrumbOverview}
      alt="NOIR & CRUMB premium café website"
    />
  </a>

  <div className="project-footer">
    <div>
      <span>ROLE</span>
      <strong>Product Designer & Developer</strong>
    </div>

    <div>
      <span>STACK</span>
      <strong>React · JavaScript · CSS</strong>
    </div>

    <div className="project-number">03</div>
  </div>
</article>
      </section>

      {/* APPROACH */}
      <section className="approach-section" id="approach">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HOW I WORK</span>
            <h2>
              Think first.
              <br />
              Build second.
            </h2>
          </div>

          <span className="section-count">03 — 04</span>
        </div>

        <div className="approach-grid">
          <div className="approach-intro">
            <span>THE PRODUCT LOOP</span>
            <p>
              I don't start with screens. I start by understanding what needs
              to exist, who it is for and why it matters.
            </p>
          </div>

          <div className="approach-item">
            <span>01</span>
            <h3>Understand</h3>
            <p>
              Problem, users, requirements, constraints and the real context
              behind the idea.
            </p>
          </div>

          <div className="approach-item">
            <span>02</span>
            <h3>Shape</h3>
            <p>
              Turn requirements into flows, priorities, product decisions and
              a focused MVP.
            </p>
          </div>

          <div className="approach-item">
            <span>03</span>
            <h3>Build</h3>
            <p>
              Design, develop, test and iterate until the product actually
              works for the people using it.
            </p>
          </div>
        </div>
      </section>

           {/* CAPABILITIES */}
<section className="capabilities-section">
  <div className="capabilities-inner">

    <div className="section-heading">
      <div>
        <span className="eyebrow">CAPABILITIES</span>
        <h2>
          What I bring
          <br />
          to a product.
        </h2>
      </div>

      <span className="section-count">04 — 04</span>
    </div>

    <div className="capabilities-grid">
      <div className="capability">
        <div className="capability-number">01</div>

        <h3>PRODUCT</h3>

        <ul>
          <li>Problem framing</li>
          <li>Product thinking</li>
          <li>MVP definition</li>
          <li>User flows</li>
          <li>Requirements → features</li>
        </ul>
      </div>

      <div className="capability">
        <div className="capability-number">02</div>

        <h3>BUILD</h3>

        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>Firebase</li>
          <li>Responsive web apps</li>
          <li>Deployment & debugging</li>
        </ul>
      </div>

      <div className="capability">
        <div className="capability-number">03</div>

        <h3>AI</h3>

        <ul>
          <li>AI-powered products</li>
          <li>AI workflows</li>
          <li>AI API integration</li>
          <li>AI-assisted development</li>
          <li>AI product concepts</li>
        </ul>
      </div>

      <div className="capability">
        <div className="capability-number">04</div>

        <h3>EXPERIENCE</h3>

        <ul>
          <li>UX thinking</li>
          <li>Interface design</li>
          <li>Responsive design</li>
          <li>Interaction patterns</li>
          <li>Product usability</li>
        </ul>
      </div>
    </div>

  </div>
</section>

      {/* LAB */}
      <section className="lab-section" id="lab">
        <div className="lab-label">
          <span className="eyebrow">THE LAB</span>
          <span>04</span>
        </div>

        <div className="lab-content">
          <p className="lab-kicker">CURRENTLY EXPLORING</p>

          <div className="lab-list">
            <div>
              <span>01</span>
              <strong>AI PRODUCT EXPERIENCES</strong>
            </div>

            <div>
              <span>02</span>
              <strong>PRODUCT STRATEGY</strong>
            </div>

            <div>
              <span>03</span>
              <strong>AI-ASSISTED BUILDING</strong>
            </div>

            <div>
              <span>04</span>
              <strong>REAL-WORLD DIGITAL PRODUCTS</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
<section className="about-section">
  <div className="about-inner">
    <div className="about-heading">
      <span className="eyebrow">ABOUT</span>

      <h2>
        A builder with a
        <br />
        <em>product mindset.</em>
      </h2>
    </div>

    <div className="about-content">
      <div className="about-intro">
        <p>
          I enjoy turning ideas into useful digital products — from
          understanding the problem and shaping the experience to building
          and improving the final product.
        </p>

        <p>
          My background in technology gives me a strong foundation for
          working with development, while my interest in product helps me
          think beyond just writing code.
        </p>
      </div>

      <div className="about-details">
        <div className="about-detail">
          <span>BACKGROUND</span>

          <strong>
            B.Tech AI & Data Science
          </strong>

          <p>
            Technical foundation with a growing focus on AI and product
            development.
          </p>
        </div>

        <div className="about-detail">
          <span>WHAT I DO</span>

          <strong>
            Product · AI · Technology
          </strong>

          <p>
            Explore problems, shape ideas, build functional products and
            continuously improve the experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CONTACT */}
<section className="contact-section" id="contact">
  <div className="contact-top">
    <span className="eyebrow">05 / CONTACT</span>
    <span>OPEN TO OPPORTUNITIES</span>
  </div>

  <div className="contact-main">
    <div className="contact-copy">
      <span className="contact-kicker">LET'S BUILD SOMETHING USEFUL</span>

      <h2>
        Have an idea?
        <br />
        <em>Let's make it real.</em>
      </h2>

      <p>
        Available for selected freelance projects, collaborations and
        product-focused opportunities.
      </p>
    </div>

    <button
      className="contact-button"
      onClick={() => setContactOpen(true)}
    >
      Start a conversation
      <ArrowUpRight size={18} />
    </button>
  </div>

  <footer className="footer">
    <span>KEERTHANA C</span>
    <span>AI PRODUCT BUILDER</span>
    <span>© 2026</span>
  </footer>
</section>

      {/* CONTACT MODAL */}
      {contactOpen && (
        <div
          className="contact-modal-overlay"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="contact-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="contact-modal-close"
              onClick={() => setContactOpen(false)}
              aria-label="Close contact popup"
            >
              <X size={19} />
            </button>

            <div className="contact-modal-header">
              <span>LET'S CONNECT</span>

              <h3>
                Start a
                <br />
                <em>conversation.</em>
              </h3>

              <p>
                Whether it's a product idea, freelance project or opportunity,
                I'd love to hear from you.
              </p>
            </div>

            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/keerthana-c-766a98400"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-left">
                  <BriefcaseBusiness size={18} />
                   LinkedIn
                </span>

                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://www.fiverr.com/s/yevjN4b"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-left">
                  <span className="fiverr-icon">F</span>
                  Fiverr
                </span>

                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://www.instagram.com/keerthana.dx.studio"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-left">
                  <Camera size={18} />
                    Instagram
                </span>

                <ArrowUpRight size={18} />
              </a>

              <a href="mailto:talkto.keerthana.dx@gmail.com">
                <span className="contact-link-left">
                  <Mail size={18} />
                  Email
                </span>

                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="contact-modal-footer">
              <span>AVAILABLE FOR SELECT WORK</span>
              <span>KEERTHANA C</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;