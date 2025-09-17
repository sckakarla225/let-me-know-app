import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DiscoverTrackersScreenNavigationProp = NativeStackNavigationProp<any, 'DiscoverTrackersScreen'>;

interface DiscoverTrackersScreenProps {
  navigation: DiscoverTrackersScreenNavigationProp;
};

export default function DiscoverTrackersScreen({ navigation } : DiscoverTrackersScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Discover Trackers Screen</Text>
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
