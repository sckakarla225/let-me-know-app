import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PhoneAuthScreenNavigationProp = NativeStackNavigationProp<any, 'PhoneAuthScreen'>;

interface PhoneAuthScreenProps {
  navigation: PhoneAuthScreenNavigationProp;
};

export default function PhoneAuthScreen({ navigation } : PhoneAuthScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Phone Auth Screen</Text>
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
