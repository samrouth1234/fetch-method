const BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 * Fetches all posts from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of posts.
 */
const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

/**
 * Creates a new post.
 * @param {object} postData - The data for the new post (e.g., { title, body, userId }).
 * @returns {Promise<object>} A promise that resolves to the newly created post.
 */
const createPost = async (postData) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

/**
 * Updates an existing post.
 * @param {number} id - The ID of the post to update.
 * @param {object} updatedData - The data to update the post with (e.g., { title, body }).
 * @returns {Promise<object>} A promise that resolves to the updated post.
 */

const updatePost = async (id, updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};

/**
 * Deletes a post.
 * @param {number} id - The ID of the post to delete.
 * @returns {Promise<void>} A promise that resolves when the post is deleted.
 */

const deletePost = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};

export { fetchPosts, createPost, updatePost, deletePost };
