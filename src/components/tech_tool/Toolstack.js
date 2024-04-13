import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub, 
  SiBitbucket,
  SiJira, 
  SiWindows, 
  SiLinux, 
  SiEclipseche,
  SiPycharm
} from "react-icons/si";

import {
  DiEclipse, DiIntellij, DiPython, DiVisualstudio
} from "react-icons/di"

function Toolstack() {

  const renderTooltip = (title) => (
    <Tooltip id="tooltip" >
      {title}
    </Tooltip>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" >
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 1, hide: 200 }}
        overlay={renderTooltip("Github")}
        >
          <div style={{ position: 'relative' }}>
            <SiGithub />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons" >
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 1, hide: 200 }}
        overlay={renderTooltip("Windows")}
        >
          <div style={{ position: 'relative' }}>
            <SiWindows />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons" >
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 1, hide: 200 }}
        overlay={renderTooltip("Linux")}
        >
          <div style={{ position: 'relative' }}>
            <SiLinux />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons" >
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 1, hide: 200 }}
        overlay={renderTooltip("Bitbucket")}
        >
          <div style={{ position: 'relative' }}>
            <SiBitbucket />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons" >
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 1, hide: 200 }}
        overlay={renderTooltip("Jira")}
        >
          <div style={{ position: 'relative' }}>
            <SiJira />
          </div>
        </OverlayTrigger>
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 1, hide: 200 }}
          overlay={renderTooltip("Postman")}
        >
          <div style={{ position: 'relative' }}>
            <SiPostman />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 1, hide: 200 }}
          overlay={renderTooltip("Eclipse")}
        >
          <div style={{ position: 'relative' }}>
            <DiEclipse />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 1, hide: 200 }}
          overlay={renderTooltip("Pycharm")}
        >
          <div style={{ position: 'relative' }}>
            <SiPycharm />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 1, hide: 200 }}
          overlay={renderTooltip("Intelij")}
        >
          <div style={{ position: 'relative' }}>
            <DiIntellij />
          </div>
        </OverlayTrigger>
      </Col>      

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 1, hide: 200 }}
          overlay={renderTooltip("VS code")}
        >
          <div style={{ position: 'relative' }}>
            <SiVisualstudiocode />
          </div>
        </OverlayTrigger>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
