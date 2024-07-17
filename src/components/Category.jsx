// import React from "react";
import VideoCard from "./VideoCard";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  addCategoryApi,
  getAllCategory,
  removeCategoryApi,
  updateCategoryApi,
} from "../services/allApi";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Category({dragOut, setDragOut}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [delStatus, setDelStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);

  const handleClose = () => {
    // handleClose: Closes the modal and resets the categoryName.
    setShow(false);
    setCategoryName("");
  };

  const handleShow = () => setShow(true);
  // handleShow: Opens the modal.

  console.log(categoryName);

  const handleCategoryAdd = async () => {
    // handleCategoryAdd: Adds a new category using the API and shows an alert if successful.
    if (categoryName) {
      const reqBody = {
        categoryName,
        allVideos: [],
      };
      const result = await addCategoryApi(reqBody);
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setCategoryName("");
        handleClose();
        alert("Category added successfully.");
        setAddStatus(true);
      }
    } else {
      alert("Please add a category name.");
    }
  };

  const getCategory = async () => {
    // getCategory: Fetches all categories from the backend.
    const result = await getAllCategory();
    setAllCategory(result.data);
  };
  console.log(allCategory);

  const handleDelete = async (id) => {
    // handleDelete: Deletes a category using the API.
    await removeCategoryApi(id);
    setDelStatus(true);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const VideoDrop = async (e, selectedCategory) => {
    // VideoDrop: Handles the drop event for videos (not fully implemented in the provided code).
    console.log("Category id is", selectedCategory);
    // const videoId = e.dataTransfer.getData("videoId");
    const vDetails = JSON.parse(e.dataTransfer.getData("videoDetails"));
    console.log(vDetails);

    // console.log(`id : ${videoId}`);
    // category - allVideo - videoDetails

    if (selectedCategory.allVideos.find((item) => item.id == vDetails.id)) {
      alert("Video is already in the category.");
    } else {
      selectedCategory.allVideos.push(vDetails);
      const result = await updateCategoryApi(
        selectedCategory.id,
        selectedCategory
      );
      console.log(result);
      alert("Video added successfully.");
      setUpdateStatus(true);
    }
    // console.log(`selectedCategory : ${selectedCategory}`);
  };

  const ondrag = (e, videoId, categoryDetails) => {
    console.log(videoId, categoryDetails);
    const dataShare = { videoId, categoryDetails };
    e.dataTransfer.setData("datashare", JSON.stringify(dataShare));
  };

  useEffect(() => {
    // useEffect: Fetches categories whenever addStatus changes. This ensures that the category list is updated after adding or deleting a category.
    setAddStatus(false);
    setDelStatus(false);
    setUpdateStatus(false);
    setDragOut(false);
    getCategory();
  }, [addStatus, delStatus, updateStatus, dragOut]);

  return (
    <>
      <h5 className="mt-5 mt-md-0">Category</h5>
      <button className="btn btn-warning w-100 mt-4" onClick={handleShow}>
        Add Category
      </button>
      {/* onDrop={(e) => VideoDrop(e, item.id)} */}
      {allCategory?.length > 0 ? (
        allCategory?.map((item) => (
          <div
            key={item.id}
            className="p-3 border rounded mt-4"
            droppable="true"
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => VideoDrop(e, item)}
          >
            <div className="d-flex justify-content-between">
              <p className="mb-4">{item.categoryName}</p>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(item.id)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
            {item?.allVideos?.length > 0
              ? item?.allVideos?.map((video) => (
                  <div
                    key={video?.id}
                    draggable
                    onDragStart={(e) => ondrag(e, video.id, item)}
                  >
                    <VideoCard video={video} isPresent={true} />
                  </div>
                ))
              : null}
          </div>
        ))
      ) : (
        <p className="text-danger mt-5">No Category Added Yet.</p>
      )}
      {/* <div className="p-3 border rounded mt-4">
        <p className="mb-4">Category Name</p>
        <VideoCard />
      </div> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="p-3 border rounded">
            <input
              type="text"
              className="form-control"
              placeholder="Category Name"
              onChangeCapture={(e) => {
                setCategoryName(e.target.value);
              }}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category;
