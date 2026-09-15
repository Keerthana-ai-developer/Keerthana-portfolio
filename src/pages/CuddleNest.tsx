import { ArrowLeft, ArrowUpRight } from "lucide-react";

import login from "../assets/cuddle-nest/login.png";
import parentDashboard from "../assets/cuddle-nest/parent-dashboard.png";
import teacherDashboard from "../assets/cuddle-nest/teacher-dashboard.png";
import adminDashboard from "../assets/cuddle-nest/admin-dashboard.png";
import studentManagement from "../assets/cuddle-nest/student-management.png";

import "../pages/CaseStudy.css";

function CuddleNest() {
  return (
    <main className="case-page">
      <header className="case-nav">
        <a href="/" className="case-back">
          <ArrowLeft size={16} />
          Back to work
        </a>

        <span>CUDDLE NEST / 01</span>

        <a href="#case-contact" className="case-nav-link">
          Contact
        </a>
      </header>

      <section className="case-hero">
        <span className="case-eyebrow">REAL-WORLD PRODUCT</span>

        <h1>
          Cuddle
          <br />
          <em>Nest.</em>
        </h1>

        <div className="case-hero-bottom">
          <p>
            A multi-role school management platform designed to connect
            parents, teachers and administrators through one digital system.
          </p>

          <div>
            <span>ROLE</span>
            <strong>Product & Application Developer</strong>
          </div>
        </div>
      </section>

      <section className="case-image case-image-primary">
        <img src={login} alt="Cuddle Nest login interface" />
      </section>

      <section className="case-grid">
        <div className="case-label">01 / CONTEXT</div>

        <div className="case-copy">
          <h2>A real product for a real school.</h2>

          <p>
            Cuddle Nest was developed for a real-world school environment,
            where different users needed different ways to access and manage
            school information.
          </p>

          <p>
            The product needed separate experiences for parents, teachers and
            administrators while keeping authentication, information and daily
            operations organized.
          </p>
        </div>
      </section>

      {/* PRODUCT EXPERIENCE */}
      <section className="case-gallery">
        <div className="case-gallery-heading">
          <span>PRODUCT EXPERIENCE</span>
          <span>02 / 04</span>
        </div>

        {/* 01 — PARENT */}
        <div className="case-gallery-row">
          <div className="case-gallery-copy">
            <span className="gallery-number">01</span>

            <div>
              <h3>Parent experience</h3>

              <p>
                Access to student information and everyday school updates.
              </p>
            </div>
          </div>

          <div className="case-gallery-image">
            <img
              src={parentDashboard}
              alt="Cuddle Nest parent dashboard"
            />
          </div>
        </div>

        {/* 02 — TEACHER */}
        <div className="case-gallery-row reverse">
          <div className="case-gallery-copy">
            <span className="gallery-number">02</span>

            <div>
              <h3>Teacher experience</h3>

              <p>
                A focused workspace for classes, students, attendance and
                communication.
              </p>
            </div>
          </div>

          <div className="case-gallery-image">
            <img
              src={teacherDashboard}
              alt="Cuddle Nest teacher dashboard"
            />
          </div>
        </div>

        {/* 03 — ADMIN */}
        <div className="case-gallery-row">
          <div className="case-gallery-copy">
            <span className="gallery-number">03</span>

            <div>
              <h3>Admin experience</h3>

              <p>
                Centralized management across students, teachers and school
                operations.
              </p>
            </div>
          </div>

          <div className="case-gallery-image">
            <img
              src={adminDashboard}
              alt="Cuddle Nest admin dashboard"
            />
          </div>
        </div>

        {/* 04 — STUDENT MANAGEMENT */}
        <div className="case-gallery-row reverse">
          <div className="case-gallery-copy">
            <span className="gallery-number">04</span>

            <div>
              <h3>Student management</h3>

              <p>
                Structured student records with the information required by
                the school.
              </p>
            </div>
          </div>

          <div className="case-gallery-image">
            <img
              src={studentManagement}
              alt="Cuddle Nest student management"
            />
          </div>
        </div>
      </section>

      <section className="case-decision">
        <div className="case-label">03 / PRODUCT STRUCTURE</div>

        <div className="case-decision-grid">
          <div>
            <span>01</span>
            <h3>Parents</h3>
            <p>
              Attendance, homework, activities, announcements, transport and
              student information.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Teachers</h3>
            <p>
              Classes, students, attendance, homework, activities and school
              communication.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Admin</h3>
            <p>
              Student and teacher management, attendance, content, events,
              transport and announcements.
            </p>
          </div>
        </div>
      </section>

      <section className="case-highlight">
        <div>
          <span className="case-eyebrow">THE BUILD</span>

          <h2>
            From requirements
            <br />
            to a working product.
          </h2>
        </div>

        <div className="case-highlight-list">
          <div>
            <span>TECHNOLOGY</span>
            <strong>React · JavaScript · Firebase</strong>
          </div>

          <div>
            <span>AUTHENTICATION</span>
            <strong>Role-based access</strong>
          </div>

          <div>
            <span>PLATFORM</span>
            <strong>Responsive web application</strong>
          </div>
        </div>
      </section>

      <section className="case-grid case-outcome">
        <div className="case-label">04 / OUTCOME</div>

        <div className="case-copy">
          <h2>Built, deployed, and still evolving.</h2>

          <p>
            The application is functional and deployed for use. The school has
            also requested additional features, making the product an ongoing
            real-world iteration rather than a one-time concept.
          </p>

          <a
            href="https://cuddle-nest-play-school.web.app/"
            target="_blank"
            rel="noreferrer"
            className="case-button"
          >
            Open live product
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section className="case-project-nav" id="case-contact">
        <a href="/" className="case-project-nav-back">
          <ArrowLeft size={16} />
          Back to work
        </a>

        <a href="/clario" className="case-next-project">
          <span>NEXT PROJECT</span>

          <strong>Clario</strong>

          <small>AI PRODUCT</small>

          <ArrowUpRight size={22} />
        </a>
      </section>

      <footer className="case-footer">
        <span>KEERTHANA C. / 2026</span>
      </footer>
    </main>
  );
}

export default CuddleNest;