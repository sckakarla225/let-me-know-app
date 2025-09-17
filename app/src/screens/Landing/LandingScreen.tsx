import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type LandingScreenNavigationProp = NativeStackNavigationProp<any, 'LandingScreen'>;

interface LandingScreenProps {
  navigation: LandingScreenNavigationProp;
};

export default function LandingScreen({ navigation } : LandingScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Landing Screen</Text>
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
