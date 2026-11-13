import type { ReactElement } from "react";

interface MenuLayoutProps {
  children: ReactElement;
}

//TODO: Dodělat menu

export function MenuLayout({ children }: MenuLayoutProps) {
  return <main className="p-page min-h-dvh">{children}</main>;
}
