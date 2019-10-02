import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {Formik} from 'formik';

class FormikUserOutput extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
    };
  }
  render() {
    const {userData} = this.props;
    console.log(userData);
    return (
      <View>
        <TextInput>FormikUserOutput</TextInput>
        {userData ? <TextInput>{Object.values(userData)}</TextInput> : ''}
      </View>
    );
  }
}

export default FormikUserOutput;
