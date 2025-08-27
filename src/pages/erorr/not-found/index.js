const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go to Home
      </a>
    </div>
  );
};


export default NotFoundPage;