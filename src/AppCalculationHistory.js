import React from 'react';

function AppCalculationHistory({ history, onRestore }) {
  if (history.length === 0) return null;

  return (
    <div className="history-section">
      <h3>Historia działań</h3>
      <table className="history-table">
        <thead>
          <tr>
            <th>Liczba A</th>
            <th>Działanie</th>
            <th>Liczba B</th>
            <th>Wynik</th>
            <th>Akcja</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.a}</td>
              <td>{item.op}</td>
              <td>{item.b}</td>
              <td>{item.result}</td>
              <td>
                <button 
                  className="restore-btn"
                  onClick={() => onRestore(index)}
                >
                  Przywróć
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppCalculationHistory;