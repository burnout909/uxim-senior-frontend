import { useState } from "react";
import SidebarNav from "../components/SidebarNav";
import Pagination from "../components/Pagination";

const noticeNavItems = [
  { key: "notice", label: "공지사항" },
  { key: "news", label: "일자리 소식" },
  { key: "produce", label: "생산품" },
  { key: "free", label: "자유게시판" },
  { key: "employ", label: "직원게시판" },
];

function NoticePage() {
  const [current, setCurrent] = useState("notice");

  return (
    <div className="max-w-[1440px] mx-auto flex min-h-[600px] px-6 py-12 gap-8">
      <SidebarNav
        current={current}
        onSelect={setCurrent}
        title="소통공간"
        items={noticeNavItems}
      />

      <section className="flex-1 bg-white border rounded shadow-sm p-6 text-gray-700">
        {current === "notice" && <NoticeContent />}
        {current === "news" && <NewsContent />}
        {current === "produce" && <ProduceContent />}
        {current === "free" && <FreeContent />}
        {current === "employ" && <EmployContent />}
      </section>
    </div>
  );
}


function NoticeContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 23;

  return (
    <div>
      {/* ...공지사항 리스트 등 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

function NewsContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">시니어클럽소개</h2>
      <p>남동시니어클럽은 어르신의 사회참여와 일자리 창출을 위해 설립된 기관입니다.</p>

    </div>
  );
}

function ProduceContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">미션과 비전</h2>
      <p>미션: 존엄한 노년의 삶 실현 / 비전: 함께하는 시니어 행복한 지역사회</p>
    </div>
  );
}

function FreeContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">기관연혁</h2>
      <p>2010년 설립 이후 다양한 노인 일자리와 복지사업을 운영해왔습니다.</p>
    </div>
  );
}

function EmployContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">법인소개</h2>
      <p>사회복지법인 남동복지재단은 지역사회 공헌을 위한 다양한 사업을 진행하고 있습니다.</p>
    </div>
  );
}

      

export default NoticePage;
