import FormActionTypes from './form.types';


export const submitForm = formData => ({
  type: FormActionTypes.SUBMIT_FORM,
  payload: formData
});
