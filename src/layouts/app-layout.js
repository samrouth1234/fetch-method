import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col position-relative ">
      <div className="relative flex flex-grow flex-col sm:bg-white">
        <Outlet />
      </div>
    </div>
  );
};
