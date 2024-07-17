import { commonAPI } from "./commonApi";
import { serverUrl } from "./serverUrl";

// API (from button) to upload (add) video (related to Add.jsx)
export const allVideoApi = async (reqBody) => {
  return await commonAPI("POST", `${serverUrl}/allVideos`, reqBody);
};

// API to get all allVideos
// There isn't any need to send request body (reqBody) for GET request.
export const getAllVideoApi = async () => {
  return await commonAPI("GET", `${serverUrl}/allVideos`, "");
};

// API to delete video
// Path parameter ${serverUrl}/allVideos${videoId}
export const deleteVideoApi = async (id) => {
  return await commonAPI("DELETE", `${serverUrl}/allVideos/${id}`, {});
};

// API to add video to watch history
export const addVideoHistory = async (reqBody) => {
  return await commonAPI("POST", `${serverUrl}/history`, reqBody);
};

// API to get all videos from watch history
export const getVideoHistoryApi = async () => {
  return await commonAPI("GET", `${serverUrl}/history`, "");
};

// API to delete a video from watch history
export const deleteVideoHistoryApi = async (id) => {
  return await commonAPI("DELETE", `${serverUrl}/history/${id}`, {});
};

// API to add video to category
export const addCategoryApi = async (reqBody) => {
  return await commonAPI("POST", `${serverUrl}/category`, reqBody);
};

// API to get all categories 
export const getAllCategory = async () => {
  return await commonAPI("GET", `${serverUrl}/category`);
};

// API to delete a category 
export const removeCategoryApi = async (id) => {
  return await commonAPI("DELETE", `${serverUrl}/category/${id}`, {});
};

// API to update category 
export const updateCategoryApi = async (id, reqBody) => {
  return await commonAPI("PUT", `${serverUrl}/category/${id}`, reqBody);
};

