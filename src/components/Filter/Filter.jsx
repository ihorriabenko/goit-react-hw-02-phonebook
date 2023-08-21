import React from 'react';
import s from './filter.module.css';

const Filter = ({ handleFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        placeholder="enter the name"
        onChange={handleFilter}
      ></input>
    </label>
  );
};

export default Filter;
