import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import CardPost from "../../components/CardPost";
import FormCreatePost from "../../components/FormCreatePost";
import Loading from "../../components/Loading";
import {
  createPost,
  deletePost,
  fetchPostById,
  updatePost,
  fetchPosts
} from "../../utils/api-fetch";

export const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [isFormCreatePostModalOpen, setIsFormCreatePostModalOpen] =
    useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [openModalViewQuickDetails, setOpenModalViewQuickDetails] =
    useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
  };

  const toggleFormModal = () => {
    setIsFormCreatePostModalOpen((prev) => !prev);
  };

  const handleCreateNewPost = () => {
    setIsEditing(false);
    setSelectedPost(null);
    toggleFormModal();
  };

  const handleEditPost = async (id) => {
    try {
      const postToEdit = await fetchPostById(id);
      setSelectedPost(postToEdit);
      setIsEditing(true);
      toggleFormModal();
    } catch (error) {
      console.error("Failed to fetch post for editing:", error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const handleSubmitForm = async (formData) => {
    if (isEditing && selectedPost) {
      try {
        const updatedPost = await updatePost(selectedPost.id, formData);
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === updatedPost.id ? updatedPost : post,
          ),
        );
      } catch (error) {
        console.error("Failed to update post:", error);
      }
    } else {
      try {
        const newPost = await createPost(formData);
        setPosts((prevPosts) => [newPost, ...prevPosts]);
      } catch (error) {
        console.error("Failed to create post:", error);
      }
    }
    toggleFormModal();
  };

  const handleViewQuickDetails = async (id) => {
    try {
      const postDetails = await fetchPostById(id);
      setSelectedPost(postDetails);
      setOpenModalViewQuickDetails(true);
    } catch (error) {
      console.error("Failed to fetch post details:", error);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/posts/${id}`);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="py-5 text-center text-3xl font-semibold">
          Welcome to STM
        </h2>
        <section>
          <div className="mb-5 flex justify-end">
            <button
              onClick={handleCreateNewPost}
              className="rounded bg-sky-500 px-4 py-2 font-bold text-white hover:bg-sky-700"
            >
              Create New Post
            </button>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((item) => (
              <CardPost
                key={item.id}
                title={item.title.slice(0, 20)}
                body={item.body.slice(0, 100)}
                isDropdownOpen={openDropdownId === item.id}
                toggleDropdown={() => toggleDropdown(item.id)}
                onDelete={() => handleDeletePost(item.id)}
                onEdit={() => handleEditPost(item.id)}
                onViewDetails={() => {
                  handleViewDetails(item.id);
                }}
                onViewQuickDetails={() => handleViewQuickDetails(item.id)}
              />
            ))}
          </div>
        </section>

        {isFormCreatePostModalOpen && (
          <FormCreatePost
            isEditing={isEditing}
            initialData={selectedPost}
            onClose={toggleFormModal}
            onSubmit={handleSubmitForm}
          />
        )}

        {/* View Quick Details Post */}
        {openModalViewQuickDetails && (
          <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-1/3 rounded-lg bg-white p-6">
              <h2 className="mb-4 text-2xl">Post Details</h2>
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-bold">{selectedPost.title}</h3>
                <p className="text-justify capitalize leading-relaxed text-gray-700">
                  {selectedPost.body}
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpenModalViewQuickDetails(false)}
                  className="rounded bg-sky-500 px-4 py-2 font-bold text-white hover:bg-sky-700"
                >
                  Close
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
