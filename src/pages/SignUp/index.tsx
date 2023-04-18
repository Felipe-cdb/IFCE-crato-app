import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateAccount from './CreateAccount';
import ValidationCode from '../CodePages/ValidationCode';
import SucessValidation from '../CodePages/SucessValidation';

const signUpStak = createStackNavigator();

export default function SignUp() {

  return (
    <signUpStak.Navigator
      initialRouteName='create'
    >
      <signUpStak.Screen
        name='create'
        component={CreateAccount}
        options={{
          headerShown: false
        }}
      />

      <signUpStak.Screen
        name='validation'
        component={ValidationCode}
        options={{
          headerShown: false
        }}
      />
      
      <signUpStak.Screen
        name='sucess'
        component={SucessValidation}
        options={{
          headerShown: false
        }}
      />
    </signUpStak.Navigator>
  );
}