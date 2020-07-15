import React from 'react';
import { render } from '@testing-library/react';
import { WeatherContent } from './WeatherContent';

describe('Weather Form component', () => {
  // const fetchMock = jest.spyOn(global, 'fetch');
  it('renders a submit button', () => {
    const { getByText } = render(<WeatherContent />);

    expect(getByText('Submit')).toBeVisible();
  });
});
