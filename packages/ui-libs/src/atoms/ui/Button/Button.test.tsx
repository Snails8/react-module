import {render, screen} from '@testing-library/react';
import { Button } from './Button';
import userEvent from '@testing-library/user-event';


describe('Button', () => {
  test('render', () => {
    render(<Button label='test' colorType='primary' handleClick={() => console.log('test')}/>);

    expect(screen.queryByTestId('button')).not.toBeNull();
  });

  test('click', () => {
    const onClickMock = jest.fn();

    render(<Button label='test' colorType='primary' handleClick={onClickMock}/>);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1); 
  });
});
