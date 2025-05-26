import { Outlet } from "react-router-dom";
import { LeftNav } from "../components";
import { ROUTE } from "../routes/route";

const noticeItems = [
  { label: "공지사항", path: ROUTE.notice.announcement },
  { label: "일자리 소식", path: ROUTE.notice.jobInfo },
  { label: "생산품", path: ROUTE.notice.products },
  { label: "자유게시판", path: ROUTE.notice.free },
  { label: "직원게시판", path: ROUTE.notice.staff },
];

export default function NoticeLayout() {
  return (
    <div className="flex w-full">
      <aside className="w-[181px] shrink-0 mr-[130px]">
        <LeftNav title="소통공간" items={noticeItems} />
      </aside>
      <section className="flex-grow mt-[40px]">
        <Outlet />
      </section>
    </div>
  );
}
