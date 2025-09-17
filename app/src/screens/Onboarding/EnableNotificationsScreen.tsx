import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type EnableNotificationsScreenNavigationProp = NativeStackNavigationProp<any, 'EnableNotificationsScreen'>;

interface EnableNotificationsScreenProps {
  navigation: EnableNotificationsScreenNavigationProp;
};

export default function EnableNotificationsScreen({ navigation } : EnableNotificationsScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Enable Notifications Screen</Text>
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
