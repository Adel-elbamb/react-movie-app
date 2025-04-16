import { Outlet } from "react-router";

export default function PageLayout() {
  return (
    <>
      <div className="container my-3">
        <Outlet />
      </div>
    </>
  );
}
