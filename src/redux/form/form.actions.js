import FormActionTypes from './form.types';
import {API_SUBMIT_FORM} from '../../services/ApiCalls';


export  const submitForm = formData  => (dispatch, getState)=> {
  dispatch(submitFormRequest());
  API_SUBMIT_FORM(formData).then(()=>{
    dispatch(submitFormSuccess('Success'))
  }).catch(dispatch(submitFormFailure('Error')))
};

const submitFormRequest = () => ({
  type: FormActionTypes.SUBMIT_FORM_REQUEST
});

 const submitFormSuccess = (result) => ({
  type: FormActionTypes.SUBMIT_FORM_SUCCESS,
  payload: result
});


const submitFormFailure = (err) => ({
  type: FormActionTypes.SUBMIT_FORM_FAILURE,
  payload: err
});
