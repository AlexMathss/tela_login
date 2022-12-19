import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';

export default function App() {
  return (
    <NavigationContainer>
      
        <StatusBar backgroundColor="#38A69D" barStyle="dark-content"/>
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <Routes/>
        </SafeAreaView>
       
      
    </NavigationContainer>
  );
}


