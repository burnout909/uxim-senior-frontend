import NoticeItem from "../components/home/NoticeItem";
import ParticipationStepCard from "../components/home/ParticipationStepCard";
import QuickLinkCard from "../components/home/QuickLinkCard";

const QUICK_LINK_LABELS = [
  "기관소개",
  "일자리 사업소개",
  "나에게 맞는 일자리",
  "생산품",
];

const PARTICIPATION_STEPS = ["상담", "접수", "연계", "연결", "면접", "활동"];

// src/pages/Home.tsx
export default function Home() {
  return (
    <div className="w-full">
      {/* Hero 영역 */}
      <section className="w-full h-[300px] bg-gray-100 flex items-center justify-center">
        <div className="w-[200px] h-[200px] bg-gray-300 rounded" />
      </section>

      {/* 주요 바로가기 */}
      <section className="bg-blue-500 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {QUICK_LINK_LABELS.map((label) => (
            <QuickLinkCard key={label} label={label} />
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
          <h2 className="text-3xl font-bold mb-10">일자리참여방법</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4 text-sm">
            {PARTICIPATION_STEPS.map((step, idx) => (
              <>
                <ParticipationStepCard
                  key={step + idx}
                  step={step}
                  description={"전화 또는 방문상담"}
                />
                <div />
              </>
            ))}
          </div>
          {/* 영상 링크 */}
          <div className="mt-12">
            <button className="flex items-center text-blue-700 gap-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              남동시니어클럽 영상사업단
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
