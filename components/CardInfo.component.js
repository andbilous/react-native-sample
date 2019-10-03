import React from 'react';
import { TextInput, View} from 'react-native';


const CardInfo = props => (
      <View>
        <TextInput>{`Card Info : ${props.cardType}  `}</TextInput>
      </View>
    );

export default CardInfo;
