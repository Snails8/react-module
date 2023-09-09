import {render, screen} from '@testing-library/react';
import TwinItem from './TwinItem';

describe('', () => {  
  test('TwinItem', () => {
    render(<TwinItem label='test'>test</TwinItem>);

    expect(screen.queryByTestId('test')).not.toBeNull();
  });
});
