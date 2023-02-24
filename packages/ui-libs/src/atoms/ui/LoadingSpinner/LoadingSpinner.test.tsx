import {render, screen} from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {  
  test('render', () => {
    render(<LoadingSpinner />);

    expect(screen.queryByTestId('loading-spinner')).not.toBeNull();
  });
});
