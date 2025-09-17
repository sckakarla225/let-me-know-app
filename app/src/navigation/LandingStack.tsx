import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingStackParamList } from './types';

import {
  LandingScreen,
  PhoneAuthScreen,
  PhoneVerificationScreen,
  FinishSetupOneScreen,
  FinishSetupTwoScreen
} from '../screens';

const Stack = createNativeStackNavigator<LandingStackParamList>();

export default function LandingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="PhoneAuth" component={PhoneAuthScreen} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerificationScreen} />
      <Stack.Screen name="FinishSetupOne" component={FinishSetupOneScreen} />
      <Stack.Screen name="FinishSetupTwo" component={FinishSetupTwoScreen} />
    </Stack.Navigator>
  );
};