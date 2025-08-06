import Title from "../../../components/Title";
import Image from "../../../assets/images/capacity/helper.png";
import { useNavigate, useLocation } from "react-router-dom";
import ProjectTab from "../../../components/ProjectTab";
import { ROUTE } from "../../../routes/route";

const tabList = [
  {
    name: "시니어공공행정복지도우미",
    path: ROUTE.projects.capacityDetail.seniorAdmin,
  },
  {
    name: "시니어소비피해예방모니터요원",
    path: ROUTE.projects.capacityDetail.consumerMonitor,
  },
  {
    name: "책사랑딜리버리",
    path: ROUTE.projects.capacityDetail.bookDelivery,
  },
  {
    name: "찾아가는경로당행정도우미",
    path: ROUTE.projects.capacityDetail.mobileAdmin,
  },
  {
    name: "시니어금융업무지원사업",
    path: ROUTE.projects.capacityDetail.financeSupport,
  },
  {
    name: "시니어푸드뱅크매니저",
    path: ROUTE.projects.capacityDetail.foodbankManager,
  },
  {
    name: "시니어교통안전데이터조사단",
    path: ROUTE.projects.capacityDetail.trafficSurveyor,
  },
];

export default function SeniorAdmin() {
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
      <Title text="시니어공공행정복지도우미" />
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
          alt="시니어공공행정복지도우미"
          className="w-[700px] rounded-lg shadow"
        />
      </div>
    </div>
  );
}
