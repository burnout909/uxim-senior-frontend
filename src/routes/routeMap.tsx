import { ROUTE } from "./route";
import Home from "../pages/Home";
import Admin from "../pages/admin/Admin"; // ✅ 올바른 이름
import LoginPage from "../pages/admin/LoginPage"; // ✅ 관리자 로그인 페이지

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

  // 🔹 공익활동 상세
  SeniorMeal,
  FacilitySafety,
  ElderGuard,
  ShelterManager,
  SchoolZone,
  DrugCollector,
  LocalGuard,
  GardenTeacher,

  // 🔹 역량활용 상세
  SeniorAdmin,
  ConsumerMonitor,
  BookDelivery,
  MobileAdminGuide,
  FinanceSupport,
  FoodbankManager,
  TrafficSurveyor,

  // 🔹 공동체 상세
  OK6070Apartment1,
  OK6070Apartment2,
  StudentHealth,
  OK6070Card,
  YettunCafe1,
  YettunCafe2,
  SharingJob1,
  SharingJob2,
  Jungdotab,
  SchoolMeal,
  OurESG,
} from "../pages/projects";

import { Announcement, JobInfo, Products, Free, Staff } from "../pages/notice";

import { Photos, Videos, Links } from "../pages/resources";

// ✅ HomeLayout: 홈 + 관리자 관련
export const homeLayoutRoutes = [
  { path: ROUTE.home, element: <Home /> },
  { path: ROUTE.admin, element: <Admin /> }, // 관리자 글 작성 페이지
  { path: ROUTE.adminLogin, element: <LoginPage /> }, // 관리자 로그인 페이지
];

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

  // ✅ 추가된 상세 페이지들
  { path: ROUTE.projects.publicDetail.seniorMeal, element: <SeniorMeal /> },
  {
    path: ROUTE.projects.publicDetail.facilitySafety,
    element: <FacilitySafety />,
  },
  { path: ROUTE.projects.publicDetail.elderGuard, element: <ElderGuard /> },
  {
    path: ROUTE.projects.publicDetail.shelterManager,
    element: <ShelterManager />,
  },
  { path: ROUTE.projects.publicDetail.schoolZone, element: <SchoolZone /> },
  {
    path: ROUTE.projects.publicDetail.drugCollector,
    element: <DrugCollector />,
  },
  { path: ROUTE.projects.publicDetail.localGuard, element: <LocalGuard /> },
  {
    path: ROUTE.projects.publicDetail.gardenTeacher,
    element: <GardenTeacher />,
  },

  // capacity 상세
  {
    path: ROUTE.projects.capacityDetail.seniorAdmin,
    element: <SeniorAdmin />,
  },
  {
    path: ROUTE.projects.capacityDetail.consumerMonitor,
    element: <ConsumerMonitor />,
  },
  {
    path: ROUTE.projects.capacityDetail.bookDelivery,
    element: <BookDelivery />,
  },
  {
    path: ROUTE.projects.capacityDetail.mobileAdmin,
    element: <MobileAdminGuide />,
  },
  {
    path: ROUTE.projects.capacityDetail.financeSupport,
    element: <FinanceSupport />,
  },
  {
    path: ROUTE.projects.capacityDetail.foodbankManager,
    element: <FoodbankManager />,
  },
  {
    path: ROUTE.projects.capacityDetail.trafficSurveyor,
    element: <TrafficSurveyor />,
  },

  // ✅ 공동체사업단 상세
  {
    path: ROUTE.projects.communityDetail.ok6070Apartment1,
    element: <OK6070Apartment1 />,
  },
  {
    path: ROUTE.projects.communityDetail.ok6070Apartment2,
    element: <OK6070Apartment2 />,
  },
  {
    path: ROUTE.projects.communityDetail.studentHealth,
    element: <StudentHealth />,
  },
  {
    path: ROUTE.projects.communityDetail.ok6070Card,
    element: <OK6070Card />,
  },
  {
    path: ROUTE.projects.communityDetail.yettunCafe1,
    element: <YettunCafe1 />,
  },
  {
    path: ROUTE.projects.communityDetail.yettunCafe2,
    element: <YettunCafe2 />,
  },
  {
    path: ROUTE.projects.communityDetail.sharingJob1,
    element: <SharingJob1 />,
  },
  {
    path: ROUTE.projects.communityDetail.sharingJob2,
    element: <SharingJob2 />,
  },
  { path: ROUTE.projects.communityDetail.jungdotab, element: <Jungdotab /> },
  {
    path: ROUTE.projects.communityDetail.schoolMeal,
    element: <SchoolMeal />,
  },
  { path: ROUTE.projects.communityDetail.ourESG, element: <OurESG /> },
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
