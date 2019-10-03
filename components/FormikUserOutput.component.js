import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {Formik} from 'formik';

import CardDetails from './CardDetails.component';
import CardInfo from './CardInfo.component';

class FormikUserOutput extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      timerId: undefined,
      start: undefined,
    };
  }
  startTimer = () => {
    const timerId = setTimeout(() => {
      console.log('clear');
      this.setState({
        isVisible: false,
        timerId: false,
        start: undefined,
      });
    }, 5000);
    this.setState({
      isVisible: true,
      timerId,
      start: Date.now(),
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userData === this.props.userData) {
      return;
    }
    if (!this.state.isVisible) {
      return this.startTimer();
    }
    const timerId = this.state.timerId;
    clearTimeout(timerId);
    this.startTimer();
  }

  render() {
    const {userData} = this.props;
    if (this.state.isVisible) {
      return (
        <View>
          <TextInput>FormikUserOutput</TextInput>
          <TextInput>{Object.values(userData)}</TextInput>
          <CardDetails cardNumber={userData.cardNumber} />
          <CardInfo />
        </View>
      );
    } else {
      return null;
    }
  }
}

export default FormikUserOutput;
