import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import New from "../components/New";
import House from "../components/House";
import Recommended from "../components/Recommended";

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="#000" />
          <TextInput
            placeholder="O que está procurando?"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <New
          cover={require("../assets/house1.jpg")}
          name="Casa de praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorad 24horas"
          onPress={() => navigation.navigate("detail")}
        />
        <New
          cover={require("../assets/house2.jpg")}
          name="Casa de praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorad 24horas"
          onPress={() => navigation.navigate("detail")}
        />
        <New
          cover={require("../assets/house3.jpg")}
          name="Casa moderna"
          description="Casa nova uma quadra do mar, lugar seguro e monitorad 24horas"
          onPress={() => navigation.navigate("detail")}
        />
        <New
          cover={require("../assets/house4.jpg")}
          name="Casa de festas"
          description="Casa nova uma quadra do mar, lugar seguro e monitorad 24horas"
          onPress={() => navigation.navigate("detail")}
        />
        <New
          cover={require("../assets/house5.jpg")}
          name="Casa de campo"
          description="Casa nova uma quadra do mar, lugar seguro e monitorad 24horas"
          onPress={() => navigation.navigate("detail")}
        />
        <New
          cover={require("../assets/house6.jpg")}
          name="Casa hostel"
          description="Casa nova uma quadra do mar, lugar seguro e monitorad 24horas"
          onPress={() => navigation.navigate("detail")}
        />
      </ScrollView>
      <View
        style={{ flexDirection: "row", marginBottom: 10, alignItems: "center" }}
      >
        <Text style={[styles.title, { marginTop: 20 }]}>Próximo de você</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <House cover={require("../assets/house6.jpg")} />
        <House cover={require("../assets/house5.jpg")} />
        <House cover={require("../assets/house4.jpg")} />
        <House cover={require("../assets/house3.jpg")} />
        <House cover={require("../assets/house2.jpg")} />
        <House cover={require("../assets/house1.jpg")} />
      </ScrollView>

      <Text style={[styles.title, { marginTop: 20 }]}>Dica do dia</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <Recommended
          cover={require("../assets/house3.jpg")}
          house="Casa Floripa"
          offer="20% OFF"
        />
        <Recommended
          cover={require("../assets/house4.jpg")}
          house="Casa São Paulo"
          offer="25% OFF"
        />
        <Recommended
          cover={require("../assets/house2.jpg")}
          house="Casa Rio de Janeiro"
          offer="10% OFF"
        />
        <Recommended
          cover={require("../assets/house6.jpg")}
          house="Casa Curitiba"
          offer="30% OFF"
        />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "98%",
    backgroundColor: "#fff",

    //Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    //Shadow

    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input: {
    fontFamily: "montserrat_500Medium",
    paddingHorizontal: 10,
    fontSize: 13,
    width: "90%",
  },
  contentNew: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#4f4a4a",
  },
});
