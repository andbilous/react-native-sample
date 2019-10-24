/* eslint-disable react/destructuring-assignment */
//  @flow
import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import { FormikUserInput } from './FormikUserInput';
import FormikUserOutput from './FormikUserOutput';

type Props = {
  isLoading:boolean,
  submitResult:()=>{}
}

const Formik = (props:Props) => (
  <View>
    {props.isLoading ? (
      <>
        <FormikUserInput />
        <ActivityIndicator />
      </>
    ) : (
      <>
        <FormikUserInput />
        <FormikUserOutput submitResult={props.submitResult} />
      </>
    )}
  </View>
);
const FormikContainer = connect(
  (state) => ({
    isLoading: state.creditCardInfoReducer.isLoading,
    submitResult: state.creditCardInfoReducer.submitResult
  })
)(Formik);

// eslint-disable-next-line import/prefer-default-export
export { FormikContainer as Formik };
