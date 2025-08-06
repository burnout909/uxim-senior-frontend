import Title from "../../components/Title";
import OfficeImage from "../../assets/images/greeting.jpg";

export default function Greeting() {
  return (
    <div className="px-4 py-12 max-w-screen-xl mx-auto">
      <Title text="인사말" />

      <div className="text-center mt-8 mb-12">
        <h2 className="!text-[24px] font-bold mt-4 mb-12">안녕하십니까?</h2>
        <p className="!text-[22px] mt-2 text-lg">
          남동시니어클럽 홈페이지를 찾아주신 여러분, 진심으로 반갑습니다.
        </p>
        <p className="!text-[22px] mt-2 text-lg">
          당신의 인생 2막, 우리가 함께합니다.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        {/* 우측 본문 */}
        <div className="w-full px-4 md:px-6 text-gray-700 leading-relaxed text-[20px] whitespace-pre-line max-w-[800px] mx-auto">
          <p className="text-center font-bold mb-4">
            ‘누군가에게 필요한 존재로 살아간다는 것’
          </p>
          <p className="mb-4">
            그것은 나이와 상관없이 인생에 활력을 불어넣는 특별한 경험입니다.
          </p>

          <p className="mb-4">
            남동시니어클럽은 60세 이상의 어르신이 자신의 경험과 재능을 사회
            속에서 다시 꽃피울 수 있도록, 일과 활동의 기회를 만들어가는
            곳입니다. 2022년 3월 개관 이래, 남동구 지역 어르신들이 ‘은퇴 이후의
            삶’이 아닌 ‘새로운 시작’으로 인생 2막을 열 수 있도록 함께
            걸어왔습니다. 우리는 일자리를 단순한 ‘일’이 아닌, 자존감, 관계,
            그리고 삶의 의미를 잇는 통로로 생각합니다. 그 안에서 서로 배우고,
            서로를 응원하며, 지역사회와 더불어 살아가는 행복한 공동체를
            만들어가고자 합니다. 노년이 결코 외로운 시간이 되지 않도록, 어르신의
            하루가 의미 있는 발걸음으로 채워질 수 있도록 남동시니어클럽은 늘
            곁에서 함께하겠습니다.
          </p>

          <p className="text-right font-bold">
            남동시니어클럽 관장 및 직원 일동
          </p>
        </div>

        {/* 좌측 사진 */}
        <div className="w-full md:w-1/3 mt-8 flex justify-center">
          <img
            src={OfficeImage}
            alt="남동시니어클럽 단체 사진"
            className="w-[750px] max-w-[200px] h-auto rounded shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
