import React from 'react';

function AppActionButton(props) {
  return (
    <button 
      className="action-btn"
      onClick={props.onClick}
      disabled={props.disabled} 
    >
      {props.label}
    </button>
  );
}

export default AppActionButton;