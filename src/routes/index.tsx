import { createFileRoute } from "@tanstack/react-router";

import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { MenuLayout } from "../components/layouts/MenuLayout";

export const Route = createFileRoute("/")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <MenuLayout>
      <DashboardHeader />
    </MenuLayout>
  );
}
