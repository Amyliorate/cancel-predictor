import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import { when } from 'jest-when';
import { WeatherContent } from './WeatherContent';
import { api } from '../../const/api';
import { sample } from './SampleResponse';

const successResponse = (body, status = 200) => ({
  json: () => body,
  ok: true,
  status,
  statusText: 'Ok',
});

const successResponsePromise = (body) => Promise.resolve(successResponse(body));

describe('WeatherContent Component', () => {
  const fetchMock = jest.spyOn(global, 'fetch');
  it('Displays weather for given time stamp', async () => {
    when(fetchMock).calledWith(api.weatherOneCall())
      .mockReturnValueOnce(successResponsePromise(sample));
    const { getByLabelText, getByText } = render(<WeatherContent />);

    fireEvent.click(getByText('Submit'));

    await wait(() => expect(getByLabelText(/Temperature/)).toBeVisible());
  });
});
