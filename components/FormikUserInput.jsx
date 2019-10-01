import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';

 const FormikUserInput = props => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}
  >
    {props => (
      <View>
        <TextInput
          onChangeText={props.handleChange('email')}
          onBlur={props.handleBlur('email')}
          value={props.values.email}
        />
        <Button onPress={props.handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default FormikUserInput;