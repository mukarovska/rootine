import type { ReactNode } from "react";

interface MenuLayoutProps {
  children: ReactNode;
}

//TODO: Dodělat menu

export function MenuLayout({ children }: MenuLayoutProps) {
  return <main className="p-page min-h-dvh">{children}</main>;
}
