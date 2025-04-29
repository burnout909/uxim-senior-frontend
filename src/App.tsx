import { Accordion, Breadcrumb, Pagination } from "@krds-ui/core";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <Breadcrumb
          items={[{ label: <span className="text-[20px]">홈</span> }]}
        ></Breadcrumb>
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
