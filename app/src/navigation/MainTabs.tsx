import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { MainTabsParamList } from './types';

import MyTrackersStack from './MyTrackersStack';
import DiscoverTrackersStack from './DiscoverTrackersStack';
import ActivityAlertsStack from './ActivityAlertsStack';
import SettingsStack from './SettingsStack';

const Tab = createBottomTabNavigator<MainTabsParamList>();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'MyTrackersStack') {
            return <MaterialIcons name="radar" size={size} color={color} />;
          } else if (route.name === 'DiscoverTrackersStack') {
            return <Ionicons name="compass" size={size} color={color} />;
          } else if (route.name === 'ActivityAlertsStack') {
            return <Ionicons name="notifications" size={size} color={color} />;
          } else if (route.name === 'SettingsStack') {
            return <Ionicons name="settings" size={size} color={color} />;
          } else {
            return <Ionicons name="help-outline" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#DDDDDD',
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="MyTrackersStack"
        component={MyTrackersStack}
        options={{ title: 'My Trackers' }}
      />
      <Tab.Screen 
        name="DiscoverTrackersStack"
        component={DiscoverTrackersStack}
        options={{ title: 'Discover Trackers' }}
      />
      <Tab.Screen 
        name="ActivityAlertsStack"
        component={ActivityAlertsStack}
        options={{ title: 'Activity Alerts' }}
      />
      <Tab.Screen 
        name="SettingsStack"
        component={SettingsStack}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  )
}