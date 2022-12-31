import whiteLogo from '../../../assets/images/logo-white.svg';
import {render, screen} from '@testing-library/react';
import { Icon } from './Icon';

describe('Logo', () => {
  
  test('render', () => {
    render(<Icon width={100} height={100}>sample</Icon>);

    expect(screen.queryByTestId('icon')).not.toBeNull();
  });


});
