import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Landing Page",
  },
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
