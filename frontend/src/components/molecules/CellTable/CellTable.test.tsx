import {render, screen} from '@testing-library/react';
import { CellTable } from './CellTable';

describe('CellTable', () => {
  test('render', () => {
    render(<CellTable />);

    expect(screen.queryByTestId('cell-table')).not.toBeNull();
  });
});
