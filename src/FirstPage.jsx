import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

// ✅ Dynamic data
const aboutContent = {
  title: "WE DELIVER LANDMARK PRODUCTS",
  description: `We are introducing ourselves ABI PULP AND PAPER EQUIPMENTS having expertise and experience in paper mill machineries and equipments since 1996 onward and our supplies to all big and small paper units like rolls, felt rolls, wire return, breast rolls, pope rolls, spool rolls besides other equipments like pulper spares renovation of paper mill. We have in house facilities of all the equipments pulper spares renovation of paper mills. We have in house facilities of all the equipments to cater to the specific requirements of all the big and small paper mills. At the behest request from all entrepreneurs, we are happy to inform that we are venturing into manufacturing rubberizing and re-rubberizing of rolls.`
};

const supportItems = [
  "All types of rollers used in Paper, Textiles & other Allied Industries",
  "Recoating of all Rolls upto Dia 1550mm X Length upto 7000mm",
  "Roll Grinding upto Dia 1860mm X Length 11000 mm",
  "Lathe Dia 1550mm X Length 70000mm",
  "Vulcanizer machine capacity upto Dia 1650mm X Length 6750mm",
  "Mixing Mill",
  "Needer",
  "Variable speed cold feed Extruder"
];

const highlights = [
  { icon: "🏆", title: "WE'VE REPUTATION PAR EXCELLENCE" },
  { icon: "⚙️", title: "WE BUILD PARTNERSHIPS" },
  { icon: "👍", title: "GUIDED BY COMMITMENT" },
  { icon: "👥", title: "A TEAM OF PROFESSIONALS" }
];

const FrontPage = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h4>ABOUT US</h4>
          <h5>{aboutContent.title}</h5>
          <p>{aboutContent.description}</p>
        </Col>

        <Col md={6}>
          <h4>OUR SUPPORT</h4>
          <p>
            It is our pleasure to invite the paper mills to utilize our services for
            re-rubberizing / re-coating of all rollers as mentioned above and can send all
            rollers for grinding alone also.
          </p>
          <ListGroup variant="flush">
            {supportItems.map((item, index) => (
              <ListGroup.Item key={index}>➤ {item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      <Row className="text-center my-4">
        {highlights.map((item, index) => (
          <Col md={3} sm={6} key={index} className="mb-3">
            <h1>{item.icon}</h1>
            <h6>{item.title}</h6>
          </Col>
        ))}
      </Row>

      <Row className="bg-dark text-white py-3 mt-5">
        <Col md={6}>
          <h6>WORKING HOURS</h6>
          <p>Please contact us 24 x 7 for any requirements.</p>
        </Col>
        <Col md={6} className="text-end">
          <Button variant="link" className="text-white">TERMS AND CONDITIONS</Button>
          <Button variant="link" className="text-warning">PRIVACY POLICY</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FrontPage;
