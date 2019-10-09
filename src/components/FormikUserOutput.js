// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardTypeDefiner from './CardTypeDefiner';

type Props = {
    dataToRenderFromApp: Object
};

type State = {
     isVisible: boolean,
      timerId: Object,
      start: number,
      cardType: string
}

class FormikUserOutput extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      timerId: undefined,
      start: 0,
      cardType: '',
    };
  }

  startTimer = () => {
    const timerId = setTimeout(() => {
      this.setState({
        isVisible: false,
        timerId: false,
        start: 0,
      });
    }, 5000);

    this.setState({
      isVisible: true,
      timerId,
      start: Date.now(),
    });
  };

  componentDidUpdate(prevProps:Props, prevState:State) {
    if (prevProps.dataToRenderFromApp === this.props.dataToRenderFromApp) {
      return;
    }

    if (!this.state.isVisible) {
      return this.startTimer();
    }

    clearTimeout(this.state.timerId);
    this.startTimer();
  }

  render() {

    const {
      cardNumber, cvv, expDate, firstName,
      lastName, secretQuestion,
      secretAnswer,
    } = this.props.dataToRenderFromApp;
    if (!this.state.isVisible) return null;

      return (
        <View>
          <Text style={styles.header}>User Card Details</Text>
          <Text style={styles.label}>
Your Card Number :
            {cardNumber}
          </Text>
          <Text style={styles.label}>
Your CVV Code :
            {cvv}
          </Text>
          <Text style={styles.label}>
Your Expiration Date :
            {expDate}
          </Text>
          <Text style={styles.label}>
Your First Name :
            {firstName}
          </Text>
          <Text style={styles.label}>
Your Last Name :
            {lastName}
          </Text>
          <Text style={styles.label}>
Your Secret Question :
            {secretQuestion}
          </Text>
          <Text style={styles.label}>
Your Secret Answer :
            {secretAnswer}
          </Text>
          <CardTypeDefiner cardNumber={cardNumber} />
        </View>
      );
    }
}
const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    backgroundColor: '#2F95D6',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 3,
    paddingLeft: 130,
    marginBottom: 5
  },
  label: {
    backgroundColor: '#FFC2B5',
    marginBottom: 5
  }
});


export default FormikUserOutput;
