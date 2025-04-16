import { Outlet } from "react-router";
import Header from "./Header";

export default function PageLayout() {
  return (
    <>
      <Header />
      <div className="container my-3">
        <Outlet />
      </div>
    </>
  );
}
