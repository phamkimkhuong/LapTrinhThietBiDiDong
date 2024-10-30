import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <Text style={styles.title}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View>
        <Image source={require("../assets/bifour.png")} />
      </View>
      <View>
        <Text style={styles.name}>POWER BIKE SHOP</Text>
      </View>
      <Pressable style={styles.btn} onPress={() => {}}>
        <Text>Get Start</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: "VT323",
  },
  name: {},
  btn: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;
