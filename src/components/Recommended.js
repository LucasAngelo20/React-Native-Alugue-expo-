import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function Recomended(props) {
  return (
    <ImageBackground
      source={props.cover}
      style={styles.container}
      blurRadius={2}
    >
      <Text style={[styles.house, styles.shadow]}>{props.house}</Text>
      <Text style={[styles.description, styles.shadow]}>{props.offer}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 230,
    marginRight: 20,
    marginBottom: 40,
    opacity: 0.8,
    backgroundColor: "#000",
    marginLeft: 3,
    padding: 12,
    marginTop: 20,
    borderRadius:2,
    
    //Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.80,
    shadowRadius: 2,
    elevation: 3,
    //Shadow
  },
  house: {
    fontFamily: "Montserrat_700Bold",
    color: "#FFF",
    fontSize: 15,
  },
  description: {
    fontSize: 12,
    fontFamily: "Montserrat_700Bold",
    color: "#FFF",
  },
  shadow: {
    textShadowOffset: { width: 1, height: 2 },
    textShadowColor: "#000",
    textShadowRadius: 3,
  },
});
