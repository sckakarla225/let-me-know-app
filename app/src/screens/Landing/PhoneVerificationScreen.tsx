import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PhoneVerificationScreenNavigationProp = NativeStackNavigationProp<any, 'PhoneVerificationScreen'>;

interface PhoneVerificationScreenProps {
  navigation: PhoneVerificationScreenNavigationProp;
};

export default function PhoneVerificationScreen({ navigation } : PhoneVerificationScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Phone Verification Screen</Text>
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
