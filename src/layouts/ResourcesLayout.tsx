import { Outlet } from "react-router-dom";
import { LeftNav } from "../components";
import { ROUTE } from "../routes/route";

const resourceItems = [
  { label: "사진자료실", path: ROUTE.resources.photos },
  { label: "영상자료실", path: ROUTE.resources.videos },
  { label: "관련 사이트", path: ROUTE.resources.links },
];

export default function ResourcesLayout() {
  return (
    <div className="flex w-full min-h-screen">
      <aside className="w-[181px] shrink-0 mr-[130px]">
        <LeftNav title="자료실" items={resourceItems} />
      </aside>
      <section className="flex-grow mt-[40px]">
        <Outlet />
      </section>
    </div>
  );
}
