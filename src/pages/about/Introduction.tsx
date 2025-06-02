import Title from "../../components/Title";

export default function Introduction () {
  return (
    <div>
      <Title text="시니어클럽소개" />
      {/* 소개 텍스트 */}
      <div className="mt-6 text-gray-700 leading-relaxed text-[15px] whitespace-pre-line">
        <p className="mb-4">
          노인복지법 제23조의2(노인일자리전담기관)에 따라 설치·운영되는 시니어클럽은, 
          국가 및 지방자치단체는 노인의 능력과 적성에 맞는 일자리를 제공하기 위하여 노인일자리 전담기관을 설치·운영할 수 있으며,
          보건복지부장관은 보건복지정책심의위원회의 심의를 거쳐 시니어클럽의 설치기준, 사업의 종류 및 내용 등 운영에 필요한 사항을 정하고 있습니다.
        </p>
        <p className="mb-4">
          시니어클럽은 만 60세 이상 노인에게 적합한 일자리를 발굴·제공하여 노인의 소득창출 및 사회참여를 지원하고,
          궁극적으로 노인의 삶의 질 향상과 지역사회 공익증진에 기여하는 것을 목적으로 운영되는 전담기관입니다.
        </p>
      </div>

      {/* 노인일자리 유형 아이콘 영역 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        <div className="bg-[#f6a623] text-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-bold mb-2">노인공익활동사업</h3>
          <p className="text-sm leading-relaxed">
            어르신이 참여하는 급식 지원, 시설관리, 스쿨존 지킴이 등
            지역사회 공익을 위한 자원봉사 활동
          </p>
        </div>
        <div className="bg-[#0072bc] text-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-bold mb-2">공동체사업단</h3>
          <p className="text-sm leading-relaxed">
            도시락, 카페, 택배, 급식 지원 등
            소규모로 협업하여 운영하는 공동 작업형 일자리
          </p>
        </div>
        <div className="bg-[#7ab800] text-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-bold mb-2">노인역량활용사업</h3>
          <p className="text-sm leading-relaxed">
            전문 직종 경력을 살려 행정지원, 상담, 교육 등
            사회서비스 분야에 참여하는 일자리
          </p>
        </div>
        <div className="bg-[#d0021b] text-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-bold mb-2">취업지원</h3>
          <p className="text-sm leading-relaxed">
            구직을 희망하는 어르신에게
            맞춤형 일자리 정보 제공 및 취업 연계 지원
          </p>
        </div>
      </div>

    </div>
  );
}
