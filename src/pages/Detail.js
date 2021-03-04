import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Stars from "react-native-stars";

import SwiperComponent from "../components/Swiper";

export default function Details() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>
      <View style={styles.headerContent}>
        <View style={{ width: "65%" }}>
          <Text>Casa de Praia</Text>
        </View>
        <View style={{ width: "35%" }}>
          <Text>Avaliações</Text>
          <View style={{ alignItems: "center", flex: "row" }}>
            <Stars
              default={4}
              count={5}
              half={true}
              starSize={20}
              fullStar={
                <Ionicons name="md-star" size={24} style={styles.myStarStyle} />
              }
              emptyStar={
                <Ionicons name="md-star-outline" size={24} style={styles.myStarStyle} />
              }
              halfStar={
                <Ionicons name="md-star" size={24} style={styles.myStarStyle} />
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  swiperContent: {
    flexDirection: "row",
    height: 340,
    width: "100%",
  },
  headerContent:{
      
  }
});
