import {render, screen} from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('render', () => {
    render(<Button label='test' colorType='primary' handleClick={() => console.log('test')}/>);

    expect(screen.queryByTestId('button')).not.toBeNull();
  });
});
