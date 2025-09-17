import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type FinishSetupTwoScreenNavigationProp = NativeStackNavigationProp<any, 'FinishSetupTwoScreen'>;

interface FinishSetupTwoScreenProps {
  navigation: FinishSetupTwoScreenNavigationProp;
};

export default function FinishSetupTwoScreen({ navigation } : FinishSetupTwoScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Finish Setup Two Screen</Text>
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
