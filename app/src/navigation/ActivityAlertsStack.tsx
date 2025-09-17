import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityAlertsStackParamList } from './types';

import { ActivityAlertsScreen, ViewAlertScreen } from '../screens';

const Stack = createNativeStackNavigator<ActivityAlertsStackParamList>();

export default function ActivityAlertsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="ActivityAlerts" component={ActivityAlertsScreen} />
      <Stack.Screen name="ViewAlert" component={ViewAlertScreen} />
    </Stack.Navigator>
  );
};