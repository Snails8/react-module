import {render, screen} from '@testing-library/react';
import { CellTable } from './CellTable';

describe('Logo', () => {
  test('render', () => {
    render(<CellTable />);

    expect(screen.queryByTestId('cell-table')).not.toBeNull();
  });
});
