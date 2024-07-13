import React from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="form-check form-switch position-fixed top-0 end-0 m-4">
      <input
        className="form-check-input"
        type="checkbox"
        id="darkModeToggle"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label className="form-check-label text-white" htmlFor="darkModeToggle">
        Dark Mode
      </label>
    </div>
  );
};

export default DarkModeToggle;
