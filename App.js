import React from 'react';
import {SafeAreaView, TextInput, Button, ActivityIndicator} from 'react-native';
import FormikUserInput from './components/FormikUserInput';
import UserInput from './components/UserInput.component';

export default function App() {
  return (
    <SafeAreaView>
      {/* <FormikUserInput /> */}
      <UserInput />
    </SafeAreaView>
  );
}
