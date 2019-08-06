import React, { useState } from 'react';
import { render } from '@testing-library/react'
import { ThemeContext, LocaleContext } from '../src/context'

const AllTheProviders = ({ children }) => {
    const [theme, changeTheme] = useState('red')
    const [locale, changeLocale] = useState('zh-CN')

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <LocaleContext.Provider value={{ locale, changeLocale }}>
                {children}
            </LocaleContext.Provider>
        </ThemeContext.Provider>
    )
}

const customRender = (ui, options) =>
    render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }