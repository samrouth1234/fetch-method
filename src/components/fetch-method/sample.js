/**
 *
 * @returns {Promise} - Promise resolving to fetched data or rejecting with an error
 * Fetches posts from a placeholder API and handles errors
 *
 */
const getPost = () => {
  const data = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched data:", data);
      return data;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    });
  return data;
};

// Way 2 using async/await
const getPostUsingAsyncAwait = async () => {
  try {
    const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!respone.ok) {
      throw new Error("Something went wrong");
    }
    const data = await respone.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export { getPost, getPostUsingAsyncAwait };
