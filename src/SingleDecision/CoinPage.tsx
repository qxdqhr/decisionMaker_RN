import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleDecision from '../screens/SingleDecision';
import CoinFlip from './Coin/CoinFlip';

const Stack = createNativeStackNavigator();

interface ScreenOptions {
  headerShown?: boolean;
  headerStyle?: {
    backgroundColor: string;
  };
  headerShadowVisible?: boolean;
}

const defaultScreenOptions: ScreenOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: '#f5f5f5',
  },
  headerShadowVisible: false,
};

export function CoinPage() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
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