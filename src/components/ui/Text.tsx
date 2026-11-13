import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TextColor = "primary" | "secondary";
type TextVariant = "h1" | "h2" | "base" | "small";
type TextWidth = "normal" | "bold";

interface TextProps {
  children: ReactNode;
  color?: TextColor;
  variant?: TextVariant;
  width?: TextWidth;
  className?: string;
}

const colors: Record<TextColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
};

const variants: Record<TextVariant, string> = {
  h1: "text-h1",
  h2: "text-h2",
  base: "text-base",
  small: "text-small",
};

const widths: Record<TextWidth, string> = {
  normal: "font-extralight",
  bold: "font-bold",
};

export function Text({
  children,
  color = "primary",
  variant = "base",
  width = "normal",
  className,
}: TextProps) {
  const styles = twMerge(
    `${colors[color]} ${variants[variant]} ${widths[width]}`,
    className,
  );
  if (variant === "h1") {
    return <h1 className={styles}>{children}</h1>;
  } else if (variant === "h2") {
    return <h2 className={styles}>{children}</h2>;
  }
  return <p className={styles}>{children}</p>;
}
