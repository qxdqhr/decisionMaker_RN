import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleDecision from '../screens/SingleDecision';
import CoinFlip from './Coin/CoinFlip';

const Stack = createNativeStackNavigator();

export function SingleDecisionStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
        headerShadowVisible: false,
      }}>
      <Stack.Screen 
        name="SingleDecisionHome" 
        component={SingleDecision}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="CoinFlip" 
        component={CoinFlip}
        options={{ 
          title: '抛硬币',
          headerBackTitle: '返回',
        }}
      />
    </Stack.Navigator>
  );
} 