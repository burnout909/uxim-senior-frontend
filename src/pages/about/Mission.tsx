import Title from "../../components/Title";

export default function Mission() {
  return (
    <div className="px-4 py-12 max-w-screen-lg mx-auto text-center">
      <Title text="미션과 비전" />

      {/* 상단 메인 비전 텍스트 */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">세대를 잇고 지속가능사회를 선도하는 남동시니어클럽</h2>
        <p className="text-gray-600">남동시니어클럽의 비전과 핵심가치를 소개합니다.</p>
      </div>

      {/* Mission & Vision section */}
      <div className="flex flex-col md:flex-row justify-around items-start mt-12 text-left gap-10">
        <div className="w-full md:w-1/2 p-6 border rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">🌱 미션 (Mission)</h3>
          <p className="text-gray-700">어르신 친화도시 조성과 건전한 공동체 문화조성을 통해 어르신의 삶의 질 향상에 기여</p>
        </div>
        <div className="w-full md:w-1/2 p-6 border rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">🌈 비전 (Vision)</h3>
          <p className="text-gray-700">제2의 인생을 디자인하는 노인일자리 기관으로 도약</p>
        </div>
      </div>

      {/* 핵심가치 section */}
      <div className="mt-16">
        <h3 className="text-xl font-bold mb-8">핵심가치 (Core Values)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="bg-blue-100 text-blue-800 p-4 rounded shadow text-center">
            <h4 className="font-semibold text-lg mb-2">소통</h4>
            <p className="text-sm">지역사회와 함께 생각을 공유하고 이해하는 기관</p>
          </div>
          <div className="bg-green-100 text-green-800 p-4 rounded shadow text-center">
            <h4 className="font-semibold text-lg mb-2">도전</h4>
            <p className="text-sm">환경에 유연하게 반응하고 끊임없이 나아가는 삶</p>
          </div>
          <div className="bg-orange-100 text-orange-800 p-4 rounded shadow text-center">
            <h4 className="font-semibold text-lg mb-2">신뢰</h4>
            <p className="text-sm">기대와 믿음에 부응하는 조직</p>
          </div>
          <div className="bg-red-100 text-red-800 p-4 rounded shadow text-center">
            <h4 className="font-semibold text-lg mb-2">존중</h4>
            <p className="text-sm">다양성을 인정하고 이해하는 공동체</p>
          </div>
        </div>
      </div>
    </div>
  );
}
