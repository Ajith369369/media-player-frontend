// import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { deleteVideoHistoryApi, getVideoHistoryApi } from "../services/allApi";

function Watchhistory() {
  const [allVideo, setAllVideo] = useState([]);
  const getVideoHistory = async () => {
    const result = await getVideoHistoryApi();
    console.log(`result : ${result}`);

    if (result.status >= 200 && result.status < 300) {
      setAllVideo(result.data);
    }
  };

  console.log(allVideo);

  const handleDeleteVideo = async (id) => {
    await deleteVideoHistoryApi(id);
    getVideoHistory();
  };

  useEffect(() => {
    getVideoHistory();
  }, []);

  return (
    <>
      <div className="row w-100 my-5">
        <div className="d-flex justify-content-between p-md-5">
          <h5>Watch History</h5>
          <h5>
            <Link
              to={"/home"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <FontAwesomeIcon icon={faHouse} className="me-2" />
              <span className="hide">Back Home</span>
            </Link>
          </h5>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Caption</th>
                <th>URL</th>
                <th>Timestamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allVideo?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.caption}</td>
                  <td>
                    <Link to={item.url} target="_blank">
                      {item.url}
                    </Link>
                  </td>
                  <td>{item.timeStamp}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteVideo(item.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          : <p className="text-danger fs-3">No Watch History</p>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
}

export default Watchhistory;