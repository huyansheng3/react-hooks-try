import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hooks from './hooks'
import Hooks2 from './hooks2'
import Hooks3 from './hooks3'
import Hooks4 from './hooks4'


const demos = {
  '/hooks': Hooks,
  '/hooks2': Hooks2,
  '/hooks3': Hooks3,
  '/hooks4': Hooks4
}

const demoList = Object.keys(demos)

const len = demoList.length

function App() {
  console.log('app render')
  const [pathname, setPathname] = useState(window.location.pathname)

  const Demo = demos[pathname] || Hooks

  function next() {
    const index = demoList.findIndex(item => item === pathname)
    const nextPath = demoList[(index + 1 + len) % len]
    window.history.pushState(null, null, nextPath)
    setPathname(nextPath)
  }

  function prev() {
    const index = demoList.findIndex(item => item === pathname)
    const prevPath = demoList[(index - 1 + len) % len]
    window.history.pushState(null, null, prevPath)
    setPathname(prevPath)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Demo></Demo>
        <div>
          <button onClick={prev}>prev</button>
          <button onClick={next}>next</button>
        </div>

      </header>
    </div>
  );
}

export default App;
