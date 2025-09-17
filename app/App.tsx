import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/navigation';
import { useUserStore } from './src/store';
import { StatusBar } from 'expo-status-bar';

import {
  LandingStack,
  OnboardingStack,
  MainTabs
} from './src/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const { isAuthenticated, user } = useUserStore();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isAuthenticated ? (
            // Show landing screens if not authenticated
            <Stack.Screen name="Landing" component={LandingStack} />
          ) : !user ? (
            // Show onboarding if authenticated but user is null (not set up)
            <Stack.Screen name="Onboarding" component={OnboardingStack} />
          ) : (
            // Show main app if authenticated and user is set up
            <Stack.Screen name="MainTabs" component={MainTabs} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
};
