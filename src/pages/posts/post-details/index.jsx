import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Loading from "../../../components/Loading";
import { fetchPostById } from "../../../utils/api";

const PostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPostDetails = async () => {
      try {
        const postData = await fetchPostById(id);
        setPost(postData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getPostDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading post details: {error.message}</div>;
  }

  if (!post) {
    return <div>No post found.</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
        <p className="text-justify leading-relaxed text-gray-700">
          {post.body}
        </p>
      </div>
    </div>
  );
};

export default PostDetailsPage;
