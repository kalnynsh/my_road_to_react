import React from 'react';
import './index.css';

const Search = ({
  value,
  onChange,
  onSubmit,
  children
}) => (
  <form onSubmit={onSubmit}>
  <input type="text"
    value={value}
    onChange={onChange}
  />
  <button type="submit">
    {children}
  </button>
</form>
);

export default Search;
