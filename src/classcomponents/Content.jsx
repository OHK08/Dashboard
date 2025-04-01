import React, { Component } from 'react'
import { DarkModeContext } from './DarkModeContext';

export default class Content extends Component {
    static contextType = DarkModeContext;
  render() {
    const { isDarkMode } = this.context;
    return (
      <div style = {{
        backgroundColor: isDarkMode ? '#666' : '#fff',
        color: isDarkMode ? '#eee' : '#333', 
        padding: '20px'
      }}>
        <p>This is some content on the page.</p>
        <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Officia, deserunt officiis 
            quidem rerum aspernatur aut sed quod. Quia, beatae? 
            Autem delectus fuga labore asperiores dolorum eaque 
            quo aut cum modi.
        </p>
      </div>
    );
  }
}
