import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ValidationCode from './ValidationCode';
import CreateAccount from './CreateAccount';
import SucessValidation from './SucessValidation';

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