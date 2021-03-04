import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
//import { AppLoading } from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Routes from './src/router'

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  //if (!fontsLoaded) {
   // return <AppLoading />;
 //}
  return (
    <>
      <StatusBar style="dark" backgroundColor="#fff" translucent={false} />
    <Routes/>
    </>
  );
}
