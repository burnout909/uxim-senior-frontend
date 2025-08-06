import Title from "../../../components/Title";
import TeacherImage from "../../../assets/images/public/teacher.png";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ useLocation도 import
import ProjectTab from "../../../components/ProjectTab";

// ✅ tabList가 누락됨 → 컴포넌트 바깥에 선언해야 함
const tabList = [
  { name: "경로당급식지원", path: "/projects/public-detail/senior-meal" },
  {
    name: "경로당시설안전관리요원",
    path: "/projects/public-detail/facility-safety",
  },
  { name: "노인시설지킴이", path: "/projects/public-detail/elder-guard" },
  { name: "동네쉼터관리사", path: "/projects/public-detail/shelter-manager" },
  { name: "스쿨존안전지킴이", path: "/projects/public-detail/school-zone" },
  {
    name: "시니어폐의약품수거",
    path: "/projects/public-detail/drug-collector",
  },
  { name: "우리동네안전지킴이", path: "/projects/public-detail/local-guard" },
  { name: "은빛정원선생님", path: "/projects/public-detail/garden-teacher" },
];

export default function GardenTeacher() {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ 현재 경로 가져오기

  const handleTabClick = (tabName: string) => {
    const target = tabList.find((tab) => tab.name === tabName);
    if (target) {
      navigate(target.path);
    }
  };

  const activeTab =
    tabList.find((tab) => tab.path === location.pathname)?.name || "";

  return (
    <div className="max-w-screen-md mx-auto px-4">
      <Title text="은빛정원선생님" />

      {/* 탭 버튼 */}
      <div className="mt-10">
        <ProjectTab
          tabs={tabList.map((t) => t.name)}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
      </div>

      {/* 이미지 영역 */}
      <div className="mt-10">
        <img
          src={TeacherImage}
          alt="은빛정원선생님"
          className="w-[700px] rounded-lg shadow"
        />
      </div>
    </div>
  );
}
