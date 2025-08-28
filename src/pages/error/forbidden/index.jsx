const ForbiddenPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold">403 - Forbidden</h2>
      <p className="mt-2">
        You do not have permission to access this resource.
      </p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">
        Go back to home
      </a>
    </div>
  );
};

export default ForbiddenPage;
