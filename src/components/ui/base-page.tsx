import { Outlet, ScrollRestoration } from "react-router-dom";

export function BasePage({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        {children ?? <Outlet />}
      </div>

      <ScrollRestoration />
    </>
  );
}
