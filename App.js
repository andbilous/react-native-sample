/* eslint-disable no-unused-vars */
// @flow
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { Formik } from './src/components/Formik/Formik';
import ProductForm from './src/components/ProductForm/ProductForm';
import { store } from './src/redux/store';


class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <ProductForm />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
