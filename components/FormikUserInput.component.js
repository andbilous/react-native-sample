/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React,{useState} from 'react';
import {
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
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



 function FormikUserInput(props){
  const [formFilled, setformFilled] = useState(false);
  return (
    <ScrollView >
     <Formik
       // initialValues={{
       //   cardNumber:1111111111111111,expDate:'12/20',cvv:123,firstname:'James',lastName:'Lam',secretQuestion:'Question',secretAnswer:'Answer',
       // }}

       onSubmit={(values, actions) => {
         props.onHandleSubmit(values);
       }}
       
       validationSchema={validationSchema} >
       {formikProps => (
         <React.Fragment>
           <View style={styles.container}>
             <Text style={{ marginBottom: 3 }}>CardNumber</Text>
             <TextInput
               placeholder="4111111111111111"
               style={{
                 borderWidth: 1,
                 borderColor: 'black',
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

           <View >
             <Text style={{ marginBottom: 3 }}>Expiration Date</Text>
             <TextInput
               placeholder="12/20"
               style={{
                 borderWidth: 1,
                 borderColor: 'black',
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

           <View>
             <Text style={{ marginBottom: 3 }}>CVV</Text>
             <TextInput
               placeholder="331"
               style={{
                 borderWidth: 1,
                 borderColor: 'black',
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
                 borderColor: 'black',
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
                 borderColor: 'black',
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
                 borderColor: 'black',
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
                 borderColor: 'black',
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
           <View><Button title="Submit" onPress={formikProps.handleSubmit} disabled={!formFilled}/></View>

          {formikProps.isValid ?  setformFilled(true) : null}
          {/* {formikProps.isSubmitting ? <ActivityIndicator/>  : null} */}

           {/* {formikProps.isSubmitting ? (
             <ActivityIndicator />
             setformFilled(true);
           ) : (
             <Button title="Submit" onPress={formikProps.handleSubmit} disabled={formFilled}/>
           )} */}
         </React.Fragment>
       )}
     </Formik>
  </ScrollView>
  );
 }

 const styles = StyleSheet.create({
   container:{
     justifyContent: 'space-around',
   },
 });
export default FormikUserInput;
