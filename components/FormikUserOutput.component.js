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
  // componentDidUpdate(prevState) {
  //   if (prevState.visible !== this.state.visible) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    const {userData} = this.props;
    console.log(userData);
    // setTimeout(() => {
    //   this.setState({visible: false});
    // }, 5000);
    return (
      <View>
        <TextInput>FormikUserOutput</TextInput>
        {userData ? <TextInput>{Object.values(userData)}</TextInput> : ''}
      </View>
    );
  }
}

export default FormikUserOutput;
