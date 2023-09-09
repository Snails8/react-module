import {render, screen} from '@testing-library/react';
import UserIcon from './UserIcon';

describe('', () => {  
  test('UserIcon', () => {
    render(<UserIcon height={25} width={25} />);

    expect(screen.queryByTestId('user-icon')).not.toBeNull();
  });
});
