import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import Particle from "../Particle";

const experiences = [
  {
    title: "Engineer II",
    company: "Dunnhumby",
    type: "Full-time",
    period: "Jul 2026 - Present • 5 mos",
    location: "Gurgaon, Haryana, India • Hybrid",
    current: true,
    logo: "dh",
    logoClass: "dunnhumby-logo",
  },
  {
    title: "Software Engineer II",
    company: "KlearNow.AI",
    type: "Full-time",
    period: "Jun 2025 - Jul 2026 • 1 yr 2 mos",
    location: "Gurugram, Haryana, India",
    current: false,
    logo: "kn",
    logoClass: "klearnow-logo",
  },
  {
    title: "Software Engineer",
    company: "Seyva Multimedia",
    type: "Full-time",
    period: "Mar 2022 - Jul 2025 • 3 yrs 5 mos",
    location: "Remote",
    current: false,
    logo: "sv",
    logoClass: "seyva-logo",
  },
  {
    title: "Software Engineering Trainee",
    company: "OPPS, Java and +6 skills",
    type: "Trainee",
    period: "Dec 2021 - Feb 2022 • 3 mos",
    location: "Hybrid",
    current: false,
    logo: "op",
    logoClass: "opps-logo",
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container className="experience-container">
        <div className="experience-header">
          <h1>Experience</h1>
          {/* <div className="experience-actions">
            <button className="icon-btn" aria-label="Add experience">
              <AiOutlinePlus />
            </button>
            <button className="icon-btn" aria-label="Edit experience">
              <AiOutlineEdit />
            </button>
          </div> */}
        </div>

        <div className="experience-timeline">
          {experiences.map((job, index) => (
            <div className="experience-item" key={`${job.company}-${index}`}>
              <div className="experience-dot" aria-hidden="true" />

              <div className="experience-card">
                <div className="experience-row">
                  <div className={`company-badge ${job.logoClass}`}>{job.logo}</div>

                  <div className="experience-main">
                    <div className="experience-title-row">
                      <h2>{job.title}</h2>
                      {job.current && <span className="present-badge">Present</span>}
                    </div>

                    <p className="company-meta">
                      {job.company} <span>• {job.type}</span>
                    </p>
                    <p className="job-period">{job.period}</p>
                    <p className="job-location">{job.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
