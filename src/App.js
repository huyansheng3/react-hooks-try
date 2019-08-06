import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './router'
import { ThemeContext, LocaleContext } from './context'
import 'bulma/css/bulma.css';

function App() {
  console.log('app render')
  const [theme, changeTheme] = useState('red')
  const [locale, changeLocale] = useState('zh-CN')

  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={{ theme, changeTheme }}>
          <LocaleContext.Provider value={{ locale, changeLocale }}>
            <Router></Router>
          </LocaleContext.Provider>
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
