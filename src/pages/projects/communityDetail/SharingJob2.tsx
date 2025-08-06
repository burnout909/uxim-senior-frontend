import CommunityDetailLayout from "../../../layouts/CommunityDetailLayout";
import Image from "../../../assets/images/community/commonWork2.jpg";
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

export default function SharingJob2() {

  return (
    <CommunityDetailLayout title="공동체사업단" tabList={tabList}>

      <div className="mt-10 flex justify-center">
        <img
          src={Image}
          alt="공유냉장고사업 2"
          className="w-[700px] rounded-lg shadow"
        />
      </div>
    </CommunityDetailLayout>
  );
}
