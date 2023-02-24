import {render, screen} from '@testing-library/react';
import { Table } from './Table';

const header = ['th1', 'th2', 'th3'] as const;
const body = [
  ['1a', '1b', '1c'],
  ['2a', '2b', '2c'],
  ['3a', '3b', '3c'],
];

describe('CalenderTable', () => {
  test('render', () => {
    render(<Table header={header} body={body}/>);

    expect(screen.queryByTestId('calender-table')).not.toBeNull();
  });
});
