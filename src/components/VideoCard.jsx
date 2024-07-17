// import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { addVideoHistory, deleteVideoApi } from "../services/allApi";

function VideoCard({ video, setDeleteVideoStatus }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const caption = video?.caption;
    const url = video?.embedLink;
    const time = new Date();
    console.log(time);
    // Wed Jul 10 2024 14:39:47 GMT+0530 (India Standard Time)

    // Convert system time to a particular format
    const timeStamp = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(time);
    console.log(timeStamp);
    // 10/07/2024, 14:39:47

    const reqBody = {
      caption,
      url,
      timeStamp,
    };

    const result = await addVideoHistory(reqBody);
    console.log(result);
  };

  const handleDelete = async (id) => {
    const result = await deleteVideoApi(id);
    setDeleteVideoStatus(result.data);
    console.log(result);
  };

  //const videoDrag = (e, id) => {
  const videoDrag = (e, video) => {
    // console.log(typeof(id));
    console.log(video);
    // console.log(`Dragged video details is, ${JSON.stringify(video)}`);
    // When you use template literals (backticks) to embed an object within a string, JavaScript implicitly converts the object to a string using the object's toString method. For a plain JavaScript object, this method returns [object Object]. To log an object's details within a string, you can convert the object to a JSON string using JSON.stringify.
    // console.log(`Dragged video id is, ${id}`);
    e.dataTransfer.setData("videoDetails", JSON.stringify(video));
    // "videoId" is a key, its value is String(id)
  };

  return (
    <>
      {/* onDragStart={(e) => videoDrag(e, video?.id)} */}
      <Card
        style={{ width: "100%" }}
        draggable
        onDragStart={(e) => videoDrag(e, video)}
      >
        <Card.Img
          variant="top"
          onClick={handleShow}
          src={video?.imageUrl}
          height={"300px"}
        />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Text>{video?.caption}</Card.Text>
            <Button variant="danger">
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={() => handleDelete(video?.id)}
              />
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="514"
            src={`${video?.embedLink}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
          {/* <iframe
            width="100%"
            height="514"
            src="https://www.youtube.com/embed/9BmxfUOCVwM?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VideoCard;
