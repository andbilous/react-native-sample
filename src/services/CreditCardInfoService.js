// flow
class CreditCardInfoService {
  constructor(creditCardInfo) {
    this.cardNumber = creditCardInfo.cardNumber ? creditCardInfo.cardNumber : 1;
    this.expDate = creditCardInfo.expDate ? creditCardInfo.expDate : 1;
    this.cvv = creditCardInfo.cvv ? creditCardInfo.cvv : '1';
    this.firstName = creditCardInfo.firstName ? creditCardInfo.firstName : '1';
    this.lastName = creditCardInfo.lastName ? creditCardInfo.lastName : '1';
    this.secretQuestion = creditCardInfo.secretQuestion ? creditCardInfo.secretQuestion : '1';
    this.secretAnswer = creditCardInfo.secretAnswer ? creditCardInfo.secretAnswer : '1';
    this.errors = [];
  }

  submit() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fn = this.validate() ? resolve : reject;
        fn();
      }, 2000);
    });
  }

  validate=() => {
    if (!/^[0-9]{16}(?:[0-9]{1})?$/.test(this.cardNumber)) {
      this.errors.push('cardNumber');
    }
    if (!/^[0-9]{3,4}$/.test(this.cvv)) {
      this.errors.push('cvv');
    }
    if (!/^\d{2}\/\d{2}$/.test(this.expDate)) {
      this.errors.push('expDate');
    }
    if (this.firstName.length < 5 || this.firstName.length > 50) {
      this.errors.push('firstName');
    }
    if (this.lastName.length < 5 || this.lastName.length > 50) {
      this.errors.push('lastName');
    }
    if (this.secretQuestion.length < 5 || this.secretQuestion.length > 50) {
      this.errors.push('secretQuestion');
    }
    if (this.secretAnswer.length < 5 || this.secretAnswer.length > 50) {
      this.errors.push('secretAnswer');
    }
    if (!this.errors.length) {
      return true;
    }
    return false;
  }

  getErrors() {
    return this.errors;
  }
}

export default CreditCardInfoService;
