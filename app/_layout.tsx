import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { StyleSheet, Text } from 'react-native';
import { Stack } from 'expo-router';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name='(tabs)' options={{headerShown:false}}></Stack.Screen>
    </Stack>
  );
}

const style = StyleSheet.create({
  white:{
    color:"#ffffff"
  }
});
