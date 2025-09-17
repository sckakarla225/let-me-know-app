import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ViewDiscoveredTrackerScreenNavigationProp = NativeStackNavigationProp<any, 'ViewDiscoveredTrackerScreen'>;

interface ViewDiscoveredTrackerScreenProps {
  navigation: ViewDiscoveredTrackerScreenNavigationProp;
  route: {
    params: {
      trackerId: string;
    }
  }
};

export default function ViewDiscoveredTrackerScreen({ navigation, route } : ViewDiscoveredTrackerScreenProps) {
  const { trackerId } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>View Discovered Tracker Screen</Text>
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
