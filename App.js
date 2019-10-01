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
          {/* <UserOutput/> */}
          </SafeAreaView>
          );
  }

}
export default App;

    /* <Formik
        initialValues={{
          cardNumber: '',
          expDate: '',
          cvv: '',
          firstName: '',
          lastName: '',
          secretQuestion: '',
          secretAnswer: '',
        }}
        onSubmit={values => console.log(values)}>
        {props => (
          <View>
            <TextInput
              onChangeText={props.handleChange('carNumber')}
              onBlur={props.handleBlur('cardNumber')}
              value={props.values.cardNumber}
              keyboardType={'numeric'}
            />
            <TextInput
              value={props.values.expDate}
              onChangeText={props.handleChange('expDate')}
              placeholder="exp Date"
              secureTextEntry={true}
              keyboardType={'numeric'}
            />
            <TextInput
              value={props.values.cvv}
              onChangeText={props.handleChange('cvv')}
              placeholder="cvv"
              secureTextEntry={true}
              keyboardType={'numeric'}
            />
            <TextInput
              value={props.values.firstName}
              onChangeText={props.handleChange('firstName')}
              placeholder="firstName"
              secureTextEntry={true}
            />
            <TextInput
              value={props.values.lastName}
              onChangeText={props.handleChange('lastName')}
              placeholder="lastName"
              secureTextEntry={true}
            />
            <TextInput
              value={props.values.secretQuestion}
              onChangeText={props.handleChange('secretQuestion')}
              placeholder="secretQuestion"
              secureTextEntry={true}
            />
            <TextInput
              value={props.values.secretAnswer}
              onChangeText={props.handleChange('secretAnswer')}
              placeholder="secretAnswer"
              secureTextEntry={true}
            />
            <Button onPress={props.handleSubmit} title="Submit" />
          </View>
        )}
      </Formik> */


