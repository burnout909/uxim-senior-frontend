import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomeLayout() {
  return (
    <div className="flex flex-col w-full min-h-screen mx-auto max-w-[1440px]">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
