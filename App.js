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
// import {Header} from 'react-native-elements';
import FormikUserInput from './components/FormikUserInput';
import UserInput from './components/UserInput.component';
import FormikUserOutput from './components/FormikUserOutput.component';
import UserOutput from './components/UserOutput.component';


class App extends React.Component {
  constructor(){
    super();
    this.state = {userData:{}};
  }
  componentDidUpdate(prevState){
    if (prevState.userData !== this.state.userData){
      return true;
    }
    return false;
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
      <SafeAreaView style={{marginTop: 90}} >
          <FormikUserInput onHandleSubmit={this.onHandleSubmit}/>
          {/* <UserInput /> */}
          <FormikUserOutput userData={userData}/>
          </SafeAreaView>
          );
  }

}
export default App;
