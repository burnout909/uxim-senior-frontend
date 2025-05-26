import { Outlet } from "react-router-dom";
import { LeftNav } from "../components";
import { ROUTE } from "../routes/route";

const aboutItems = [
  { label: "인사말", path: ROUTE.about.greeting },
  { label: "시니어클럽소개", path: ROUTE.about.introduction },
  { label: "미션과 비전", path: ROUTE.about.mission },
  { label: "기관연혁", path: ROUTE.about.history },
  { label: "법인 소개", path: ROUTE.about.legal },
  { label: "기관 조직도", path: ROUTE.about.org },
  { label: "오시는 길", path: ROUTE.about.location },
];

export default function AboutLayout() {
  return (
    <div className="flex w-full">
      <aside className="w-[181px] shrink-0 mr-[130px]">
        <LeftNav title="기관소개" items={aboutItems} />
      </aside>
      <section className="flex-grow mt-[40px]">
        <Outlet />
      </section>
    </div>
  );
}
