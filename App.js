/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
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
import CardDetailsContext from './components/CardDetailsContext';
// import {Header} from 'react-native-elements';
import FormikUserInput from './components/FormikUserInput.component';
import UserInput from './components/UserInput.component';
import FormikUserOutput from './components/FormikUserOutput.component';
import UserOutput from './components/UserOutput.component';



class App extends React.Component {
  constructor(){
    super();
    this.state = {userData:{}};
  }

  onHandleSubmit = userData =>{
    console.log(userData);
    this.setState({
      userData,
    });

  }
  render(){
    const {userData} = this.state;
    return (
        <SafeAreaView  >
          <FormikUserInput onHandleSubmit={this.onHandleSubmit}/>
          {/* <UserInput /> */}
          <FormikUserOutput userData={userData}/>
          </SafeAreaView>
          );
  }

}
export default App;
