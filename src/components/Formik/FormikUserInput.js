// @flow
import React from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  View, TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { submitForm } from '../../redux/creditCardInfo/creditCardInfo.actions';

type Props = {
  errors:[]
}

function FormikUserInput(props:Props) {
  return (
    <ScrollView style={styles.container}>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => { submitForm(values); }}
      >
        {(formikProps) => (
          <View style={styles.container}>
            <View>
              <Text>Card Number</Text>
              <TextInput
                placeholder="1111111111111111"
                style={!props.errors.includes('cardNumber') ? styles.inputStyle : styles.errorInputStyle}
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
                  style={!props.errors.includes('expDate') ? styles.inputStyle : styles.errorInputStyle}
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
                  style={!props.errors.includes('cvv') ? styles.inputStyle : styles.errorInputStyle}
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
                style={!props.errors.includes('firstName') ? styles.inputStyle : styles.errorInputStyle}
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
                style={!props.errors.includes('lastName') ? styles.inputStyle : styles.errorInputStyle}
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
                style={!props.errors.includes('secretQuestion') ? styles.inputStyle : styles.errorInputStyle}
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
                style={!props.errors.includes('secretAnswer') ? styles.inputStyle : styles.errorInputStyle}
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
  },
  errorInputStyle: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    marginBottom: 5,
    borderRadius: 6,
  }

});

const FormikUserInputContainer = connect(
  (state) => ({
    errors: state.creditCardInfoReducer.errors
  }), { submitForm }
)(FormikUserInput);

// eslint-disable-next-line import/prefer-default-export
export { FormikUserInputContainer as FormikUserInput };
