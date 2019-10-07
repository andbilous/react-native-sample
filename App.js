// @flow
import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  View,
  ScrollView,
} from 'react-native';
import FormikUserInput from './components/FormikUserInput.component';
import FormikUserOutput from './components/FormikUserOutput.component';
import CardTypeDefiner from './components/CardTypeDefiner.component';



type State = {
    userData:Object,
    cardNumber:number
}

class App extends React.Component<State> {
  constructor(){
    super();
    this.state={
    userData:{},
    cardNumber: 111,
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState!==this.state){
      this.updateStateFromCardDetails=cardType=>{
    this.setState({cardType});
  }
    }
  }

  updateStateFromFormikUserInput = (userData:Object) =>{
    this.setState({userData});
  }
  updateStateFromCardDetails=cardType=>{
    this.setState({cardType});
  }
  render(){
    return (
          <View>
          <FormikUserInput updateStateFromFormikUserInput={this.updateStateFromFormikUserInput}/>
          <FormikUserOutput dataToRenderFromApp={this.state.userData}/>
          </View>
         );
  }

}
export default App;
