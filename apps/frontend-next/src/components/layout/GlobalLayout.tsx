import { ReactNode } from "react";
import { GlobalHeader } from "./components/GlobalHeader";
import { GlobalFooter } from "./components/GlobalFooter";

type Props = {
  children: ReactNode;
};
export function GlobalLayout(props: Props) {
  return (
    <div>
      <GlobalHeader />
      <main className="min-h-screen bg-white text-black px-36">
        {props.children}
      </main>
      <GlobalFooter />
    </div>
  );
}
