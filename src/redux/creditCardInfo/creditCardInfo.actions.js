// flow
import FormActionTypes from './creditCardInfo.types';
import CreditCardInfoService from '../../services/CreditCardInfoService';

// eslint-disable-next-line import/prefer-default-export
export const submitForm = (creditCardInfoData) => (dispatch) => {
  dispatch(submitFormRequest());
  const creditCardService = new CreditCardInfoService(creditCardInfoData);
  creditCardService.submit()
    .then(() => { dispatch(submitFormSuccess('Form Submitted')); })
    .catch(() => { dispatch(submitFormFailure(creditCardService.getErrors())); });
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
