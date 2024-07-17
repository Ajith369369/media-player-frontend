// import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

function Landing() {
  return (
    <>
      <Row className="w-100 mt-5 d-flex justify-content-center align-items-center ps-4">
        <Col md={1}></Col>
        <Col md={5} className="p-3">
          <h3>
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem adipisci perferendis sed perspiciatis dignissimos
            quibusdam ex vel totam voluptatum distinctio, nobis doloremque,
            dolorum maxime aliquam sit ullam ea quis autem. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aliquam esse eaque quam
            sapiente. Nobis enim est vel amet? Natus numquam voluptate adipisci
            maiores, cumque veritatis! Ratione repellendus voluptatum
            necessitatibus non!
          </p>
          <Link to={'/home'}><button className="btn btn-warning mt-5">Get Started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center p-5"
        >
          <img
            src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
            alt=""
            className="w-75"
          />
        </Col>
      </Row>

      <div className="container">
        <h3 className="text-center my-5">Features</h3>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center px-5"
          >
            <Card>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 border border-secondary border-2 rounded p-3 my-5 ">
            <div className="row p-4">
              <div className="col-md-6">
                <h3 className="text-warning">Simple fast and PowerFul</h3>
                <p className="mt-5">
                  <span className="fs-5">Play Everything</span> : Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Sit quam debitis
                  a id, alias cumque, amet obcaecati soluta esse in consectetur
                  perferendis? Ad praesentium ducimus magni obcaecati, delectus
                  ipsam incidunt?
                </p>
                <p className="mt-5">
                  <span className="fs-5">Play Everything</span> : Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Sit quam debitis
                  a id, alias cumque, amet obcaecati soluta esse in consectetur
                  perferendis? Ad praesentium ducimus magni obcaecati, delectus
                  ipsam incidunt?
                </p>
                <p className="mt-5">
                  <span className="fs-5">Play Everything</span> : Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Sit quam debitis
                  a id, alias cumque, amet obcaecati soluta esse in consectetur
                  perferendis? Ad praesentium ducimus magni obcaecati, delectus
                  ipsam incidunt?
                </p>
              </div>
              <div className="col-md-6">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/KUN5Uf9mObQ?si=4RZonETNArFP_Nn-"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}

export default Landing;
