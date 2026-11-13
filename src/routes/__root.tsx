import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-primary min-h-dvh w-full">
      <Outlet />
    </div>
  );
}
