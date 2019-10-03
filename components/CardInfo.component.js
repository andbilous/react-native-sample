import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import CardDetailsContext from './CardDetailsContext';

const CardInfo = () => (
  <CardDetailsContext.Consumer>
    {context => (
      <View>
        <TextInput>Card INfo</TextInput>
        <TextInput>{context.length}</TextInput>
      </View>
    )}
  </CardDetailsContext.Consumer>
);
export default CardInfo;
