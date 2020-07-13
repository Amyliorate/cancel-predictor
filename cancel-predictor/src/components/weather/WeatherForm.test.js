import React from 'react';
import { render } from '@testing-library/react';
import { WeatherDisplay } from './WeatherDisplay';

describe('Weather Form component', () => {
  // const fetchMock = jest.spyOn(global, 'fetch');
  it('renders a submit button', () => {
    const { getByText } = render(<WeatherDisplay />);

    expect(getByText('Submit')).toBeVisible();
  });
});
