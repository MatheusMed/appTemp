import React from 'react';
import { NavigationContainer,DarkTheme } from '@react-navigation/native';
import Router from './src/Router';
import { StatusBar } from 'react-native';

export default () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar hidden={true} />
      <Router />
    </NavigationContainer>
  );
}