import ProjectDetailLayout from "../../../layouts/ProjectDetailLayout";
import MealImage from "../../../assets/images/public/meal.png";

const tabList = [
  { name: "경로당급식지원", path: "/projects/public-detail/senior-meal" },
  { name: "경로당시설안전관리요원", path: "/projects/public-detail/facility-safety" },
  { name: "노인시설지킴이", path: "/projects/public-detail/elder-guard" },
  { name: "동네쉼터관리사", path: "/projects/public-detail/shelter-manager" },
  { name: "스쿨존안전지킴이", path: "/projects/public-detail/school-zone" },
  { name: "시니어폐의약품수거", path: "/projects/public-detail/drug-collector" },
  { name: "우리동네안전지킴이", path: "/projects/public-detail/local-guard" },
  { name: "은빛정원선생님", path: "/projects/public-detail/garden-teacher" },
];

export default function SeniorMeal() {
  return (
    <ProjectDetailLayout title="노인공익활동사업" tabList={tabList}>
      <div className="mt-10 flex justify-center">
        <img
          src={MealImage}
          alt="경로당급식지원"
          className="w-[700px] rounded-lg shadow"
        />
      </div>
    </ProjectDetailLayout>
  );
}