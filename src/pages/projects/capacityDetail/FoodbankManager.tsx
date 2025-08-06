import Title from "../../../components/Title";
import Image from "../../../assets/images/capacity/food.png";
import { useNavigate, useLocation } from "react-router-dom";
import ProjectTab from "../../../components/ProjectTab";

const tabList = [
  {
    name: "시니어공공행정복지도우미",
    path: "/projects/capacity-detail/senior-guide",
  },
  {
    name: "시니어소비피해예방모니터요원",
    path: "/projects/capacity-detail/consumer-monitor",
  },
  { name: "책사랑딜리버리리", path: "/projects/capacity-detail/book-delivery" },
  {
    name: "찾아가는경로당행정도우미",
    path: "/projects/capacity-detail/mobile-senior-admin",
  },
  {
    name: "시니어금융업무지원사업",
    path: "/projects/capacity-detail/financial-support",
  },
  {
    name: "시니어푸드뱅크매니저",
    path: "/projects/capacity-detail/food-bank-manager",
  },
  {
    name: "시니어교통안전데이터조사단",
    path: "/projects/capacity-detail/traffic-surveyor",
  },
];

export default function FoodbankManager() {
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
      <Title text="시니어푸드뱅크매니저" />
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
          alt="시니어푸드뱅크매니저"
          className="w-[700px] rounded-lg shadow"
        />
      </div>
    </div>
  );
}
