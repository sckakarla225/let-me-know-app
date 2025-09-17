import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type MyTrackersScreenNavigationProp = NativeStackNavigationProp<any, 'MyTrackersScreen'>;

interface MyTrackersScreenProps {
  navigation: MyTrackersScreenNavigationProp;
};

export default function MyTrackersScreen({ navigation } : MyTrackersScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>My Trackers Screen</Text>
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
