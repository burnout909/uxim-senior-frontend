import { Outlet } from "react-router-dom";
import { LeftNav } from "../components";
import { ROUTE } from "../routes/route";

const projectItems = [
  {
    label: "노인공익활동사업",
    path: ROUTE.projects.publicService,
    matchPaths: [
      ROUTE.projects.publicService,
      ROUTE.projects.publicDetail.seniorMeal,
      ROUTE.projects.publicDetail.facilitySafety,
      ROUTE.projects.publicDetail.elderGuard,
      ROUTE.projects.publicDetail.shelterManager,
      ROUTE.projects.publicDetail.schoolZone,
      ROUTE.projects.publicDetail.drugCollector,
      ROUTE.projects.publicDetail.localGuard,
      ROUTE.projects.publicDetail.gardenTeacher,
    ],
  },
  {
    label: "노인역량활용사업",
    path: ROUTE.projects.capacity,
    matchPaths: [
      ROUTE.projects.capacity,
      ROUTE.projects.capacityDetail.seniorAdmin,
      ROUTE.projects.capacityDetail.consumerMonitor,
      ROUTE.projects.capacityDetail.bookDelivery,
      ROUTE.projects.capacityDetail.mobileAdmin,
      ROUTE.projects.capacityDetail.financeSupport,
      ROUTE.projects.capacityDetail.foodbankManager,
      ROUTE.projects.capacityDetail.trafficSurveyor,
    ],
  },

  { label: "공동체사업단", path: ROUTE.projects.community },
  { label: "취업지원", path: ROUTE.projects.employment },
];

export default function ProjectsLayout() {
  return (
    <div className="flex w-full min-h-screen">
      <aside className="w-[181px] shrink-0 mr-[130px]">
        <LeftNav title="사업소개" items={projectItems} />
      </aside>
      <section className="flex-grow mt-[40px]">
        <Outlet />
      </section>
    </div>
  );
}
