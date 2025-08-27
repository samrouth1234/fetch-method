import CardPost from "./components/card-post";
import { useEffect, useState } from "react";
import Loading from "./components/loading";
import { createPost, fetchPosts } from "./components/fetch-method/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [openModalCreatePost, setOpenModalCreatePost] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
  };

  const toggleModalCreatePost = () => {
    setOpenModalCreatePost((prev) => !prev);
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
    };

    try {
      const createNewPost = await createPost(newPost);
      setPosts((prevPosts) => [createNewPost, ...prevPosts]);
      setTitle("");
      setBody("");
      setOpenModalCreatePost(false);
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div className="container mx-auto">
      <h2 className=" text-center text-3xl font-semibold py-5">
        Welcome to STM
      </h2>
      <section>
        <div className="flex justify-end mb-5">
          <button
            onClick={toggleModalCreatePost}
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
          >
            Create New Post
          </button>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-4 gap-3">
          {posts.map((item) => (
            <CardPost
              key={item.id}
              title={item.title.slice(0, 20) + "..."}
              body={item.body.slice(0, 100) + "..."}
              isDropdownOpen={openDropdownId === item.id}
              toggleDropdown={() => toggleDropdown(item.id)}
            />
          ))}
        </div>
      </section>

      {openModalCreatePost && (
        <section className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-2xl mb-4">Create New Post</h2>
            <form onSubmit={handleCreatePost}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Post Title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Body
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={4}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Post Body"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleModalCreatePost}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
