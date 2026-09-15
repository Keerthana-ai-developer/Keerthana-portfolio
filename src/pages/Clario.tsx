import { ArrowLeft, ArrowUpRight } from "lucide-react";

import overview from "../assets/clario/overview.png";
import aiStudio from "../assets/clario/ai-studio.png";
import customerReply from "../assets/clario/customer-reply.png";
import rewrite from "../assets/clario/rewrite.png";
import savedOutputs from "../assets/clario/saved-outputs.png";
import settings from "../assets/clario/settings.png";

import "../pages/CaseStudy.css";

function Clario() {
  return (
    <main className="case-page">
      <header className="case-nav">
        <a href="/" className="case-back">
          <ArrowLeft size={16} />
          Back to work
        </a>

        <span>CLARIO / 02</span>

        <a href="#case-contact" className="case-nav-link">
          Contact
        </a>
      </header>

      <section className="case-hero">
        <span className="case-eyebrow">AI PRODUCT</span>

        <h1>
          Cla
          <br />
          <em>rio.</em>
        </h1>

        <div className="case-hero-bottom">
          <p>
            An AI business workspace designed around everyday work instead of
            another generic chat interface.
          </p>

          <div>
            <span>ROLE</span>
            <strong>Product Designer & Builder</strong>
          </div>
        </div>
      </section>

      <section className="case-image case-image-primary">
        <img src={overview} alt="Clario AI business workspace" />
      </section>

      <section className="case-grid">
        <div className="case-label">01 / THE IDEA</div>

        <div className="case-copy">
          <h2>AI should help with work, not create more work.</h2>

          <p>
            Clario was designed for small businesses, freelancers, creators
            and solo founders who regularly need help with communication,
            content and everyday business tasks.
          </p>

          <p>
            Instead of starting with a blank AI chat box, the product organizes
            common tasks into focused workflows.
          </p>
        </div>
      </section>

      {/* PRODUCT EXPERIENCE */}
      <section className="case-gallery">
        <div className="case-gallery-heading">
          <span>PRODUCT EXPERIENCE</span>
          <span>02 / 06</span>
        </div>

        {/* 01 — AI STUDIO */}
        <div className="case-gallery-row">
          <div className="case-gallery-copy">
            <span className="gallery-number">01</span>

            <div>
              <h3>AI Studio</h3>

              <p>
                Focused AI workflows organized around useful business tasks.
              </p>
            </div>
          </div>

          <div className="case-gallery-image">
            <img src={aiStudio} alt="Clario AI Studio" />
          </div>
        </div>

        {/* 02 — CUSTOMER REPLY */}
        <div className="case-gallery-row reverse">
          <div className="case-gallery-copy">
            <span className="gallery-number">02</span>

            <div>
              <h3>Customer Reply</h3>

              <p>
                Generate a useful response while keeping the user in control.
              </p>
            </div>
          </div>

          <div className="case-gallery-image">
            <img
              src={customerReply}
              alt="Clario customer reply workflow"
            />
          </div>
        </div>

        {/* 03 — REWRITE */}
        <div className="case-gallery-row">
          <div className="case-gallery-copy">
            <span className="gallery-number">03</span>

            <div>
              <h3>Rewrite</h3>

              <p>
                Adjust existing content with simple controls for tone and
                length.
              </p>
            </div>
          </div>

          <div className="case-gallery-image">
            <img src={rewrite} alt="Clario rewrite workflow" />
          </div>
        </div>

        {/* 04 — SAVED OUTPUTS */}
        <div className="case-gallery-row reverse">
          <div className="case-gallery-copy">
            <span className="gallery-number">04</span>

            <div>
              <h3>Saved Outputs</h3>

              <p>
                Keep useful generated work available instead of losing it
                after one interaction.
              </p>
            </div>
          </div>

          <div className="case-gallery-image">
            <img src={savedOutputs} alt="Clario saved outputs" />
          </div>
        </div>

        {/* 05 — SETTINGS */}
        <div className="case-gallery-row">
          <div className="case-gallery-copy">
            <span className="gallery-number">05</span>

            <div>
              <h3>Settings</h3>

              <p>
                Personal and business context can be managed within the
                workspace.
              </p>
            </div>
          </div>

          <div className="case-gallery-image">
            <img src={settings} alt="Clario settings" />
          </div>
        </div>
      </section>

      <section className="case-decision">
        <div className="case-label">03 / PRODUCT EXPERIENCE</div>

        <div className="case-decision-grid">
          <div>
            <span>01</span>
            <h3>Customer Reply</h3>
            <p>
              Generate useful business responses while keeping the user in
              control of the final message.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Rewrite</h3>
            <p>
              Transform existing text with controls such as shorter and
              warmer.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Content</h3>
            <p>
              Create social posts, summarize information and explore business
              ideas through structured tasks.
            </p>
          </div>
        </div>
      </section>

      <section className="case-highlight">
        <div>
          <span className="case-eyebrow">THE BUILD</span>

          <h2>
            A focused AI
            <br />
            workspace.
          </h2>
        </div>

        <div className="case-highlight-list">
          <div>
            <span>PRODUCT</span>
            <strong>AI business workspace</strong>
          </div>

          <div>
            <span>TECHNOLOGY</span>
            <strong>React · Firebase · AI APIs</strong>
          </div>

          <div>
            <span>EXPERIENCE</span>
            <strong>Task-based AI workflows</strong>
          </div>
        </div>
      </section>

      <section className="case-grid case-outcome">
        <div className="case-label">04 / WHAT IT DEMONSTRATES</div>

        <div className="case-copy">
          <h2>Product thinking behind the interface.</h2>

          <p>
            Clario demonstrates how an AI capability can be shaped into a
            product experience with defined tasks, editable outputs, saving,
            activity and user-specific context.
          </p>

          <p>
            The goal was not to reproduce ChatGPT, but to create a focused
            workflow for a specific group of users.
          </p>
        </div>
      </section>

      <section className="case-project-nav" id="case-contact">
        <a href="/" className="case-project-nav-back">
          <ArrowLeft size={16} />
          Back to work
        </a>

        <a href="/cuddle-nest" className="case-next-project">
          <span>PREVIOUS PROJECT</span>

          <strong>Cuddle Nest</strong>

          <small>REAL-WORLD PRODUCT</small>

          <ArrowUpRight size={22} />
        </a>
      </section>

      <footer className="case-footer">
        <span>KEERTHANA C. / 2026</span>
      </footer>
    </main>
  );
}

export default Clario;