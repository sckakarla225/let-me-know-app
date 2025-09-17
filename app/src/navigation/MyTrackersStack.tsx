import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyTrackersStackParamList } from './types';

import { MyTrackersScreen, ViewTrackerScreen } from '../screens';

const Stack = createNativeStackNavigator<MyTrackersStackParamList>();

export default function MyTrackersStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="MyTrackers" component={MyTrackersScreen} />
      <Stack.Screen name="ViewTracker" component={ViewTrackerScreen} />
    </Stack.Navigator>
  );
};