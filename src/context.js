import React from 'react'
function noop() { }

export const ThemeContext = React.createContext({
    theme: '',
    changeTheme: noop
});

export const LocaleContext = React.createContext({
    locale: '',
    changeLocale: noop
});
