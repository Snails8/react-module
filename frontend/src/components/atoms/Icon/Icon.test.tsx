import {render, screen} from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  test('render', () => {
    render(<Icon width={100} height={100}>sample</Icon>);

    expect(screen.queryByTestId('icon')).not.toBeNull();
  });
});
