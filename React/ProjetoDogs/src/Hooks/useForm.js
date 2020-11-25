import React from 'react';

const types = {
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Preencha um email válido',
  },
};

function useForm(type) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);

  function validate() {
    if (type === false) return true;

    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (type && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(false);
      return true;
    }
  }

  function onChange({ target }) {
    setValue(target.value);

    if (error) validate();
  }

  return {
    value,
    validate,
    onChange,
    error,
  };
}

export default useForm;
