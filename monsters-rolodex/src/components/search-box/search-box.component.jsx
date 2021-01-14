import React from 'react';

// Exercise 8: Create a SearchBox Component
export const SearchBox = ({ placeholder, handleChange }) => (
  <input type="search" placeholder={placeholder} onChange={handleChange} />
);
