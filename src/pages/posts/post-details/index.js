import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPostById } from "../../../services/api";
import Loading from "../../../components/loading";

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
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed text-justify">
          {post.body}
        </p>
      </div>
    </div>
  );
};

export default PostDetailsPage;
