"use client"
import { ReactNode } from "react";
import { GlobalHeader } from "./components/GlobalHeader";
import { GlobalFooter } from "./components/GlobalFooter";
import { usePathname } from "next/navigation";
import { route } from "@/const/route";
import { BackHeader } from "./components/BackHeader";

type Props = {
  children: ReactNode;
};
export function GlobalLayout(props: Props) {
  const pathname = usePathname();
  const doShowBackHeader = (pathname: string) => {
    return pathname !== route.home;
    // const regex = /^\/posts\/[^/]+$/;
    // return regex.test(pathname);
  };

  return (
    <div>
      <GlobalHeader />
      { doShowBackHeader(pathname) && <BackHeader />}
      <main className="min-h-screen bg-white text-black px-36">
        {props.children}
      </main>
      <GlobalFooter />
    </div>
  );
}
