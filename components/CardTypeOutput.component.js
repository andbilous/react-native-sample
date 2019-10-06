// @flow
import React from 'react';
import { TextInput, View} from 'react-native';


type Props = {
  cardType:string
};

const  CardTypeOutput = ({ cardType }: Props) => (
    <View>
        <TextInput>{`Card Type : ${cardType}`}</TextInput>
      </View>
)

export default CardTypeOutput;
