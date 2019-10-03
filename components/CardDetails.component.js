import React from 'react';
import { TextInput, View} from 'react-native';
import PropTypes from 'prop-types';

class CardDetails extends React.Component {
  componentDidMount(){
    this.props.getCardType(this.state.cardType);
    this.setState({cardType:this.props.cardNumber})
  }
  componentDidUpdate(prevProps,prevState){
    if (prevState.cardType!==this.state.cardType){
      this.props.getCardType(this.state.cardType);
    }
  }
  constructor() {
    super();
    this.state = {
      cardType: 'Visa Card',
      cardNumber:null
    };
    
  }
  static propTypes = {
    cardNumber:PropTypes.number,
    getCardType:PropTypes.func
  }
 
  static defaultProps = {
    cardType:'Visa',
    cardNumber:1
  }

  render() {
    const {cardNumber}= this.props;
    if (cardNumber>2000){
        this.setState({cardType:'Master Card'})
    }
    return (
        <View >
          <TextInput>Card Details Output</TextInput>
          <TextInput>{this.props.cardNumber}</TextInput>
        </View>
    );
  }
}

export default CardDetails;
