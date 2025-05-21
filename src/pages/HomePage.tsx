import { Link } from "react-router-dom";

const quickMenus = [
  { title: "기관소개", path: "/about" },
  { title: "일자리 사업소개", path: "/jobs" },
  { title: "나에게 맞는 일자리", path: "/match" },
  { title: "생산품", path: "/products" },
];

const notices = [
  "2024년도 서울남동시니어클럽 제5차 운영위원회 공지",
  "2024년도 서울남동시니어클럽 제4차 운영위원회 공지",
  "2024년도 서울남동시니어클럽 제3차 운영위원회 공지",
  "2024년도 서울남동시니어클럽 제2차 운영위원회 공지",
  "2024년도 서울남동시니어클럽 제1차 운영위원회 공지",
];

const steps = [
  { title: "상담", desc: "전화 또는 방문상담", phone: "02-XXX-XXXX" },
  { title: "접수", desc: "방문 접수 (신분증 지참)" },
  { title: "연계", desc: "전화 또는 방문상담", phone: "02-XXX-XXXX" },
  { title: "면접", desc: "추가면접 및 교육진행" },
  { title: "활동", desc: "교육 수료 후 활동시작" },
];

function HomePage() {
  return (
    <main className="w-full max-w-[1440px] mx-auto">
      {/* 슬라이드 배너 */}
      <section className="w-full h-[300px] bg-gray-100 flex items-center justify-center">
        <span className="text-lg text-gray-500">슬라이드 배너</span>
      </section>

      {/* 네 개 메뉴 */}
      <section className="bg-[#3F7EAA] text-white py-10 grid grid-cols-2 sm:grid-cols-4 text-center">
        {quickMenus.map((menu, index) => (
          <Link to={menu.path} key={index} className="hover:opacity-90 transition">
            <div className="text-3xl">⭐</div>
            <p className="mt-2 text-lg">{menu.title}</p>
          </Link>
        ))}
      </section>

      {/* 공지사항 & 일자리 소식 */}
      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">공지사항 <span className="text-gray-400 text-base">Notice</span></h2>
            <button className="text-2xl">+</button>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {notices.map((item, idx) => (
              <li key={idx}>{item} <span className="float-right">2025.XX.XX</span></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">일자리 소식 <span className="text-gray-400 text-base">Job Info</span></h2>
            <button className="text-2xl">+</button>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {notices.map((item, idx) => (
              <li key={idx}>{item} <span className="float-right">2025.XX.XX</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* 일자리 참여방법 */}
      <section className="py-12 bg-gray-50 px-6">
        <h2 className="text-2xl font-bold mb-6">일자리참여방법</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="border px-6 py-4 bg-white shadow-sm rounded-md text-center w-full md:w-[180px]">
              <div className="text-xl font-semibold mb-2">{step.title}</div>
              <div className="text-sm text-gray-600">{step.desc}</div>
              {step.phone && <div className="text-sm text-blue-600 mt-1">({step.phone})</div>}
            </div>
          ))}
        </div>
      </section>

      {/* 유튜브 영상 */}
      <section className="py-12 flex justify-center">
        <div className="w-full max-w-md aspect-video bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">남동시니어클럽 영상사업단</span>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
