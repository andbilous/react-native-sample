/* eslint-disable react/destructuring-assignment */
//  @flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const FormikUserOutput = ({ submitResult }) => (
  <View>
    <Text style={submitResult.toLowerCase().includes('error')
      ? styles.titleError : styles.titleSubmit}
    >
      {submitResult}

    </Text>
  </View>
);
const styles = StyleSheet.create({
  titleSubmit: {
    fontSize: 18,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 3,
    textAlign: 'center',
    marginBottom: 2
  },
  titleError: {
    fontSize: 18,
    backgroundColor: 'red',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 3,
    textAlign: 'center',
    marginBottom: 2
  }
});
export default FormikUserOutput;
