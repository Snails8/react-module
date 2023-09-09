import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageHeader from './PageHeader';

describe('', () => {  
  test('PageHeader', () => {
    render(
      <BrowserRouter>
        <PageHeader title='test' backLink={false} />
      </BrowserRouter>
    );

    expect(screen.queryByTestId('page-header')).not.toBeNull();
  });
});
