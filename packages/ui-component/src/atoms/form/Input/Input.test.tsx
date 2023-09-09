import {render, screen} from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  test('render', () => {
    render(<Input type='text' id='test-input' onChangeHandler={() => console.log('test')} />);

    expect(screen.queryByTestId('input')).not.toBeNull();
  });
});
