import {render, screen} from '@testing-library/react';
import TableCell from './TableCell';

const cellHeaders = ['2/2', '2/3', '2/4', '2/5', '2/6'];
const bodyItem = [
  {label: 'sample', value: [1, 2, 3, 4, 5]},
  {label: 'sample', value: [1, 2, 3, 4, 5]},
  {label: 'sample', value: [1, 2, 3, 4, 5]},
  {label: 'sample', value: [1, 2, 3, 4, 5]},
]

describe('TableCell', () => {
  test('render', () => {
    render(<TableCell headers={cellHeaders} items={bodyItem}/>);

    expect(screen.queryByTestId('cell-table')).not.toBeNull();
  });
});
