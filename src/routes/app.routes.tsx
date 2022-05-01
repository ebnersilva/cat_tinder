import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
import CatVoteScreen from '../pages/CatVoteScreen';
import SecondScreen from '../pages/SecondScreen';
import ThirdScreen from '../pages/ThirdScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="CatVoteScreen" component={CatVoteScreen} />
      <Screen name="SecondScreen" component={SecondScreen} />
      <Screen name="ThirdScreen" component={ThirdScreen} />
    </Navigator>
  );
}
