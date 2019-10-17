import FormActionTypes from './form.types';

const initialValue = {
  cardNumber: undefined,
  expDate: undefined,
  cvv: undefined,
  firstName:'',
  lastName: '',
  secretQuestion: '',
  secretAnswer: '',
}
//   cardNumber: yup.string().matches(/^[0-9]{16}(?:[0-9]{1})?$/, 'Incorrect card number format').required().label('Card Number'),
//   expDate: yup.string().matches(/^\d{2}\/\d{2}$/, 'Exp Date format mm/yy').required().label('Expiration Date'),
//   cvv: yup.string().matches(/^[0-9]{3,4}$/, 'CVV code format is 3 or 4 digits').required().label('CVV'),
//   firstName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
//   lastName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
//   secretQuestion: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
//   secretAnswer: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),

export const formReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FormActionTypes.SUBMIT_FORM:
      return {
        ...state,
        formData: action.payload,
      }

    default:
      return state
  }
}
