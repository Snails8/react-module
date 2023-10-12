import {render, screen} from '@testing-library/react';
import MUIButton from './Button';
import userEvent from '@testing-library/user-event';


describe('Button', () => {
  test('render', () => {
    render(<MUIButton label='test' handleClick={() => console.log('test')}/>);

    expect(screen.getByTestId('test')).not.toBeNull();
  });

  test('click', () => {
    const onClickMock = jest.fn();

    render(<MUIButton label='test' handleClick={onClickMock}/>);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(0); 
  });
});
