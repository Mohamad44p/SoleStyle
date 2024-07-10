import { Navbar } from "@/components/Front/Navbar";
import { type ReactNode } from "react";
export default function StoreFrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
