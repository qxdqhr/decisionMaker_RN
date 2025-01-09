/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MultiDecision from './src/screens/MultiDecision';
import Settings from './src/screens/Settings';
import { SingleDecisionStack } from './src/SingleDecision/SingleDecisionStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#0066cc',
          tabBarInactiveTintColor: '#666666',
          headerShown: true,
          tabBarIcon: ({focused, color, size}) => {
            let iconName = 'help-circle';
            switch (route.name) {
              case 'SingleDecision':
                iconName = 'person';
                break;
              case 'MultiDecision':
                iconName = 'people';
                break;
              case 'Settings':
                iconName = 'settings';
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen 
          name="SingleDecision" 
          component={SingleDecisionStack}
          options={{
            title: '单人决策',
            tabBarLabel: '单人决策'
          }}
        />
        <Tab.Screen 
          name="MultiDecision" 
          component={MultiDecision}
          options={{
            title: '多人决策',
            tabBarLabel: '多人决策'
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings}
          options={{
            title: '设置',
            tabBarLabel: '设置'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
