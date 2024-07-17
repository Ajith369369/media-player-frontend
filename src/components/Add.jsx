import { faCloudArrowUp, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { allVideoApi } from "../services/allApi";

function Add({setAddVideoStatus}) {
  const [show, setShow] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imageUrl: "",
    embedLink: "",
  });
  console.log(videoDetails);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getLink = (e) => {
    const link = e.target.value;
    console.log(link);

    // Types of YouTube Links
    // 1) https://www.youtube.com/watch?v=T9bQCAWahLk                   - URL
    // 2) https://youtu.be/T9bQCAWahLk?si=hsskSrcG8QTRYcMs              - Share
    // 3) https://www.youtube.com/embed/T9bQCAWahLk?si=hsskSrcG8QTRYcMs - Embed

    // T9bQCAWahLk - YouTube ID - 11 characters
    // YouTube ID is last 11 characters.
    if (link.startsWith("https://youtu.be/")) {
      // https://youtu.be/T9bQCAWahLk?si=hsskSrcG8QTRYcMs - Share
      // https://youtu.be/T - [0 -> 17] - [17 + 11]
      // const emlink = link.slice(17, 28)
      // console.log(emlink);
      setVideoDetails({
        ...videoDetails,
        embedLink: `https://www.youtube.com/embed/${link.slice(17, 28)}`
      });
    } else {
      // https://www.youtube.com/watch?v=T9bQCAWahLk - URL
      // const emlink = link.slice(-11);
      // console.log(emlink);
      setVideoDetails({
        ...videoDetails,
        embedLink: `https://www.youtube.com/embed/${link.slice(-11)}`
      });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const result = await allVideoApi(videoDetails);
    console.log(result);
    if (result.status >=200 && result.status <300) {
      alert('Video added successfully.')
      handleClose()
      setAddVideoStatus(result.data)
    } else {
      alert('Something went wrong.')
      console.log(result);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload new video</h5>
        <button className="btn fs-5" onClick={handleShow}>
          <FontAwesomeIcon icon={faCloudArrowUp} />
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="text-warning">
            <FontAwesomeIcon icon={faFilm} className="me-2" />
            Upload Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className="border p-3 rounded">
            <div className="mb-3">
              <input
                type="text"
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, caption: e.target.value })
                }
                className="form-control"
                placeholder="Video Caption"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, imageUrl: e.target.value })
                }
                className="form-control"
                placeholder="Video Image"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                onChange={(e) => getLink(e)}
                className="form-control"
                placeholder="Video URL"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
