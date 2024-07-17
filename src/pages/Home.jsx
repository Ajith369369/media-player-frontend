// import React from "react";
import Add from "../components/Add";
import View from "../components/View";
import Category from "../components/Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [addVideoStatus, setAddVideoStatus] = useState([]);
  const [dragOut, setDragOut] = useState(false);

  return (
    <>
      <div className="d-flex p-5">
        <Add setAddVideoStatus={setAddVideoStatus} />
        <h5 className="ms-auto">
          <Link
            to={"/watchhistory"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span className="hide pe-3">Watch History</span>
            <FontAwesomeIcon icon={faClockRotateLeft} />
          </Link>
        </h5>
      </div>
      <div className="row w-100 p-4">
        <div className="col-md-10">
          <View addVideoStatus={addVideoStatus} setDragOut={setDragOut}/>
        </div>
        <div className="col-md-2 p-4">
          <Category setDragOut={setDragOut} dragOut={dragOut}/>
        </div>
      </div>
    </>
  );
}

export default Home;
