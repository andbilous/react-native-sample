


// {"cardNumber": "1231231231231231",
// "cvv": "222", "expDate": "12/22",
// "firstName": "Sdgsdg", "lastName": "Sdgsdg",
// "secretAnswer": "Xcvcxvc", "secretQuestion": "Xcvxcv"}

//
// cardNumber: yup.string().matches(/^[0-9]{16}(?:[0-9]{1})?$/, 'Incorrect card number format').required().label('Card Number'),
//   expDate: yup.string().matches(/^\d{2}\/\d{2}$/, 'Exp Date format mm/yy').required().label('Expiration Date'),
//   cvv: yup.string().matches(/^[0-9]{3,4}$/, 'CVV code format is 3 or 4 digits').required().label('CVV'),
//   firstName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
//   lastName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
//   secretQuestion: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
//   secretAnswer: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),

const minLength=2;
const maxLength=50;

export function validateCardNumber(cardNumber) {
  if(/^[0-9]{16}(?:[0-9]{1})?$/.test(cardNumber)){
    return true;
  }
  return false;
}

export function validateCvv(cvv) {
  if(/^[0-9]{3,4}$/.test(cvv)){
    return true;
  }
  return false;
}

export function validateExpDate(expDate) {
  if(/^\d{2}\/\d{2}$/.test(cvv)){
    return true;
  }
  return false;
}

export function validateStringInput(input) {
    if(input.length >= minLength && input.length <= maxLength) {
      return true;
    }
    return false;
}


