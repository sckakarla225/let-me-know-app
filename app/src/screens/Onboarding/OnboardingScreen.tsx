import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type OnboardingScreenNavigationProp = NativeStackNavigationProp<any, 'OnboardingScreen'>;

interface OnboardingScreenProps {
  navigation: OnboardingScreenNavigationProp;
};

export default function OnboardingScreen({ navigation } : OnboardingScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Onboarding Screen</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
