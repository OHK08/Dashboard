import React, { Component } from 'react';
import { DarkModeContext } from './DarkModeContext';

export default class Header extends Component {
  render() {
    return (
      <DarkModeContext.Consumer>
        {({ isDarkMode, toggleDarkMode }) => (
          <div
            style={{
              backgroundColor: isDarkMode ? '#333' : '#ccc',
              color: isDarkMode ? '#fff' : '#000',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <h1>Welcome to our Website!</h1>
            <button 
              onClick={toggleDarkMode} 
              style={{
                padding: '8px 12px',
                backgroundColor: isDarkMode ? '#333' : '#ccc',
                color: isDarkMode ? '#fff' : '#000',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '5px'
              }}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        )}
      </DarkModeContext.Consumer>
    );
  }
}
