import React, { useState } from 'react';

if (process.env.NODE_ENV === 'test') {
  if (typeof require.context === 'undefined') {
    const fs = require('fs');
    const path = require('path');

    require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
      const files = {};

      function readDirectory(directory) {
        fs.readdirSync(directory).forEach((file) => {
          const fullPath = path.resolve(directory, file);

          if (fs.statSync(fullPath).isDirectory()) {
            if (scanSubDirectories) readDirectory(fullPath);

            return;
          }

          if (!regularExpression.test(fullPath)) return;

          files[fullPath] = true;
        });
      }

      readDirectory(path.resolve(__dirname, base));

      function Module(file) {
        return require(file);
      }

      Module.keys = () => Object.keys(files);

      return Module;
    };

  }
}

let demos = {};

function importAll(r) {
  r.keys().forEach(key => demos[key] = r(key));
}

importAll(require.context('./container', false, /\.js(x)*$/));

const demoList = Object.keys(demos)

const len = demoList.length

function Router() {
  const [pathname, setPathname] = useState('.' + window.location.pathname)

  const Demo = (demos[pathname] || {}).default || (demos[demoList[0]] || {}).default

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
    <div className="router">
      <Demo></Demo>
      <div>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  );
}

export default Router;
