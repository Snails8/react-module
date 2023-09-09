import {render, screen} from '@testing-library/react';
import NotificationField from './NotificationField';

describe('', () => {  
  test('NotificationField', () => {
    render(<NotificationField type='error' message='test'/>);

    expect(screen.queryByTestId('notification-field')).not.toBeNull();
  });
});
