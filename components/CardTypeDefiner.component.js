// @flow
import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import CardTypeOutput from './CardTypeOutput.component';

type Props = {
  cardNumber:number
};

type State = {
  cardType: string,
  cardNumber:string
}

class CardTypeDefiner extends React.Component<Props, State> {
  static defaultProps = {
    cardNumber: 111111111111111
  }

  render() {
    const { cardNumber } = this.props;
    const lastFourDigits = parseInt(cardNumber.toString().substr(cardNumber.toString().length - 4, cardNumber.toString().length));
    const cardType = lastFourDigits < 2000 ? 'MasterCard' : 'Visa';
    return (
      <View style={styles.container}>
        <CardTypeOutput cardType={cardType} />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e39612'
  }
});

export default CardTypeDefiner;
