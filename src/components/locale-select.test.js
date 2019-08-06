import React from 'react';
import ReactDOM from 'react-dom';
import LocaleSelect from './locale-select';
import { render, fireEvent, cleanup } from '../../test/utils';
import renderer from 'react-test-renderer';

test('test default locale', () => {
    const { getByTestId } = render(<LocaleSelect />)

    expect(getByTestId('select-locale')).toHaveValue('zh-CN')

})

test('test locale change', () => {
    const { getByTestId } = render(<LocaleSelect />)

    const localeSelect = getByTestId('select-locale')

    fireEvent.change(localeSelect, { target: { value: 'en' } })

    expect(localeSelect).toHaveValue('en')

})

