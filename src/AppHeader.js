import React from 'react';

function AppHeader({ onFontSizeChange }) {
  return (
    <header className="app-header">
      <h1>Mateusz Stachowiak</h1> 
      
     <div className="font-controls">
        <button className="btn-small" onClick={() => onFontSizeChange('small')}>
          A 
        </button>
        
        <button className="btn-medium" onClick={() => onFontSizeChange('medium')}>
          A 
        </button>
        
        <button className="btn-large" onClick={() => onFontSizeChange('large')}>
          A 
        </button>
      </div>
    </header>
  );
}

export default AppHeader;