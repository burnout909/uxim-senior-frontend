import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function ContentLayout() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex flex-grow w-full px-20 py-8">
        <section className="flex-grow">
          <Outlet />
        </section>
      </div>
      <Footer />
    </div>
  );
}
