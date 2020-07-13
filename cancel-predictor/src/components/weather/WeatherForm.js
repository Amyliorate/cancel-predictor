import React from 'react';
import { Formik } from 'formik';
import { api } from '../../const/api';
import { Button } from '../shared/Button';

export function WeatherForm({ setWeatherData }) {
  const fetchFromApi = () => fetch(api.weatherOneCall())
    .then((response) => response.json())
    .then(setWeatherData);
  return (
    <div>
      <Formik
        initialValues={{ latitude: '', longitude: '' }}
        onSubmit={(values, { setSubmitting }) => {
          fetchFromApi();
          setSubmitting(false);
        }}
      >
        {({
        //   values, errors, touched, handleChange, handleBlur,
          handleSubmit, isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            {/* <input
              type="string"
              name="latitude"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <input
              type="string"
              name="longitude"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            /> */}

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
