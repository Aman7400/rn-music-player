
import * as React from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { ActivityIndicator, View } from 'react-native';



function App() {

  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <View style={{flex:1}}>
      <ActivityIndicator style={{flex: 1}} />
    </View>;
  }

  return (
    <>
      <MainNavigation />
    </>
  );
}

export default App;