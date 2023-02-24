import {render, screen} from '@testing-library/react';
import { Textarea } from './Textarea';

describe('', () => {  
  test('Textarea', () => {
    render(<Textarea id='test' onChangeHandler={() => console.log('test')}/>);

    expect(screen.queryByTestId('textarea')).not.toBeNull();
  });
});
