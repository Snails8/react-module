import { memo } from 'react';
import { UserIconSvg } from './UserIconSvg';

type UserIconProps = {
  height: number;
  width: number;
};

export const UserIcon = memo((props: UserIconProps) => {
  const { height, width } = props;

  return (
    <div style={{ height: height, width: width }} data-testid='user-icon'>
      <UserIconSvg />
    </div>
  );
});
