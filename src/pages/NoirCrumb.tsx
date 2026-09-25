import { ArrowLeft, ArrowUpRight } from "lucide-react";

import noirOverview from "../assets/noir-crumb/overview.png";
import noirHome from "../assets/noir-crumb/home.png";
import noirMenu from "../assets/noir-crumb/menu.png";
import noirStory from "../assets/noir-crumb/story.png";
import noirReserve from "../assets/noir-crumb/reserve.png";

import "../pages/CaseStudy.css";

function NoirCrumb() {
  return (
    <main className="case-page">
      {/* =========================
          NAV
      ========================= */}
      <header className="case-nav">
        <a href="/" className="case-back">
          <ArrowLeft size={16} />
          Back to work
        </a>

        <span>NOIR & CRUMB / 03</span>

        <a href="#case-contact" className="case-nav-link">
          Contact
        </a>
      </header>

      {/* =========================
          HERO
      ========================= */}
      <section className="case-hero">
        <span className="case-eyebrow">
          WEBSITE CONCEPT
        </span>

        <h1>
          Noir
          <br />
          <em>& Crumb.</em>
        </h1>

        <div className="case-hero-bottom">
          <p>
            A premium café website designed to turn a physical café's
            atmosphere into a calm, memorable digital experience.
          </p>

          <div>
            <span>ROLE</span>
            <strong>Product Designer & Developer</strong>
          </div>
        </div>
      </section>

      {/* =========================
          PRIMARY IMAGE
      ========================= */}
      <section className="case-image case-image-primary">
        <img
  src={noirHome}
  alt="NOIR & CRUMB homepage"
/>
      </section>

      {/* =========================
          CONTEXT
      ========================= */}
      <section className="case-grid">
        <div className="case-label">01 / CONTEXT</div>

        <div className="case-copy">
          <h2>
            More than
            <br />
            <em>a menu.</em>
          </h2>

          <p>
            NOIR & CRUMB was created as a premium café website concept
            focused on atmosphere, storytelling and conversion rather
            than simply displaying a menu.
          </p>

          <p>
            The experience gives visitors a reason to explore the space,
            understand the café's personality and ultimately reserve a
            table.
          </p>
        </div>
      </section>

      {/* =========================
          PRODUCT EXPERIENCE
      ========================= */}
      <section className="case-gallery">
        <div className="case-gallery-heading">
          <span>PRODUCT EXPERIENCE</span>
          <span>02 / 04</span>
        </div>

        {/* 01 */}
        <div className="case-gallery-row">
          <div className="case-gallery-copy">
            <span className="gallery-number">01</span>

            <div>
              <h3>First impression</h3>

              <p>
                The opening experience establishes the café's identity
                through oversized typography, photography and restrained
                interactions.
              </p>
            </div>
          </div>

          <div className="case-gallery-image">
            <img
              src={noirOverview}
              alt="NOIR & CRUMB homepage"
            />
          </div>
        </div>

        {/* 02 */}
        <div className="case-gallery-row reverse">
          <div className="case-gallery-copy">
            <span className="gallery-number">02</span>

            <div>
              <h3>Explore the menu</h3>

              <p>
                The menu experience keeps the selection focused while
                allowing visitors to explore each item without losing
                the overall visual rhythm.
              </p>
            </div>
          </div>

          <div className="case-gallery-image">
            <img
  src={noirMenu}
  alt="NOIR & CRUMB menu experience"
/>
          </div>
        </div>

        {/* 03 */}
        <div className="case-gallery-row">
          <div className="case-gallery-copy">
            <span className="gallery-number">03</span>

            <div>
              <h3>Stay with the story</h3>

              <p>
                Editorial sections and atmospheric imagery give visitors
                more reasons to continue exploring the café.
              </p>
            </div>
          </div>

          <div className="case-gallery-image">
            <img
  src={noirStory}
  alt="NOIR & CRUMB story experience"
/>
          </div>
        </div>

        {/* 04 */}
        <div className="case-gallery-row reverse">
          <div className="case-gallery-copy">
            <span className="gallery-number">04</span>

            <div>
              <h3>Reserve a table</h3>

              <p>
                Clear calls to action connect the digital experience
                with the physical café.
              </p>
            </div>
          </div>

          <div className="case-gallery-image">
            <img
  src={noirReserve}
  alt="NOIR & CRUMB reservation experience"
/>
          </div>
        </div>
      </section>

      {/* =========================
          DESIGN DIRECTION
      ========================= */}
      <section className="case-decision">
        <div className="case-label">03 / DESIGN DIRECTION</div>

        <div className="case-decision-grid">
          <div>
            <span>01</span>

            <h3>Atmosphere</h3>

            <p>
              Photography and generous spacing make the café feel present
              before someone ever walks through the door.
            </p>
          </div>

          <div>
            <span>02</span>

            <h3>Editorial</h3>

            <p>
              Oversized typography creates a premium editorial character
              without unnecessary decoration.
            </p>
          </div>

          <div>
            <span>03</span>

            <h3>Conversion</h3>

            <p>
              Navigation and reservation actions guide visitors naturally
              from discovery toward action.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          BUILD
      ========================= */}
      <section className="case-highlight">
        <div>
          <span className="case-eyebrow">THE BUILD</span>

          <h2>
            From concept
            <br />
            to a working
            <br />
            <em>experience.</em>
          </h2>
        </div>

        <div className="case-highlight-list">
          <div>
            <span>TECHNOLOGY</span>
            <strong>React · JavaScript · CSS</strong>
          </div>

          <div>
            <span>EXPERIENCE</span>
            <strong>Responsive web application</strong>
          </div>

          <div>
            <span>INTERACTION</span>
            <strong>Navigation · Menu · Reservation</strong>
          </div>
        </div>
      </section>

      {/* =========================
          OUTCOME
      ========================= */}
      <section className="case-grid case-outcome">
        <div className="case-label">04 / OUTCOME</div>

        <div className="case-copy">
          <h2>
            A digital
            <br />
            <em>place to visit.</em>
          </h2>

          <p>
            The final concept turns a simple café website into an
            experience that communicates mood, personality and place.
          </p>

          <p>
            Instead of treating the website as a digital menu, the
            product was designed as an extension of the café itself.
          </p>

          <a
            href="https://noir-and-crumb-nu.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="case-button"
          >
            Open live website
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* =========================
          PREVIOUS PROJECT
      ========================= */}
      <section className="case-project-nav">

  <a href="/cuddle-nest" className="case-project-nav-back">
    <ArrowLeft size={16} />
    Previous · Cuddle Nest
  </a>

  <a href="/clario" className="case-next-project">
    <span>NEXT PROJECT</span>

    <strong>Clario</strong>

    <small>AI PRODUCT</small>

    <ArrowUpRight size={22} />
  </a>

</section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="case-footer">
        <span>KEERTHANA C. / 2026</span>
      </footer>
    </main>
  );
}

export default NoirCrumb;