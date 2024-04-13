import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arindam Podder </span>
            from <span className="purple"> Raiganj, West Bengal, India.</span>
            <br />
            I am currently employed as a software Engineer at
            Sevya Multimedia. and as part of my role, I work with multiple clients also.  
            This involves collaborating with different clients while being an integral part of the 
            Sevya MM team.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing mobile & PC games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There is no substitute of Hard Work, so work hard."{" "}
          </p>
          <footer className="blockquote-footer">Arindam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
