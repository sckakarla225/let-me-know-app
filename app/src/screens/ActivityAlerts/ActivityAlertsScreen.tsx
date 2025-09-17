import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ActivityAlertsScreenNavigationProp = NativeStackNavigationProp<any, 'ActivityAlertsScreen'>;

interface ActivityAlertsScreenProps {
  navigation: ActivityAlertsScreenNavigationProp;
};

export default function ActivityAlertsScreen({ navigation } : ActivityAlertsScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Activity Alerts Screen</Text>
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
