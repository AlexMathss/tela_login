import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';

export default function App() {
  return (
    <NavigationContainer>
      
        <StatusBar backgroundColor="#38A69D" barStyle="light-content"/>
        <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(12,10,18,0.9)'}}>
          <Routes/>
        </SafeAreaView>
       
      
    </NavigationContainer>
  );
}


