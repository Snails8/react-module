import {render, screen} from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('', () => {  
  test('RadioButton', () => {
    render(<RadioButton onChangeHandler={() => console.log('test')}/>);

    expect(screen.queryByTestId('radio-button')).not.toBeNull();
  });
});
