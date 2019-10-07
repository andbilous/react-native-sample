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

type Props={}

type State = {
    userData:Object,
    cardNumber:number,
    cardType:string
}

class App extends React.Component<Props,State> {
  constructor(){
    super();
    this.state={
    userData:{},
    cardNumber: 111,
    cardType:''
    }
  }

  componentDidUpdate(prevProps:Props, prevState:State){
    if(prevState!==this.state){
      this.updateStateFromCardDetails=(cardType:string)=>{
    this.setState({cardType});
  }
    }
  }

  updateStateFromFormikUserInput = (userData:Object) =>{
    this.setState({userData});
  }
  updateStateFromCardDetails=(cardType:string)=>{
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
