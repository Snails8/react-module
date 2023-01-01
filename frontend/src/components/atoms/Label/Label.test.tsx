import {render, screen} from '@testing-library/react';
import { Label } from './Label';

describe('Logo', () => {
  test('render', () => {
    render(<Label width={100} color={'red'} text={'test'}/>);

    expect(screen.queryByTestId('label')).not.toBeNull();
  });
});
