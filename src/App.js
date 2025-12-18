import React, { useState } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import AppCalculator from './AppCalculator';

function App() {
  const [fontSizeClass, setFontSizeClass] = useState('font-medium');

  const handleFontSizeChange = (size) => {
    if (size === 'small') setFontSizeClass('font-small');
    if (size === 'medium') setFontSizeClass('font-medium');
    if (size === 'large') setFontSizeClass('font-large');
  };

  return (

    <div className={`app-container ${fontSizeClass}`}>
      
    
      <AppHeader onFontSizeChange={handleFontSizeChange} />
      
   
      <AppCalculator />
      
    </div>
  );
}

export default App;