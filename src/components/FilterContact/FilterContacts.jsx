import React from 'react';
import css from './FilterContacts.module.css';

const FilterContacts = ({ value, onChange }) => {
  return (
    <form className={css.formContainer}>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id="search"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </form>
  );
};

export default FilterContacts;