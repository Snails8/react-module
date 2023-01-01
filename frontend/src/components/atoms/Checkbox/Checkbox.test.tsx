import {render, screen} from '@testing-library/react';
import { CheckBox } from './Checkbox';

describe('Logo', () => {
  test('render', () => {
    render(<CheckBox onChangeHandler={() => console.log('test')} />);

    expect(screen.queryByTestId('checkbox')).not.toBeNull();
  });
});
