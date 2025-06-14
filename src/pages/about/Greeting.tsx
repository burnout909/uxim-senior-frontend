import Title from "../../components/Title";
import OfficeImage from "../../assets/images/greeting.jpg";

export default function Greeting() {
  return (
    <div className="px-4 py-12 max-w-screen-xl mx-auto">
      <Title text="인사말" />

      <div className="text-center mt-8 mb-12">
        <h2 className="!text-[24px] font-bold mt-4 mb-12">안녕하십니까?</h2>
        <p className="!text-[22px] mt-2 text-lg">
          남동시니어클럽 홈페이지 방문을 진심으로 환영합니다!
        </p>
        <p className="!text-[22px] mt-2 text-lg">
          多같이 행복한 일자리 老人이 행복한 세상
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        {/* 우측 본문 */}
        <div className="w-full md:w-2/3 text-gray-700 leading-relaxed text-[20px] whitespace-pre-line">
          <p className="mb-4">
            인천남동시니어클럽은 2022년 3월에 개관하여 남동구 지역 만 60세 이상
            어르신의 능력과 경륜에 적합한 일자리 및 사회활동 기회를 제공하여
            어르신이 건강하고 활기찬 노후생활을 보낼 수 있도록 <br></br>최선의
            노력을 다하고 있습니다.
          </p>

          <p className="mb-4">
            우리는 급변하는 시대적 환경 속에 살고 있습니다. 고령사회 진입에
            발맞춰 어르신의 건강하고 행복한 노년을 위해 어르신의 경험과 지식을
            활용할 수 있는 다양한 사회활동을 개발하고 새로운 도전을 통해 ‘새로운
            제 2의 인생을 꿈꾸는’ 多같이 행복한 일자리! 老人이 행복한 세상! 을
            만들어 갈 수 있도록 최선을 다하겠습니다.
          </p>

          <p className="text-right font-bold">
            남동시니어클럽 관장 및 직원 일동
          </p>
        </div>

        {/* 좌측 사진 */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={OfficeImage}
            alt="남동시니어클럽 단체 사진"
            className="w-[500px] max-w-[200px] h-auto rounded shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
