import { Route, Routes } from "react-router-dom";
import { HOME_PAGE, POST_DETAIL_PAGE, POST_PAGE } from "./constants/routes";
import LeadingPage from "./pages/leading";
import PostPage from "./pages/posts";
import NotFoundPage from "./pages/erorr/not-found";
import { AppLayout } from "./layouts/app-layout";
import PostDetailsPage from "./pages/posts/post-details";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={HOME_PAGE} element={<LeadingPage />} />
        <Route path={POST_PAGE} element={<PostPage />} />
        <Route path={`${POST_DETAIL_PAGE}/:id`} element={<PostDetailsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
