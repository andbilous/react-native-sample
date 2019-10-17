// @flow
import React from 'react';
import { SafeAreaView } from 'react-native';
import FormikUserInput from './src/components/FormikUserInput';
import FormikUserOutput from './src/components/FormikUserOutput';
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
    const { userData } = this.state;
    return (
      <Provider store={store}>
      <SafeAreaView>
        <FormikUserInput updateStateFromFormikUserInput={this.updateStateFromFormikUserInput} />
        <FormikUserOutput dataToRenderFromApp={userData} />
        {/*<ProductForm />*/}
      </SafeAreaView>
      </Provider>
    );
  }
}
export default App;
