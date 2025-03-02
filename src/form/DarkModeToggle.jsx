import React, { useContext } from 'react'
import DarkModeContext from './DarkModeContext'

function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
    <>
        <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    </>
  );
}
export default DarkModeToggle;