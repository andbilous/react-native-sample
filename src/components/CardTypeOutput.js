import React from 'react';
import {
  StyleSheet, TextInput, View, Text
} from 'react-native';

type Props = {
  cardType: string,
}

const CardTypeOutput = ({ cardType }: Props) => (
  <View style={styles.container}>
    <Text>Card Type : </Text>
    <TextInput>{cardType}</TextInput>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CardTypeOutput;
