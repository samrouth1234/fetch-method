import { useEffect, useState } from "react";

const FormCreatePost = ({ isEditing, initialData, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setBody(initialData.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
  };

  return (
    <section className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-2xl mb-4">
          {isEditing ? "Edit Post" : "Create New Post"}
        </h2>
        <form onSubmit={handleSubmit}>
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
              onClick={onClose}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
            >
              {isEditing ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormCreatePost;
