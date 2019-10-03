import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import CardDetailsContext from './CardDetailsContext';
import CardInfo from './CardInfo.component';

class CardDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      cardType: 'MS',
    };
  }

  render() {
    return (
      <CardDetailsContext.Provider value={{cardType: this.state.cardType}}>
        <View>
          <TextInput>Card Details Output</TextInput>
          <TextInput>{this.props.cardNumber}</TextInput>
        </View>
      </CardDetailsContext.Provider>
    );
  }
}

export default CardDetails;
