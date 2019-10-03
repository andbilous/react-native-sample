import React, {useState} from 'react';
import {Button, TextInput, View,FlatList,Text} from 'react-native';
import PropTypes from 'prop-types';

import CardDetails from './CardDetails.component';
import CardInfo from './CardInfo.component';

class FormikUserOutput extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }
 
  static defaultProps = {
    title: 'React'
  }

  constructor() {
    super();
    this.state = {
      isVisible: false,
      timerId: undefined,
      start: undefined,
      cardType:''
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
  setCardType = (cardType) => {
    console.log('Data from CHILD ::  ', cardType);
    this.setState({cardType});
}


  render() {
    const {userData} = this.props;
    if (this.state.isVisible) {
      return (
        <View>
          <TextInput>Formik User Output</TextInput>
          <TextInput>{Object.values(userData)}</TextInput>
          {/* <FlatList style={{flexDirection:"column"}}
          data={[Object.values(userData)]}
              renderItem={({item}) => <Text key={item}>{item}</Text>} /> */}
              <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
          <CardDetails cardNumber={userData.cardNumber} getCardType={this.setCardType}/>
          <CardInfo cardType={this.state.cardType}/>
        </View>
      );
    } else {
      return null;
    }
  }
}


export default FormikUserOutput;
