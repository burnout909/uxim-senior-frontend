import { Accordion, Breadcrumb, Pagination } from "@krds-ui/core";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Intro from "./pages/Intro.tsx";
import Club from "./pages/Club.tsx";
import { FiHome } from "react-icons/fi";

function App() {
  let navigate = useNavigate();


  return (
    <>
      <div className="flex flex-col w-full h-full">
        <Breadcrumb
          items={[{ label: <span className="text-[20px]">홈</span> }]}
        ></Breadcrumb>

        <>
          <div className="flex flex-col w-full h-full bg-gray-200" >
            <div>
              <Breadcrumb 
                items={[
                  {
                    label: <span className="text-lg"><FiHome /></span>,
                    onClick: () => {
                      navigate("/home");
                    },
                  },
                  {
                    label: <span className="text-lg">기관소개</span>,
                    onClick: () => {
                      navigate("/intro");
                    },
                  },
                  {
                    label: <span className="text-lg">시니어클럽소개</span>,
                    onClick: () => {
                      navigate("/club");
                    },
                  },
                ]}
              ></Breadcrumb>

              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/club" element={<Club />} />
              </Routes>
            </div>
          </div>
        </>
        

        <Pagination
          currentPage={9}
          onPageChange={function ra() {}}
          totalPages={20}
          visiblePages={5}
        />
        <Accordion
          items={[
            {
              children: (
                <p className="text-[100px]">Accordion Item 1 Content</p>
              ),
              title: "Accordion Item 1",
            },
            {
              children: "Accordion Item 2 Content",
              title: "Accordion Item 2",
            },
            {
              children: "Accordion Item 3 Content",
              title: "Accordion Item 3",
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
