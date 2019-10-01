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
} from 'react-native';
import * as yup from 'yup';
// import FormikUserInput from './components/FormikUserInput';
// import UserInput from './components/UserInput.component';
import {Formik,Form,Field} from 'formik';


const validationSchema = yup.object().shape({
  cardNumber: yup
    .number()
    .required()
    .label('Card Number'),
});
 const FormikUserInput = props => (
   <ScrollView> 
     <Formik
   initialValues={{
     firstName: '',
     lastName: '',
     email: '',
   }}
   validationSchema={validationSchema}
   onSubmit={values => {
     // same shape as initial values
     console.log(values);
   }}
 >
   {({ errors, touched }) => (
     <Form>
       <Field name="cardNumber" />
       {errors.firstName && touched.firstName ? (
         <div>{errors.firstName}</div>
       ) : null}
       <Field name="lastName" />
       {errors.lastName && touched.lastName ? (
         <div>{errors.lastName}</div>
       ) : null}
       <Field name="email" type="email" />
       {errors.email && touched.email ? <div>{errors.email}</div> : null}
       <button type="submit">Submit</button>
     </Form>
   )}
 </Formik></ScrollView>
 );
export default FormikUserInput;
