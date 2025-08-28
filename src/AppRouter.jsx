import { Route, Routes } from "react-router-dom";

import {
  HOME_PAGE,
  POST_DETAIL_PAGE,
  POST_PAGE,
  SERVICE_PAGE,
} from "./constants/routes";
import { AppLayout } from "./layouts/AppLayout";
import NotFoundPage from "./pages/error/not-found";
import { LeadingPage } from "./pages/leading";
import { PostPage } from "./pages/posts";
import PostDetailsPage from "./pages/posts/post-details";
import { ServicePage } from "./pages/services";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={HOME_PAGE} element={<LeadingPage />} />
        <Route path={POST_PAGE} element={<PostPage />} />
        <Route path={`${POST_DETAIL_PAGE}/:id`} element={<PostDetailsPage />} />
        <Route path={SERVICE_PAGE} element={<ServicePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
