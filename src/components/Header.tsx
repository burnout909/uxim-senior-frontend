import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 h-[72px] flex items-center justify-between">
        
        {/* 좌측: 로고 */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="로고" className="h-8 w-auto" />
          <span className="text-[#005BAC] font-bold text-xl">남동시니어클럽</span>
        </Link>

        {/* 중앙: 네비게이션 */}
        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          <div className="relative group">
            <Link to="/about" className="hover:text-blue-600">
              기관소개 ▾
            </Link>
            <div className="absolute hidden group-hover:block top-full mt-1 bg-white border shadow-md text-sm z-10">
              <Link to="/about/greeting" className="block px-4 py-2 hover:bg-blue-50">인사말</Link>
              <Link to="/about/intro" className="block px-4 py-2 hover:bg-blue-50">시니어클럽소개</Link>
              {/* 기타 하위 메뉴 */}
            </div>
          </div>

          <div className="relative group">
            <Link to="/projects" className="hover:text-blue-600">
              사업소개 ▾
            </Link>
          </div>

          <div className="relative group">
            <Link to="/notice" className="hover:text-blue-600">
              소통공간(공지사항) ▾
            </Link>
          </div>

          <div className="relative group">
            <Link to="/resources" className="hover:text-blue-600">
              자료실 ▾
            </Link>
          </div>
        </nav>

        {/* 우측: 유틸 메뉴 */}
        <div className="flex gap-4 text-sm text-gray-700 items-center">
          <button className="flex items-center gap-1">
            🔍 <span>통합검색</span>
          </button>
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
