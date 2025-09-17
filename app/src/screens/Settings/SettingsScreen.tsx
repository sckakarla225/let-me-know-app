import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type SettingsScreenNavigationProp = NativeStackNavigationProp<any, 'SettingsScreen'>;

interface SettingsScreenProps {
  navigation: SettingsScreenNavigationProp;
};

export default function SettingsScreen({ navigation } : SettingsScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Settings Screen</Text>
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
