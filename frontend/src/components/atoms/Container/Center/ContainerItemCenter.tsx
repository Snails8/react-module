import { FC, memo } from "react";
import { ReactNode } from 'react';

type Props = {
  children: ReactNode,
}

export const ContainerItemCenter: FC<Props> = memo((props: Props) => {
  const {children} = props;

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      {children}
    </div>
  );
});