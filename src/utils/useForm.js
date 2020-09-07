import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log('useEffect',useEffect);
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
   console.log(event);
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    console.log('handleChange',values);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  
  }
};

export default useForm;