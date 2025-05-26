import { useNavigate } from "react-router";
import logo from "../assets/logos/logo.png";
import { ROUTE } from "../routes/route";

const HEADER_URLS = {
  기관소개: ROUTE.about.greeting,
  사업소개: ROUTE.projects.publicService,
  소통공간: ROUTE.notice.announcement,
  자료실: ROUTE.resources.photos,
};

type HeaderLabel = "기관소개" | "사업소개" | "소통공간" | "자료실";

const HEADERCOMPONENT: HeaderLabel[] = [
  "기관소개",
  "사업소개",
  "소통공간",
  "자료실",
];

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-white">
      <div className="flex h-[88px] px-20 py-5 items-center">
        <button onClick={() => navigate("/home")}>
          <img src={logo} width={224} height={48} alt="logo" />
        </button>
      </div>
      <nav className="flex h-[64px] mx-[80px] border-t border-b border-[#D8D8D8]">
        {HEADERCOMPONENT.map((label) => (
          <div
            key={label}
            className="border-y border-[#D8D8D8] py-6 px-4 text-center text-lg text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <button onClick={() => navigate(HEADER_URLS[label])}>
              {label}
            </button>
          </div>
        ))}
      </nav>
    </header>
  );
}
