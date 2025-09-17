import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiscoverTrackersStackParamList } from './types';

import { DiscoverTrackersScreen, ViewDiscoveredTrackerScreen } from '../screens';

const Stack = createNativeStackNavigator<DiscoverTrackersStackParamList>();

export default function DiscoverTrackersStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="DiscoverTrackers" component={DiscoverTrackersScreen} />
      <Stack.Screen name="ViewDiscoveredTracker" component={ViewDiscoveredTrackerScreen} />
    </Stack.Navigator>
  );
};