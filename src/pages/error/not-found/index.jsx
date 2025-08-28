const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-6xl font-bold text-red-500">404</h1>
      <p className="mb-8 text-2xl text-gray-700">Page Not Found</p>
      <a
        href="/"
        className="rounded bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
