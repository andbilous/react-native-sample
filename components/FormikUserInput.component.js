
// @flow
import React,{useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
  View,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';


const validationSchema = yup.object().shape({
  cardNumber: yup.string().matches(/^[0-9]{16}(?:[0-9]{1})?$/,'Incorrect card number format').required().label('Card Number'),
  expDate: yup.string().matches(/[\d]{2}\/[\d]{2}/,'Exp Date format mm/yy').required().label('Expiration Date'),
  cvv: yup.string().matches(/^[0-9]{3,4}$/,'CVV code format is 3 or 4 digits').required().label('CVV'),
  firstname: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  secretQuestion: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  secretAnswer: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

type Props = {
  updateStateFromFormikUserInput: (Object)=>Object
};


 function FormikUserInput({updateStateFromFormikUserInput}:Props) {
  
  const [formFilled, setformFilled] = useState(false);
  return (
    <ScrollView style={styles.container}>
     <Formik
       onSubmit={(values, actions) => {
         updateStateFromFormikUserInput(values);
       }}

       validationSchema={validationSchema} >
       {formikProps => (
          <View style={styles.container}>
           <View>
             <Text>Card Number</Text>
             <TextInput
               placeholder="4111111111111111"
               style={{
                 borderWidth: 1,
                 borderColor: 'blue',
                 padding: 10,
                 marginBottom: 3,
               }}
               onChangeText={formikProps.handleChange('cardNumber')}
               onBlur={formikProps.handleBlur('cardNumber')}
               autoFocus
             />
             <Text style={{ color: 'red' }}>
               {formikProps.touched.cardNumber && formikProps.errors.cardNumber}
             </Text>
           </View>

           <View style={{width:220}}>
             <Text>Expiration Date</Text>
             <TextInput
               placeholder="12/20"
               style={{
                 borderWidth: 1,
                 borderColor: 'blue',
                 padding: 10,
                 marginBottom: 3,
               }}
               onChangeText={formikProps.handleChange('expDate')}
               onBlur={formikProps.handleBlur('expDate')}

             />
             <Text style={{ color: 'red' }}>
               {formikProps.touched.expDate && formikProps.errors.expDate}
             </Text>
           </View>

           <View style={styles.cvvField}>
             <Text style={{ marginBottom: 3 }}>CVV</Text>
             <TextInput
               placeholder="331"
               style={{
                 borderWidth: 1,
                 borderColor: 'blue',
                 padding: 10,
                 marginBottom: 3,
               }}
               onChangeText={formikProps.handleChange('cvv')}
               onBlur={formikProps.handleBlur('cvv')}

             />
             <Text style={{ color: 'red' }}>
               {formikProps.touched.cvv && formikProps.errors.cvv}
             </Text>
           </View>

           <View>
             <Text >First Name</Text>
             <TextInput
               placeholder="firstname"
               style={{
                  borderWidth: 1,
                 borderColor: 'blue',
                 padding: 10,
                 marginBottom: 3,
               }}
               onChangeText={formikProps.handleChange('firstname')}
               onBlur={formikProps.handleBlur('firstname')}

             />
             <Text style={{ color: 'red' }}>
               {formikProps.touched.firstname && formikProps.errors.firstname}
             </Text>
           </View>

           <View >
             <Text style={{ marginBottom: 3 }}>Last Name</Text>
             <TextInput
               placeholder="lastName"
               style={{
                 borderWidth: 1,
                 borderColor: 'blue',
                 padding: 10,
                 marginBottom: 3,
               }}
               onChangeText={formikProps.handleChange('lastName')}
               onBlur={formikProps.handleBlur('lastName')}
             />
             <Text style={{ color: 'red' }}>
               {formikProps.touched.lastName && formikProps.errors.lastName}
             </Text>
           </View>

           <View>
             <Text style={{ marginBottom: 3 }}>Secret Question</Text>
             <TextInput
               placeholder="secretQuestion"
               style={{
                 borderWidth: 1,
                 borderColor: 'blue',
                 padding: 10,
                 marginBottom: 3,
               }}
               onChangeText={formikProps.handleChange('secretQuestion')}
               onBlur={formikProps.handleBlur('secretQuestion')}
             />
             <Text style={{ color: 'red' }}>
               {formikProps.touched.secretQuestion && formikProps.errors.secretQuestion}
             </Text>
           </View>

           <View>
             <Text style={{ marginBottom: 3 }}>Secret Answer</Text>
             <TextInput
               placeholder="secretAnswer"
               style={{
                  borderWidth: 1,
                 borderColor: 'blue',
                 padding: 10,
                 marginBottom: 3,
               }}
               onChangeText={formikProps.handleChange('secretAnswer')}
               onBlur={formikProps.handleBlur('secretAnswer')}
             />
             <Text style={{ color: 'red' }}>
               {formikProps.touched.secretAnswer && formikProps.errors.secretAnswer}
             </Text>
           </View>
           <View>
           <TouchableOpacity style={styles.button} onPress={formikProps.handleSubmit} disabled={!formFilled}>
           <Text>Submit Form</Text></TouchableOpacity>
           </View>
          {formikProps.isValid ?  setformFilled(true) : null}
          </View>
       )}
     </Formik>
  </ScrollView>
  );
 }


 const styles = StyleSheet.create({
   container:{
     margin: 20,
     shadowColor:'red',
     shadowOpacity:0.3,
     shadowRadius: 2
   },
   button:{
   color: '#fff',
textTransform: 'uppercase',
backgroundColor: '#ed3330',
padding: 20,
borderRadius: 5,
paddingLeft:120
   },
   cvvField:{
     width:80,
     marginTop:-76,
     alignSelf:'flex-end'
   }
 });


export default FormikUserInput;
