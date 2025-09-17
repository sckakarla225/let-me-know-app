import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ViewAlertScreenNavigationProp = NativeStackNavigationProp<any, 'ViewAlertScreen'>;

interface ViewAlertScreenProps {
  navigation: ViewAlertScreenNavigationProp;
  route: {
    params: {
      alertId: string;
    }
  }
};

export default function ViewAlertScreen({ navigation, route } : ViewAlertScreenProps) {
  const { alertId } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>View Alert Screen</Text>
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
