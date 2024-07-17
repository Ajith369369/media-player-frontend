import axios from "axios";

export const commonAPI = async(httpRequest, url, reqBody) => {
  // Configuration data
  const reqConfig = {
    method: httpRequest,

    // key = url, value = url, i.e., url: url,
    url,

    data: reqBody,
    headers: { "Content-Type": "application/json" },
  };

  return await axios(reqConfig)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });

  /* return axios(reqConfig)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    }); */
};


// commonApi.js

/* const API_BASE_URL = 'http://localhost:3000';  // Base URL of your backend server

export const getAllVideos = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/allVideos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})  // Add the necessary body content
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching videos:', error);
        throw error;
    }
};
 */