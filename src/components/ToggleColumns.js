import React from 'react'

export const ToggleColumns = ({ onCheckboxClick, columns }) => {
  const onCheckboxClicked = (e) => {
    onCheckboxClick(e.target.name, e.target.checked)
  }

  return (
    <div className="toggle-columns">
      { 
        Object.keys(columns).map((column, index) => {
          return ( 
          <div key={index}>
            <label htmlFor={column}>
              {column}
            </label>
            <input
              id={column}
              name={column}
              type="checkbox"
              onCheckboxClick={onCheckboxClicked}
              checked={columns[column]}
              />
          </div>)
        })
      }
    </div>
  );
}
