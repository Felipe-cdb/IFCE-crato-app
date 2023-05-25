import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInAccount from './Login';
import ValidationCode from '../CodePages/ValidationCode';
import SucessValidation from '../CodePages/SucessValidation';
import ResetPassWord from './ResetPassWord';

const signInStak = createStackNavigator();

export default function SignIn() {

  return (
    <signInStak.Navigator
      initialRouteName='login'
    >
      <signInStak.Screen
        name='login'
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
      
      <signInStak.Screen
        name='resetPass'
        component={ResetPassWord}
        options={{
          headerShown: false
        }}
      />
    </signInStak.Navigator>
  );
}