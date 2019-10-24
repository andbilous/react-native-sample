
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardTypeOutput from './CardTypeOutput';

type Props = {
  cardNumber: number,
}

type State = {
  cardType: string,
  cardNumber: string,
}

class CardTypeDefiner extends React.PureComponent<Props, State> {
  render() {
    const { cardNumber } = this.props;
    const lastFourDigits = parseInt(
      cardNumber
        .toString()
        .substr(cardNumber.toString().length - 4, cardNumber.toString().length),
      10
    );
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
    backgroundColor: '#e39612',
  },
});

export default CardTypeDefiner;
