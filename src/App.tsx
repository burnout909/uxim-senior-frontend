import { Accordion, Breadcrumb, Pagination } from "@krds-ui/core";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NoticePage from "./pages/NoticePage";
import ResourcesPage from "./pages/ResourcesPage";

// function App() {
//   return (
//     <>
//       <div className="flex flex-col w-full h-full">
//         <Breadcrumb
//           items={[{ label: <span className="text-[20px]">홈</span> }]}
//         ></Breadcrumb>
//         <div className='main-container'>
//           <h1 className="title">시니어클럽소개</h1>

//           <div className="content-container">
//             <h1 style={{fontSize: '27px', marginBottom: '20px'}}> • 시니어클럽이란?</h1>
//             <p style={{fontSize: '24px'}}>
//               시니어클럽은 대한민국에서 만 60세 이상의 어르신들에게 일자리와 사회참여 기회를 제공하기 위해 운영되는 기관입니다. 
//               보건복지부의 지원 아래 각 지방자치단체와 민간 복지기관 등이 함께 참여하여 지역별로 운영되며, 
//               고령화 사회 속에서 노인의 건강한 노후생활과 경제적 자립을 지원하는 중요한 역할을 하고 있습니다.
//             </p>
//           </div>

//           <div>
//             <h1 style={{fontSize: '27px', marginBottom: '20px'}}> • 노인일자리 및 사회활동지원사업 유형</h1>
//             <div className="img-container">
//               <img width='211px' height='265px'></img>
//               <img width='211px' height='265px'></img>
//               <img width='211px' height='265px'></img>
//               <img width='211px' height='265px'></img>
//             </div>
//           </div>
//         </div>

//         <Header/>

//         <Pagination
//           currentPage={9}
//           onPageChange={function ra() {}}
//           totalPages={20}
//           visiblePages={5}
//         />
//         <Accordion
//           items={[
//             {
//               children: (
//                 <p className="text-[100px]">Accordion Item 1 Content</p>
//               ),
//               title: "Accordion Item 1",
//             },
//             {
//               children: "Accordion Item 2 Content",
//               title: "Accordion Item 2",
//             },
//             {
//               children: "Accordion Item 3 Content",
//               title: "Accordion Item 3",
//             },
//           ]}
//         />
//       </div>
//     </>
//   );
// }

// export default App;


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* 항상 상단에 고정되는 헤더 */}
        <Header />

        {/* 페이지 내용 */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/notice" element={<NoticePage />} />
            {/* 나중에 필요한 라우트 추가 */}
          </Routes>
        </main>

        {/* 항상 하단에 고정되는 푸터 */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;