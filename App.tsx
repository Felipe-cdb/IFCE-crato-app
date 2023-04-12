import React from 'react';
import FlashMessage from 'react-native-flash-message';

import AuthProvider from './src/context/auth';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
          <FlashMessage position={'top'}/>
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}