import NoticeItem from "../components/home/NoticeItem";
import ParticipationStepCard from "../components/home/ParticipationStepCard";
import QuickLinkCard from "../components/home/QuickLinkCard";
import HeroImage from "../assets/icons/main2.png"
import { ROUTE } from "../routes/route";

const QUICK_LINKS = [
  { label: "기관소개", to: ROUTE.about.greeting },
  { label: "일자리 사업소개", to: ROUTE.projects.publicService },
  { label: "나에게 맞는 일자리", to: ROUTE.projects.employment },
  { label: "생산품", to: ROUTE.notice.products },
];

{
  /* 퀵메뉴 리스트 재정립 */
}
const PARTICIPATION_STEPS = [
  { step: "상담", description: "전화(032-xxx-xxxx) 또는 방문상담" },
  { step: "접수", description: "직접 방문하여 서류 제출" },
  { step: "연계", description: "참여 가능 여부 확인 후 연계" },
  { step: "면접", description: "추가 면접 및 교육 진행" },
  { step: "활동", description: "교육 수료 후 활동 시작" },
];

// src/pages/Home.tsx
export default function Home() {
  return (
    <div className="w-full">
      {/* Hero 영역 */}
      <section className="w-full h-[400px] bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={HeroImage}
            alt="메인이미지"
            className="w-full h-full object-cover object-top"
          />
        {/* <div className="w-[200px] h-[200px] bg-gray-300 rounded" /> */}
      </section>

      {/* 주요 바로가기 */}
      <section className="bg-blue-500 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {QUICK_LINKS.map(({ label, to }) => (
            <QuickLinkCard key={label} label={label} to={to} />
          ))}
        </div>
      </section>

      {/* 공지사항 + 일자리 소식 */}
      <section className="max-w-6xl mx-auto py-12 grid md:grid-cols-2 gap-12">
        {/* 공지사항 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">
              공지사항{" "}
              <span className="text-gray-500 text-lg ml-2">Notice</span>
            </h2>
            <button className="text-xl">＋</button>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            {Array.from({ length: 5 }).map((_, i) => (
              <NoticeItem
                key={i}
                title={"2024년도 서울남동시니어클럽 제{i + 1}차 운영위원회..."}
                date={"2025.XX.XX"}
              />
            ))}
          </ul>
        </div>

        {/* 일자리 소식 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">
              일자리 소식{" "}
              <span className="text-gray-500 text-lg ml-2">Job Info</span>
            </h2>
            <button className="text-xl">＋</button>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            {Array.from({ length: 5 }).map((_, i) => (
              <NoticeItem
                key={i}
                title={"2024년도 서울남동시니어클럽 제{i + 1}차 운영위원회..."}
                date={"2025.XX.XX"}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* 일자리 참여방법 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl font-bold pb-[20px]">일자리참여방법</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {PARTICIPATION_STEPS.map((item, i) => (
              <div key={item.step} className="flex items-center gap-2">
                <ParticipationStepCard {...item} />
                {i < PARTICIPATION_STEPS.length - 1 && (
                  <div className="text-2xl text-gray-400">{">"}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
