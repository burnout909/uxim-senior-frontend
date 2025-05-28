import { Navigate, Route, Routes } from "react-router-dom";
import {
  HomeLayout,
  ContentLayout,
  AboutLayout,
  ProjectsLayout,
  NoticeLayout,
} from "./layouts";
import {
  homeLayoutRoutes,
  aboutLayoutRoutes,
  resourcesLayoutRoutes,
  projectsLayoutRoutes,
  noticeLayoutRoutes,
} from "./routes/routeMap";
import ResourcesLayout from "./layouts/ResourcesLayout";
import { ROUTE } from "./routes/route";

function App() {
  return (
    <Routes>
      {/* 초기 접속 시 /home으로 리다이렉트*/}
      <Route path="/" element={<Navigate to={ROUTE.home} replace />} />
      {/* 홈 전용 레이아웃 */}
      <Route element={<HomeLayout />}>
        {homeLayoutRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>

      {/* 나머지 콘텐츠용 레이아웃 */}
      <Route element={<ContentLayout />}>
        <Route element={<AboutLayout />}>
          {aboutLayoutRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>

        <Route element={<ProjectsLayout />}>
          {projectsLayoutRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>

        <Route element={<NoticeLayout />}>
          {noticeLayoutRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>

        <Route element={<ResourcesLayout />}>
          {resourcesLayoutRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
