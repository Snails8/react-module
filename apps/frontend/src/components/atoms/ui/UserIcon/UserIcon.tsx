import { memo } from 'react';
import { UserIconSvg } from './UserIconSvg';

type UserIconProps = {
  height?: number;
  width?: number;
};

export const UserIcon = memo((props: UserIconProps) => {
  const { height=50, width=50 } = props;

  return (
    <div style={{ minHeight: height, minWidth: width }} data-testid='user-icon'>
      <UserIconSvg />
    </div>
  );
});
