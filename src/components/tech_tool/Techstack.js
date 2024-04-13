import React, {useState} from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaJava } from "react-icons/fa";
import dsaLogo from "../../Assets/dsaLogo21.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5, 
  DiJqueryLogo
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiSpringboot,
  SiSpring,
  SiSpringsecurity,
  SiMysql,
  SiCss3,
  SiHtml5, 
  SiBootstrap, 
  SiAtlassian, 
  SiJavascript, 
  SiJquery, 
  SiReact,
  SiMongodb,
  SiGit
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() { 

  const renderTooltip = (title) => (
    <Tooltip id="tooltip" >
      {title}
    </Tooltip>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons" >
        {/* <DiJava /> */}
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 1, hide: 200 }}
        overlay={renderTooltip("Java")}
        >
        <div style={{ position: 'relative' }}>
          <DiJava  />
        </div>
      </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons" >
        {/* <SiSpring /> */}
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 1, hide: 200 }}
          overlay={renderTooltip("Spring")}
        >
          <div style={{position:'relative'}}>
            <SiSpring />
          </div>
        </OverlayTrigger>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" >
        {/* <SiSpringboot /> */}
        <OverlayTrigger
          placement="bottom"
          delay={{show: 1, hide: 200}}
          overlay={renderTooltip("SpringBoot")}
        >
          <div style={{position:'relative'}}>
            <SiSpringboot />
          </div>
        </OverlayTrigger>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" >
        {/* <SiSpringsecurity /> */}
        <OverlayTrigger
          placement="bottom"
          delay={{show: 1, hide: 200}}
          overlay={renderTooltip("Spring Security")}
        >
          <div style={{position:'relative'}}>
            <SiSpringsecurity />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        {/* <DiPython /> */}
        <OverlayTrigger
          placement="bottom"
          delay={{show: 1, hide: 200}}
          overlay={renderTooltip("Python")}
        >
          <div style={{position:'relative'}}>
            <DiPython />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons" >
        <OverlayTrigger
          placement="bottom"
          delay={{show: 1, hide: 200}}
          overlay={renderTooltip("HTML")}
        >
          <div style={{position:'relative'}}>
            <SiHtml5 />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons" >
        <OverlayTrigger
          placement="bottom"
          delay={{show: 1, hide: 200}}
          overlay={renderTooltip("CSS")}
        >
          <div style={{position:'relative'}}>
            <SiCss3 />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons" >
        <OverlayTrigger
          placement="bottom"
          delay={{show: 1, hide: 200}}
          overlay={renderTooltip("Bootstrap")}
        >
          <div style={{position:'relative'}}>
            <SiBootstrap />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons" >
        <OverlayTrigger
          placement="bottom"
          delay={{show: 1, hide: 200}}
          overlay={renderTooltip("Atlassian UI")}
        >
          <div style={{position:'relative'}}>
            <SiAtlassian />
          </div>
        </OverlayTrigger>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" >
        <OverlayTrigger
          placement="bottom"
          delay={{show: 1, hide: 200}}
          overlay={renderTooltip("Javascript")}
        >
          <div style={{position:'relative'}}>
            <SiJavascript />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons" >
        <OverlayTrigger
          placement="bottom"
          delay={{show: 1, hide: 200}}
          overlay={renderTooltip("Jquery")}
        >
          <div style={{position:'relative'}}>
            <SiJquery />
          </div>
        </OverlayTrigger>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" >
        <OverlayTrigger
          placement="bottom"
          delay={{show: 1, hide: 200}}
          overlay={renderTooltip("React-js")}
        >
          <div style={{position:'relative'}}>
            <SiReact />
          </div>
        </OverlayTrigger>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          delay={{show: 1, hide: 200}}
          overlay={renderTooltip("Mysql")}
        >
          <div style={{position:'relative'}}>
            <SiMysql />
          </div>
        </OverlayTrigger>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          delay={{show: 1, hide: 200}}
          overlay={renderTooltip("MongoDB")}
        >
          <div style={{position:'relative'}}>
            <SiMongodb />
          </div>
        </OverlayTrigger>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          delay={{show: 1, hide: 200}}
          overlay={renderTooltip("GIT")}
        >
          <div style={{position:'relative'}}>
            <SiGit />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons" >
        {/* <DiJava /> */}
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 1, hide: 200 }}
          overlay={renderTooltip("DSA-Problem Solving")}
        >
          <div style={{ position: 'relative' }}>
            <img src={dsaLogo} alt="DSA" width={80} height={80}></img>
          </div>
        </OverlayTrigger>
      </Col>
      
      
    </Row>
  );
}

export default Techstack;




