import { StatusBar } from 'expo-status-bar';
import React from 'react';
import FlashMessage from 'react-native-flash-message';

import AuthProvider from './src/context/auth';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <AuthProvider>
          <StackNavigation />
          <FlashMessage position={'top'}/>
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}