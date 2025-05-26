import { useState } from "react";
import SidebarNav from "../components/SidebarNav";

const aboutNavItems = [
  { key: "greeting", label: "인사말" },
  { key: "intro", label: "시니어클럽소개" },
  { key: "mission", label: "미션과 비전" },
  { key: "history", label: "기관연혁" },
  { key: "corp", label: "법인소개" },
  { key: "structure", label: "기관 조직도" },
  { key: "direction", label: "오시는 길" },
];

function AboutPage() {
  const [current, setCurrent] = useState("greeting");

  return (
    <div className="max-w-[1440px] mx-auto flex min-h-[600px] px-6 py-12 gap-8">
      <SidebarNav
        current={current}
        onSelect={setCurrent}
        title="기관소개"
        items={aboutNavItems}
      />

      <section className="flex-1 bg-white border rounded shadow-sm p-6 text-gray-700">
        {current === "greeting" && <GreetingContent />}
        {current === "intro" && <IntroContent />}
        {current === "mission" && <MissionContent />}
        {current === "history" && <HistoryContent />}
        {current === "corp" && <CorpContent />}
        {current === "structure" && <StructureContent />}
        {current === "direction" && <DirectionContent />}
      </section>
    </div>
  );
}


function GreetingContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">인사말</h2>
      <p>안녕하세요! 남동시니어클럽에 방문해주셔서 감사합니다.</p>
    </div>
  );
}

function IntroContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">시니어클럽소개</h2>
      <p>남동시니어클럽은 어르신의 사회참여와 일자리 창출을 위해 설립된 기관입니다.</p>
    </div>
  );
}

function MissionContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">미션과 비전</h2>
      <p>미션: 존엄한 노년의 삶 실현 / 비전: 함께하는 시니어 행복한 지역사회</p>
    </div>
  );
}

function HistoryContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">기관연혁</h2>
      <p>2010년 설립 이후 다양한 노인 일자리와 복지사업을 운영해왔습니다.</p>
    </div>
  );
}

function CorpContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">법인소개</h2>
      <p>사회복지법인 남동복지재단은 지역사회 공헌을 위한 다양한 사업을 진행하고 있습니다.</p>
    </div>
  );
}

function StructureContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">기관 조직도</h2>
      <p>이사장, 관장, 부장, 팀장 등으로 구성된 조직 체계를 운영하고 있습니다.</p>
    </div>
  );
}

function DirectionContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">오시는 길</h2>
      <p>주소: 인천광역시 남동구 ○○로 ○○ / 지하철 ○○역에서 도보 5분 거리입니다.</p>
    </div>
  );
}

export default AboutPage;
