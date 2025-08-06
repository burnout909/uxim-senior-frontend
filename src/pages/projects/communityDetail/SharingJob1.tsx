import Title from "../../../components/Title";
import Image from "../../../assets/images/community/사랑나눔일터-공동작업장1-001.png"; // ✅ 이미지 경로 맞춰서 수정
import { useLocation, useNavigate } from "react-router-dom";
import ProjectTab from "../../../components/ProjectTab";
import { ROUTE } from "../../../routes/route";

const tabList = [
  {
    name: "OK! 6070 아파트택배(구월)",
    path: ROUTE.projects.communityDetail.ok6070Apartment1,
  },
  {
    name: "OK! 6070 아파트택배(논현)",
    path: ROUTE.projects.communityDetail.ok6070Apartment2,
  },
  {
    name: "학생안전걷기프로젝트",
    path: ROUTE.projects.communityDetail.studentHealth,
  },
  {
    name: "시니어행복카드배송",
    path: ROUTE.projects.communityDetail.ok6070Card,
  },
  {
    name: "복지카페매니저(센터)",
    path: ROUTE.projects.communityDetail.yettunCafe1,
  },
  {
    name: "복지카페매니저(소래점)",
    path: ROUTE.projects.communityDetail.yettunCafe2,
  },
  {
    name: "공동작업장-1",
    path: ROUTE.projects.communityDetail.sharingJob1,
  },
  {
    name: "공동작업장-2",
    path: ROUTE.projects.communityDetail.sharingJob2,
  },
  {
    name: "도시락배송지원",
    path: ROUTE.projects.communityDetail.jungdotab,
  },
  { name: "학교급식지원", path: ROUTE.projects.communityDetail.schoolMeal },
  { name: "ESG환경지킴이", path: ROUTE.projects.communityDetail.ourESG },
];

export default function SharingJob1() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (tabName: string) => {
    const target = tabList.find((tab) => tab.name === tabName);
    if (target) navigate(target.path);
  };

  const activeTab =
    tabList.find((tab) => tab.path === location.pathname)?.name || "";

  return (
    <div className="max-w-screen-md mx-auto px-4">
      <Title text="공동작업장-1" />
      <div className="mt-10">
        <ProjectTab
          tabs={tabList.map((t) => t.name)}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
      </div>
      <div className="mt-10">
        <img
          src={Image}
          alt="공유냉장고사업 1"
          className="w-[700px] rounded-lg shadow"
        />
      </div>
    </div>
  );
}
