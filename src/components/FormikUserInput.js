
// @flow
import React from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
  View, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
// import * as yup from 'yup';
import { Formik } from 'formik';
// import {Login} from '../server/ApiCalls';
import {validateCardNumber,validateCvv,validateExpDate,validateStringInput} from '../Validation';
import {submitForm} from '../redux/form/form.actions';


// const validationSchema = yup.object().shape({
//   cardNumber: yup.string().matches(/^[0-9]{16}(?:[0-9]{1})?$/, 'Incorrect card number format').required().label('Card Number'),
//   expDate: yup.string().matches(/^\d{2}\/\d{2}$/, 'Exp Date format mm/yy').required().label('Expiration Date'),
//   cvv: yup.string().matches(/^[0-9]{3,4}$/, 'CVV code format is 3 or 4 digits').required().label('CVV'),
//   firstName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
//   lastName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
//   secretQuestion: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
//   secretAnswer: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
// });

type Props = {
 // updateStateFromFormikUserInput: (Object)=>Object
  submitForm: Function
};


function FormikUserInput({ submitForm }:Props) {
  return (
    <ScrollView style={styles.container}>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => {
        submitForm(values);
        }}
        validate={(values)=>{
          if(validateCardNumber(values.cardNumber)){

          }
          if(validateCvv(values.cvvField)){

          }
          if(validateExpDate(values.expDate)){

          }
          if(validateStringInput(values.firstName)){

          }
          if(validateStringInput(values.lastName)){

          }
          if(validateStringInput(values.secretQuestion)){

          }
          if(validateStringInput(values.secretAnswer)){

          }

        }
        }

        // validationSchema={validationSchema}
      >
        {(formikProps) => (
          <View style={styles.container}>
            <View>
              <Text>Card Number</Text>
              <TextInput
                placeholder="1111111111111111"
                style={styles.inputStyle}
                onChangeText={formikProps.handleChange('cardNumber')}
                onBlur={formikProps.handleBlur('cardNumber')}
                autoFocus
              />
              <Text style={styles.errorTextStyle}>
                {formikProps.errors.cardNumber}
              </Text>
            </View>
            <View style={styles.flexRow}>
              <View style={{ width: '60%' }}>
                <Text>Expiration Date</Text>
                <TextInput
                  placeholder="12/20"
                  style={styles.inputStyle}
                  onChangeText={formikProps.handleChange('expDate')}
                  onBlur={formikProps.handleBlur('expDate')}
                />
                <Text style={{ color: 'red' }}>
                  {formikProps.errors.expDate}
                </Text>
              </View>

              <View style={styles.cvvField}>
                <Text>CVV</Text>
                <TextInput
                  placeholder="331"
                  style={styles.inputStyle}
                  onChangeText={formikProps.handleChange('cvv')}
                />
                <Text style={{ color: 'red' }}>
                  {formikProps.errors.cvv}
                </Text>
              </View>
            </View>

            <View>
              <Text>First Name</Text>
              <TextInput
                placeholder="firstName"
                style={styles.inputStyle}
                onChangeText={formikProps.handleChange('firstName')}
                onBlur={formikProps.handleBlur('firstName')}
              />
              <Text style={{ color: 'red' }}>
                {formikProps.errors.firstName}
              </Text>
            </View>

            <View>
              <Text style={styles.inputLabel}>Last Name</Text>
              <TextInput
                placeholder="lastName"
                style={styles.inputStyle}
                onChangeText={formikProps.handleChange('lastName')}
                onBlur={formikProps.handleBlur('lastName')}
              />
              <Text style={{ color: 'red' }}>
                {formikProps.errors.lastName}
              </Text>
            </View>

            <View>
              <Text style={styles.inputLabel}>Secret Question</Text>
              <TextInput
                placeholder="secretQuestion"
                style={styles.inputStyle}
                onChangeText={formikProps.handleChange('secretQuestion')}
                onBlur={formikProps.handleBlur('secretQuestion')}
              />
              <Text style={{ color: 'red' }}>
                {formikProps.errors.secretQuestion}
              </Text>
            </View>

            <View>
              <Text style={styles.inputLabel}>Secret Answer</Text>
              <TextInput
                placeholder="secretAnswer"
                style={styles.inputStyle}
                onChangeText={formikProps.handleChange('secretAnswer')}
                onBlur={formikProps.handleBlur('secretAnswer')}
              />
              <Text style={styles.errorTextStyle}>
                {formikProps.errors.secretAnswer}
              </Text>
            </View>

            <View>
              <TouchableHighlight style={styles.button} underlayColor="grey" onPress={formikProps.handleSubmit}>
                <Text style={styles.buttonText}>Submit Form</Text>
              </TouchableHighlight>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    margin: 20,
    lineHeight: 1
  },
  inputLabel: {
    marginBottom: 3
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 5,
    borderRadius: 6,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 6,
    marginTop: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cvvField: {
    width: 80
  },
  errorTextStyle: {
    color: 'red',
    marginBottom: 5
  }
});

const mapDispatchToProps = dispatch => ({
  submitForm: values => dispatch(submitForm(values)),
});

export default connect(null,mapDispatchToProps())(FormikUserInput);
