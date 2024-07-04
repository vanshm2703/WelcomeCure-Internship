// components/Button.js
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

export default Button;
