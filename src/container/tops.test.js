import React from 'react';
import ReactDOM from 'react-dom';
import Tops from './tops';
import { render, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import mockAxios from 'jest-mock-axios';
import useDataApi from '../hooks-utils/use-data-api'

test('test loading status', async () => {

  const { getByText, getByTestId } = render(<Tops />)
  expect(getByTestId('loading')).toHaveTextContent(/loading/i)

})

test('test error status', () => {

})

test('test cancel request', () => {

})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tops />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Tops renders snapshot', () => {
  const tree = renderer
    .create(<Tops />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});