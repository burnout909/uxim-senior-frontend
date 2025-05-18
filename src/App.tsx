import { Breadcrumb } from "@krds-ui/core";
import { Route, Routes, useNavigate } from "react-router";
import Home from "./pages/Home.tsx";

function App() {
  let navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <Breadcrumb
          items={[
            {
              label: "홈",
              onClick: () => {
                navigate("/home");
              },
            },
          ]}
        ></Breadcrumb>

        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
