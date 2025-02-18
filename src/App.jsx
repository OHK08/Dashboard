import React, { useState } from 'react';
import Admin from './Admin';
import Parent from './demo/Parent';
import ExampleUseState from './demo/ExampleUseState';
import Button1 from './demo/Button1';


export default function App() {

  const [darkMode, setDarkMode] = useState(false);
  const themeToggle = () => {
    setDarkMode(mode => !mode);
  }

  return (
    <>
    <Button1 />
      <div className={darkMode ? 'dark-mode' : ''}>
      <Admin themeToggle = {themeToggle}/>
    </div>

      {/* <ExampleUseState/>
    <Parent/> */}

    </>
  );
}
