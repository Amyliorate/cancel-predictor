import React from 'react';
import { render } from '@testing-library/react';
import { WeatherInfo } from './WeatherInfo';
import { extractedSampleData, sample } from './SampleResponse';

describe('WeatherInfo component', () => {
  it('prints weather now', () => {
    const { getByLabelText, getByText } = render(<WeatherInfo weatherData={sample} />);

    expect(getByLabelText('Temperature')).toBeVisible();
    expect(getByText(`${extractedSampleData.temperature}°C`)).toBeVisible();

    // TODO expect other weather types
  });

  it('prints weather in 4 hours', () => {

  });

  it('prints weather in 3 days', () => {

  });
});
