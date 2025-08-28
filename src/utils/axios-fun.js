import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 * Fetch posts from the API
 * @returns {Promise<Object[]>} - A promise that resolves to an array of posts
 */

const fetchPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    if (response.status !== 200) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
};

/**
 * Create a new post
 * @param {Object} postData - The data for the new post
 * @returns {Promise<Object>} - A promise that resolves to the created post
 */

const createPost = async (postData) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, postData);
    if (response.status !== 201) {
      throw new Error(`Failed to create post: ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.error("Failed to create post:", error);
  }
};

/**
 * Update an existing post
 * @param {number} id - The ID of the post to update
 * @param {Object} postData - The updated data for the post
 * @returns {Promise<Object>} - A promise that resolves to the updated post
 */

const updatePost = async (id, postData) => {
  try {
    const response = await axios.put(`${BASE_URL}/posts/${id}`, postData);
    if (response.status !== 200) {
      throw new Error(`Failed to update post: ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.error("Failed to update post:", error);
  }
};

/**
 * Deleted a post by ID
 * @param {number} id - The ID of the post to delete
 * @returns {Promise<void>} - A promise that resolves when the post is deleted
 */

const deletePost = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${id}`);
    if (response.status !== 200) {
      throw new Error(`Failed to delete post: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Failed to delete post:", error);
  }
};

export { fetchPosts, createPost, updatePost, deletePost };
