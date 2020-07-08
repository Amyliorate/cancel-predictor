import React from 'react';
import { render } from '@testing-library/react';
import { Topbar } from './Topbar';

describe('Main App component', () => {
  it('renders header', () => {
    const { getByText } = render(<Topbar />);

    expect(getByText('Will my bike ride be cancelled?')).toBeVisible();
  });
});
