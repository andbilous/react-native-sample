/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import * as yup from 'yup';
import {Formik,Form,Field} from 'formik';


const validationSchema = yup.object().shape({
  cardNumber: yup.number().required().label('Card Number').
  test('length','Should have 16 digits', val => val.toString().length === 5),
  expDate: yup.string().required().label('Expiration Date').matches(/[\d]{2}\/[\d]{2}/,'Exp Date format mm/yy'),
  cvv: yup.number().required().label('CVV').min(3,'CVV should contain 3 or 4 digits').max(4,'CVV should contain 3 or 4 digits'),
  firstname: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  secretQuestion: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  secretAnswer: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});


 const FormikUserInput = props => (
   <ScrollView>
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        props.onHandleSubmit(values);
      }}
      validationSchema={validationSchema} >
      {formikProps => (
        <React.Fragment>
          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Text style={{ marginBottom: 3 }}>CardNumber</Text>
            <TextInput
              placeholder="1111"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
              }}
              onChangeText={formikProps.handleChange('cardNumber')}
              onBlur={formikProps.handleBlur('cardNumber')}
              autoFocus
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.cardNumber && formikProps.errors.cardNumber}
            </Text>
          </View>

          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Text style={{ marginBottom: 3 }}>Expiration Date</Text>
            <TextInput
              placeholder="expDate"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
              }}
              onChangeText={formikProps.handleChange('expDate')}
              onBlur={formikProps.handleBlur('expDate')}

            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.expDate && formikProps.errors.expDate}
            </Text>
          </View>

          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Text style={{ marginBottom: 3 }}>CVV</Text>
            <TextInput
              placeholder="cvv"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
              }}
              onChangeText={formikProps.handleChange('cvv')}
              onBlur={formikProps.handleBlur('cvv')}

            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.cvv && formikProps.errors.cvv}
            </Text>
          </View>

          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Text style={{ marginBottom: 3 }}>First Name</Text>
            <TextInput
              placeholder="firstname"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
              }}
              onChangeText={formikProps.handleChange('firstname')}
              onBlur={formikProps.handleBlur('firstname')}

            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.firstname && formikProps.errors.firstname}
            </Text>
          </View>

          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Text style={{ marginBottom: 3 }}>Last Name</Text>
            <TextInput
              placeholder="lastName"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
              }}
              onChangeText={formikProps.handleChange('lastName')}
              onBlur={formikProps.handleBlur('lastName')}
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.lastName && formikProps.errors.lastName}
            </Text>
          </View>

          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Text style={{ marginBottom: 3 }}>Secret Question</Text>
            <TextInput
              placeholder="secretQuestion"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
              }}
              onChangeText={formikProps.handleChange('secretQuestion')}
              onBlur={formikProps.handleBlur('secretQuestion')}
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.secretQuestion && formikProps.errors.secretQuestion}
            </Text>
          </View>

          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Text style={{ marginBottom: 3 }}>Secret Answer</Text>
            <TextInput
              placeholder="secretAnswer"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
              }}
              onChangeText={formikProps.handleChange('secretAnswer')}
              onBlur={formikProps.handleBlur('secretAnswer')}
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.secretAnswer && formikProps.errors.secretAnswer}
            </Text>
          </View>

          {formikProps.isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <Button title="Submit" onPress={formikProps.handleSubmit} />
          )}
        </React.Fragment>
      )}
    </Formik>
 </ScrollView>
 );
export default FormikUserInput;
