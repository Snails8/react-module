import { ReactNode } from "react";
import { GlobalHeader } from "./components/GlobalHeader";

type Props = {
  children: ReactNode;
};
export function GlobalLayout(props: Props) {
  return (
    <>
      <GlobalHeader />
      <>{props.children}</>
    </>
  );
}
