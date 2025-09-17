import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type FinishSetupOneScreenNavigationProp = NativeStackNavigationProp<any, 'FinishSetupOneScreen'>;

interface FinishSetupOneScreenProps {
  navigation: FinishSetupOneScreenNavigationProp;
};

export default function FinishSetupOneScreen({ navigation } : FinishSetupOneScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Finish Setup One Screen</Text>
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
