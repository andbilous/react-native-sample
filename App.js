// @flow
import React from 'react';
import { SafeAreaView,ActivityIndicator } from 'react-native';
import {connect} from 'react-redux';
import {FormikUserInput} from './src/components/FormikUserInput';
import {FormikUserOutput} from './src/components/FormikUserOutput';
import LongFlatList from './src/components/LongFlatList/LongFlatList';
import ProductForm from './src/components/ProductForm/ProductForm';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

type Props={ }

type State = {
    userData:Object,
    cardNumber:number
}

class App extends React.Component<Props, State> {

  constructor() {
    super();
    this.state = {
      userData: { }
    };
  }

  componentDidUpdate(prevProps:Props, prevState:State) {
    if (prevState !== this.state) {
      this.updateStateFromCardDetails = (cardType:string) => {
        this.setState({ cardType });
      };
    }
  }

  updateStateFromFormikUserInput = (userData:Object) => {
    this.setState({ userData });
  }

  updateStateFromCardDetails=(cardType:string) => {
    this.setState({ cardType });
  }

  render() {
    const {isLoading} = this.props;
    console.log(isLoading);
    return (
      <Provider store={store}>
      <SafeAreaView>
        <FormikUserInput />
        <ActivityIndicator size="large" color="#0000ff" />
        {/*<ProductForm />*/}
      </SafeAreaView>
      </Provider>
    );
  }
}
const AppContainer = connect(
  (state)=>({ isLoading:state.isLoading }),
)(App);

export default  AppContainer ;
