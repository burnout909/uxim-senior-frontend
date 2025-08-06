// src/pages/projects/community/CommunityMain.tsx
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import ProjectTab from "../../components/ProjectTab";

const tabList = [
  {
    name: "OK! 6070 아파트택배(구월)",
    path: "/projects/community-detail/ok6070-apartment-1",
  },
  {
    name: "OK! 6070 아파트택배(논현)",
    path: "/projects/community-detail/ok6070-apartment-2",
  },
  {
    name: "청소년건강지킴이",
    path: "/projects/community-detail/student-health",
  },
  { name: "OK 6070 카드형", path: "/projects/community-detail/ok6070-card" },
  {
    name: "복지카페매니저(센터)",
    path: "/projects/community-detail/yettun-cafe-1",
  },
  {
    name: "복지카페매니저(소래점)",
    path: "/projects/community-detail/yettun-cafe-2",
  },
  { name: "공동작업장-1", path: "/projects/community-detail/sharing-job-1" },
  { name: "공동작업장-2", path: "/projects/community-detail/sharing-job-2" },
  { name: "도시락배송지원", path: "/projects/community-detail/jungdotab" },
  { name: "학교급식지원", path: "/projects/community-detail/school-meal" },
  { name: "ESG환경지킴이", path: "/projects/community-detail/our-esg" },
];

export default function CommunityMain() {
  const navigate = useNavigate();

  const handleTabClick = (tabName: string) => {
    const target = tabList.find((tab) => tab.name === tabName);
    if (target) {
      navigate(target.path);
    }
  };

  return (
    <div className="px-6 md:px-10 py-10 max-w-screen-lg mx-auto text-gray-800">
      <Title text="시장형 사업" />

      {/* 탭 버튼 */}
      <div className="mt-10">
        <ProjectTab
          tabs={tabList.map((t) => t.name)}
          activeTab={""}
          onTabClick={handleTabClick}
        />
      </div>

      {/* 사업 소개 */}
      <div className="mt-14">
        <h2 className="text-purple-700 text-xl md:text-2xl font-bold mb-4">
          시장형 사업이란?
        </h2>
        <div className="space-y-3 pl-2 text-[16px] md:text-[17px] leading-relaxed">
          <p>
            <strong className="font-semibold">사업의 정의</strong>: 노인에게
            적합한 업종 중 소규모 매장 및 전문 직종 사업단 등을 공동으로
            운영하여 일자리를 창출하는 사업. 일정기간 사업비 또는 참여자 인건비
            일부를 보충 지원하고, 추가 소득으로 연중 운영하는 노인 일자리
          </p>
          <p>
            <strong className="font-semibold">사업기간</strong>: 2025년 1월 ~
            12월 (연중)
          </p>
          <p>
            <strong className="font-semibold">사업대상</strong>: 인천시 남동구
            거주 만 60세 이상 사업특성 적합자
          </p>
          <p>
            <strong className="font-semibold">활동시간 / 활동비</strong>: 일
            2.5시간 / 시급 적용
            <br />
            <span className="text-sm text-gray-600 ml-2">
              ※ 수요처 계약에 따라 달라질 수 있음
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
