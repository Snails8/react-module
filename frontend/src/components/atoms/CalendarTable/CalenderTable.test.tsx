import {render, screen} from '@testing-library/react';
import { CalendarTable } from './CalendarTable';

describe('CalenderTable', () => {
  test('render', () => {
    render(<CalendarTable />);

    expect(screen.queryByTestId('calender-table')).not.toBeNull();
  });
});
