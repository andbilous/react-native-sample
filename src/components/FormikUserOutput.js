//  @flow
import React from 'react';
import { connect } from 'react-redux';
import { Text, View,Alert } from 'react-native';

const FormikUserOutput = ({isLoading,submitResult}) =>{
  Alert.alert('IS LOADING : '+isLoading)
  if(isLoading){
    return <View><Text>Spinner {submitResult}</Text></View>
  }
  return <View><Text>Not Spinner  {submitResult}</Text></View>
};

const FormikUserOutputContainer = connect(
  (state)=>({ isLoading:state.isLoading, submitResult:state.submitResult }),{})(FormikUserOutput)

export  {FormikUserOutputContainer as FormikUserOutput};





// // @flow
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import CardTypeDefiner from './CardTypeDefiner';
//
// type Props = {
//     dataToRenderFromApp: Object
// };
//
// type State = {
//      isVisible: boolean,
//       timerId: Object,
//       cardType: string
// }
//
// class FormikUserOutput extends React.Component<Props, State> {
//   constructor() {
//     super();
//     this.state = {
//       isVisible: false,
//       timerId: undefined
//     };
//   }
//
//   componentDidUpdate(prevProps:Props) {
//     const { dataToRenderFromApp } = this.props;
//     const { timerId, isVisible } = this.state;
//     if (prevProps.dataToRenderFromApp === dataToRenderFromApp) {
//       return;
//     }
//
//     if (!isVisible) {
//       return this.startTimer();
//     }
//
//     clearTimeout(timerId);
//     this.startTimer();
//   }
//
//   startTimer = () => {
//     const timerId = setTimeout(() => {
//       this.setState({
//         isVisible: false,
//         timerId: false,
//         start: 0,
//       });
//     }, 5000);
//
//     this.setState({
//       isVisible: true,
//       timerId,
//       start: Date.now(),
//     });
//   };
//
//   render() {
//     const { dataToRenderFromApp } = this.props;
//     const { isVisible } = this.state;
//     const {
//       cardNumber, cvv, expDate, firstName,
//       lastName, secretQuestion,
//       secretAnswer,
//     } = dataToRenderFromApp;
//     if (!isVisible) return null;
//
//     return (
//       <View>
//         <Text style={styles.header}>User Card Details</Text>
//         <View style={styles.valuesContainer}>
//           <Text style={styles.label}>Your Card Number :</Text>
//           <Text style={styles.value}>{cardNumber}</Text>
//         </View>
//
//         <View style={styles.valuesContainer}>
//           <Text style={styles.label}>Your CVV Code :</Text>
//           <Text style={styles.value}>{cvv}</Text>
//         </View>
//
//         <View style={styles.valuesContainer}>
//           <Text style={styles.label}>Your Expiration Date :</Text>
//           <Text style={styles.value}>
//             {' '}
//             {expDate}
//           </Text>
//         </View>
//
//         <View style={styles.valuesContainer}>
//           <Text style={styles.label}>Your First Name :</Text>
//           <Text style={styles.value}>{firstName}</Text>
//         </View>
//
//         <View style={styles.valuesContainer}>
//           <Text style={styles.label}>Your Last Name :</Text>
//           <Text style={styles.value}>{lastName}</Text>
//         </View>
//
//         <View style={styles.valuesContainer}>
//           <Text style={styles.label}>Your Secret Question :</Text>
//           <Text style={styles.value}>{secretQuestion}</Text>
//         </View>
//
//         <View style={styles.valuesContainer}>
//           <Text style={styles.label}>Your Secret Answer :</Text>
//           <Text style={styles.value}>{secretAnswer}</Text>
//         </View>
//         <CardTypeDefiner cardNumber={cardNumber} />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   header: {
//     fontSize: 18,
//     backgroundColor: '#2F95D6',
//     borderBottomColor: '#ffffff',
//     borderBottomWidth: 3,
//     textAlign: 'center',
//     marginBottom: 2
//   },
//   valuesContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   },
//   label: {
//     backgroundColor: '#FFC2B5',
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
//   value: {
//     textAlign: 'center'
//   }
// });
//
//
// export default FormikUserOutput;
