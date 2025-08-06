import CapacityDetailLayout from "../../../layouts/CapacityDetailLayout";
import Image from "../../../assets/images/capacity/helper.png";

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

export default function SeniorAdmin() {
  return (
    <CapacityDetailLayout title="노인역량활동사업" tabList={tabList}>

      <div className="mt-10 flex justify-center">
        <img
          src={Image}
          alt="시니어공공행정복지도우미"
          className="w-[700px] rounded-lg shadow"
        />
      </div>
    </CapacityDetailLayout>
  );
}
