import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Main App component', () => {
  it('renders header', () => {
    const { getByText } = render(<App />);

    expect(getByText('Will my bike ride be cancelled?')).toBeVisible();
  });

  it('renders submit button', () => {
    const { getByText } = render(<App />);

    expect(getByText('Submit')).toBeVisible();
  });
});
