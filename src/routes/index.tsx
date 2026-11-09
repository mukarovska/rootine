import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <main>
      <h1>Rootine</h1>
      <p>dashboard</p>
    </main>
  );
}
