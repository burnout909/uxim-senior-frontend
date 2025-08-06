import { ReactNode } from "react";
import Title from "../components/Title";
import ProjectTab from "../components/ProjectTab";
import { useNavigate, useLocation } from "react-router-dom";

interface ProjectDetailLayoutProps {
  title: string; // 상단 고정 제목
  tabList: { name: string; path: string }[]; // 탭 목록
  children: ReactNode; // 하위 페이지 개별 컨텐츠
}

export default function ProjectDetailLayout({
  title,
  tabList,
  children,
}: ProjectDetailLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (tabName: string) => {
    const target = tabList.find((tab) => tab.name === tabName);
    if (target) navigate(target.path);
  };

  const activeTab =
    tabList.find((tab) => tab.path === location.pathname)?.name || "";

  return (
    <div className="px-6 md:px-10 py-10 max-w-screen-lg mx-auto text-gray-800">
      {/* 상단 제목 */}
      <Title text={title} />

      {/* 탭 버튼 */}
      <div className="mt-10">
        <ProjectTab
          tabs={tabList.map((t) => t.name)}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
      </div>

      {/* 하위 컨텐츠 */}
      <div className="mt-10">{children}</div>
    </div>
  );
}