import React from 'react'
import { WeatherInfo } from './WeatherInfo';
import { sample } from './SampleResponse';

describe('WeatherInfo component', () => {

    it('prints weather now', () => {
        const { getByText } = render(<WeatherInfo apiResponse={sample} />) 

        //expect that it will rain
    });

    it('prints weather in 4 hours', () => {

    });

    it('prints weather in 3 days', () => {

    });
})