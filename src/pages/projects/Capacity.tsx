// src/pages/projects/capacity/CapacityMain.tsx
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import ProjectTab from "../../components/ProjectTab";

const tabList = [
  { name: "시니어행정도우미", path: "/projects/capacity-detail/senior-guide" },
  { name: "소비자감시단", path: "/projects/capacity-detail/consumer-monitor" },
  { name: "북딜리버리", path: "/projects/capacity-detail/book-delivery" },
  { name: "모바일행정도우미", path: "/projects/capacity-detail/mobile-senior-admin" },
  { name: "금융생활지원단", path: "/projects/capacity-detail/financial-support" },
  {
    name: "푸드뱅크관리사",
    path: "/projects/capacity-detail/food-bank-manager",
  },
  {
    name: "교통안전조사원",
    path: "/projects/capacity-detail/traffic-surveyor",
  },
];

export default function CapacityMain() {
  const navigate = useNavigate();

  const handleTabClick = (tabName: string) => {
    const target = tabList.find((tab) => tab.name === tabName);
    if (target) {
      navigate(target.path);
    }
  };

  return (
    <div className="px-6 md:px-10 py-10 max-w-screen-lg mx-auto text-gray-800">
      <Title text="사회서비스형 사업" />

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
          사회서비스형 사업이란?
        </h2>
        <div className="space-y-3 pl-2 text-[16px] md:text-[17px] leading-relaxed">
          <p>
            <strong className="font-semibold">사업의 정의</strong>: 노인의
            경력과 활동역량을 활용하여 사회적 도움이 필요한 영역(지역사회 돌봄,
            안전 등)에 서비스를 제공하는 일자리
          </p>
          <p>
            <strong className="font-semibold">사업기간</strong>: 2025년 1월 ~
            10월 (10개월)
          </p>
          <p>
            <strong className="font-semibold">사업대상</strong>: 인천시 남동구
            거주 만 65세 이상 사업특성 적합자
            <br />
            <span className="text-sm text-gray-600 ml-2">
              ※ 일부 유형 만 60세 이상 참여 가능
            </span>
          </p>
          <p>
            <strong className="font-semibold">활동시간 / 활동비</strong>: 주
            소정근로시간 15시간 (월 60시간, 4주)
            <br />/ 만근 시 761,040원
          </p>
        </div>
      </div>
    </div>
  );
}
