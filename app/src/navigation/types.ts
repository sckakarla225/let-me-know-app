export type RootStackParamList = {
  Landing: undefined;
  Onboarding: undefined;
  MainTabs: undefined;
};

export type LandingStackParamList = {
  Landing: undefined;
  PhoneAuth: undefined;
  PhoneVerification: undefined;
  FinishSetupOne: undefined;
  FinishSetupTwo: undefined;
}

export type OnboardingStackParamList = {
  Onboarding: undefined;
  EnableNotifications: undefined;
};

export type MainTabsParamList = {
  MyTrackersStack: undefined;
  DiscoverTrackersStack: undefined;
  ActivityAlertsStack: undefined;
  SettingsStack: undefined;
};

export type MyTrackersStackParamList = {
  MyTrackers: undefined;
  ViewTracker: { trackerId: string };
};

export type DiscoverTrackersStackParamList = {
  DiscoverTrackers: undefined;
  ViewDiscoveredTracker: { trackerId: string };
};

export type ActivityAlertsStackParamList = {
  ActivityAlerts: undefined;
  ViewAlert: { alertId: string };
};

export type SettingsStackParamList = {
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
};