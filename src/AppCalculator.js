import React, { useState, useEffect } from 'react';
import AppActionButton from './AppActionButton';
import AppCalculationHistory from './AppCalculationHistory';

function AppCalculator() {

  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  

  const [result, setResult] = useState('');
  

  const [compareMsg, setCompareMsg] = useState('');
  

  const [history, setHistory] = useState([]);

 
  useEffect(() => {
    if (inputA === '' || inputB === '') {
      setCompareMsg('Wpisz obie liczby, aby porównać.');
      return;
    }

    const numA = parseFloat(inputA);
    const numB = parseFloat(inputB);

    if (numA > numB) setCompareMsg('Liczba A jest większa od liczby B');
    else if (numA < numB) setCompareMsg('Liczba A jest mniejsza od liczby B');
    else setCompareMsg('Liczba A jest równa liczbie B');
  }, [inputA, inputB]);


  const handleCalculate = (operation) => {
    const valA = parseFloat(inputA);
    const valB = parseFloat(inputB);
    let res = 0;

  
    if (operation === '/' && valB === 0) {
      alert("Nie można dzielić przez zero!");
      return;
    }

    switch (operation) {
      case '+': res = valA + valB; break;
      case '-': res = valA - valB; break;
      case '*': res = valA * valB; break;
      case '/': res = valA / valB; break;
      default: return;
    }

    setResult(res);

 
    const newRecord = {
      a: valA,
      b: valB,
      op: operation,
      result: res
    };
    setHistory([...history, newRecord]);
  };


  const handleRestore = (index) => {
    const record = history[index];
  
    setInputA(record.a);
    setInputB(record.b);
    setResult(record.result);


    
    const newHistory = history.slice(0, index + 1);
    setHistory(newHistory);
  };

  const isButtonDisabled = inputA === '' || inputB === '';

  return (
    <div className="calculator-section">
      <div className="input-group">
        <label>Liczba A:</label>
        <input 
          type="number" 
          value={inputA} 
          onChange={(e) => setInputA(e.target.value)} 
        />
      </div>
      <div className="input-group">
        <label>Liczba B:</label>
        <input 
          type="number" 
          value={inputB} 
          onChange={(e) => setInputB(e.target.value)} 
        />
      </div>

      <div className="buttons-row">
        <AppActionButton label="+" onClick={() => handleCalculate('+')} disabled={isButtonDisabled} />
        <AppActionButton label="-" onClick={() => handleCalculate('-')} disabled={isButtonDisabled} />
        <AppActionButton label="*" onClick={() => handleCalculate('*')} disabled={isButtonDisabled} />
        <AppActionButton label="/" onClick={() => handleCalculate('/')} disabled={isButtonDisabled} />
      </div>

      <div className="result-box">
        <strong>Wynik: </strong> {result}
      </div>

      <div className="compare-box">
        <strong>Porównanie: </strong> {compareMsg}
      </div>

      <AppCalculationHistory history={history} onRestore={handleRestore} />
    </div>
  );
}

export default AppCalculator;