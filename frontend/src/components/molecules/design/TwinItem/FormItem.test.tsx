import {render, screen} from '@testing-library/react';
import { FormItem } from './FormItem';

describe('', () => {  
  test('FormItem', () => {
    render(<FormItem label='test'>test</FormItem>);

    expect(screen.queryByTestId('form-item')).not.toBeNull();
  });
});
