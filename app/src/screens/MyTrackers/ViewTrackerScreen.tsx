import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ViewTrackerScreenNavigationProp = NativeStackNavigationProp<any, 'ViewTrackerScreen'>;

interface ViewTrackerScreenProps {
  navigation: ViewTrackerScreenNavigationProp;
  route: {
    params: {
      trackerId: string;
    }
  }
};

export default function ViewTrackerScreen({ navigation, route } : ViewTrackerScreenProps) {
  const { trackerId } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>View Tracker Screen</Text>
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
