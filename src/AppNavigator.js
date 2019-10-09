import { createStackNavigator } from 'react-navigation';
import FormikUserInput from './components/FormikUserInput';

const AppNavigator = createStackNavigator({
  FormInput: { screen: FormikUserInput },
});

export default AppNavigator;
