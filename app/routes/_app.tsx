import { Outlet } from "@remix-run/react";
import NavBar from "~/components/NavBar";

export default function AppLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
