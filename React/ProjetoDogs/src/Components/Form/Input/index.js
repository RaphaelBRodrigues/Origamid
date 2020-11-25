import React from 'react';
import styles from './input.module.css';

function Input({ label, type, name, value, onChange, error, validate }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
        onBlur={() => validate()}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
