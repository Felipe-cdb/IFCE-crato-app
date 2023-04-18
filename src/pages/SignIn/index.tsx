import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInAccount from './Login';
import ValidationCode from '../CodePages/ValidationCode';
import SucessValidation from '../CodePages/SucessValidation';

const signInStak = createStackNavigator();

export default function SignIn() {

  return (
    <signInStak.Navigator
      initialRouteName='create'
    >
      <signInStak.Screen
        name='create'
        component={SignInAccount}
        options={{
          headerShown: false
        }}
      />

      <signInStak.Screen
        name='validation'
        component={ValidationCode}
        options={{
          headerShown: false
        }}
      />
      
      <signInStak.Screen
        name='sucess'
        component={SucessValidation}
        options={{
          headerShown: false
        }}
      />
    </signInStak.Navigator>
  );
}