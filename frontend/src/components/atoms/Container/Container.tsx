import { FC, memo } from "react";
import { ReactNode } from 'react';

type ContainerType = "center" | "left" | "right" | "flow"
type Props = {
  type: ContainerType,
  children: ReactNode,
}

export const Container: FC<Props> = memo((props: Props) => {
  const {type, children} = props;

  if (type === "center") {
    return (
      <div style={{ display: 'grid', placeItems: 'center' }}>
        {children}
      </div>
    );
  };

  if (type === "left") {
    return (
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        {children}
      </div>
    );
  };

  if (type === "right") {
    return (
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        {children}
      </div>
    );
  };

  if (type === "flow") {
    return (
      <div style={{ display: 'flex', flexFlow: 'column' }}>
        {children}
      </div>
    );
  };

  return <div>{children}</div>;
});