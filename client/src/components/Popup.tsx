import React from 'react';

export function Popup({ hBodyName, displayName, display, setDisplay }) {
  return (
    <form id="popup" style={{ display }}>
      <div className="close" onClick={() => setDisplay('none')}>X</div>
      <label htmlFor={hBodyName}>
        {`${displayName}:`}
      </label>
      <input
        type="text"
        name={hBodyName}
      />
      <button>send</button>
    </form>
  );
}

export function PopupRepeat({ hBodyName, displayName, display, setDisplay }) {

  return (
    <form id="popup" style={{ display }}>
      <header>Change:</header>
      <div className="close" onClick={() => setDisplay('none')}>X</div>
      <label htmlFor={hBodyName}>
        {`${displayName}:`}
      </label>
      <input
        type="text"
        name={hBodyName}
      />
      <label htmlFor={`${hBodyName}Repeat`}>
        {`repeat ${displayName}:`}
      </label>
      <input
        type="text"
        name={`${hBodyName}Repeat`}
      />
      <label htmlFor="password">
        password:
    </label>
      <input
        type="text"
        name="password"
      />
      <button>send</button>
    </form>
  )
}