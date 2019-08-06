import React from 'react';
import ReactDOM from 'react-dom';
import Tops from './tops';
import { render, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MockAdapter from "axios-mock-adapter";

test('test loading status', () => {
  const { getByText, getByTestId } = render(<Tops />)

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