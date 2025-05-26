import { ROUTE } from "./route";
import Home from "../pages/Home";
import {
  Greeting,
  Introduction,
  Mission,
  History,
  Legal,
  Org,
  Location,
} from "../pages/about";

import {
  PublicService,
  Capacity,
  Community,
  Employment,
} from "../pages/projects";

import { Announcement, JobInfo, Products, Free, Staff } from "../pages/notice";

import { Photos, Videos, Links } from "../pages/resources";

// HomeLayout: Home 전용
export const homeLayoutRoutes = [{ path: ROUTE.home, element: <Home /> }];

export const aboutLayoutRoutes = [
  { path: ROUTE.about.greeting, element: <Greeting /> },
  { path: ROUTE.about.introduction, element: <Introduction /> },
  { path: ROUTE.about.mission, element: <Mission /> },
  { path: ROUTE.about.history, element: <History /> },
  { path: ROUTE.about.legal, element: <Legal /> },
  { path: ROUTE.about.org, element: <Org /> },
  { path: ROUTE.about.location, element: <Location /> },
];

export const projectsLayoutRoutes = [
  { path: ROUTE.projects.publicService, element: <PublicService /> },
  { path: ROUTE.projects.capacity, element: <Capacity /> },
  { path: ROUTE.projects.community, element: <Community /> },
  { path: ROUTE.projects.employment, element: <Employment /> },
];

export const noticeLayoutRoutes = [
  { path: ROUTE.notice.announcement, element: <Announcement /> },
  { path: ROUTE.notice.jobInfo, element: <JobInfo /> },
  { path: ROUTE.notice.products, element: <Products /> },
  { path: ROUTE.notice.free, element: <Free /> },
  { path: ROUTE.notice.staff, element: <Staff /> },
];

export const resourcesLayoutRoutes = [
  { path: ROUTE.resources.photos, element: <Photos /> },
  { path: ROUTE.resources.videos, element: <Videos /> },
  { path: ROUTE.resources.links, element: <Links /> },
];
