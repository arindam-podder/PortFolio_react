import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function TechTool() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools </strong> I Know Well
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default TechTool;
