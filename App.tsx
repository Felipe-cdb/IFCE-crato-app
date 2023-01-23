// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import AuthProvider from './src/context/auth';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';

export default function App() {
  return (
    
    <NavigationContainer>
      <AuthProvider>
        <StackNavigation />
      </AuthProvider>
    </NavigationContainer>
  );
}