import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import {
  useNavigation,
  NavigationProp,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import { ScreenList } from "../const";

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  var url = require("../assets/vs_blue.png");
  // if (route.params?.url) {
  url = route.params;
  // }
  // // get url from Screen2.tsx form useState
  // useEffect(() => {
  //   if (route.params) {
  //     setUrl(route.params);
  //   }
  // }, [route.params]);
  return (
    <View style={styles.container}>
      <Text>{url} a</Text>
      <Image source={url} />
      <Text style={{ fontSize: 18 }}>
        Điện thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={styles.body}>
        <View style={styles.danhgia}>
          <View style={{ flexDirection: "row", marginRight: 30 }}>
            <Image source={require("../assets/star.png")} />
            <Image source={require("../assets/star.png")} />
            <Image source={require("../assets/star.png")} />
            <Image source={require("../assets/star.png")} />
            <Image source={require("../assets/star.png")} />
          </View>
          <Text style={{ fontSize: 15 }}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.gia}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>1.790.000đ</Text>
          <Text style={{ textDecorationLine: "line-through", marginLeft: 30 }}>
            1.790.000đ
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "red", marginRight: 10 }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Image source={require("../assets/Group 1.png")} />
        </View>
        <View style={{ width: "100%", marginTop: 10 }}>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate("Screen2")}
          >
            <Text style={{ color: "black" }}>CHỌN 4 MÀU</Text>
          </Pressable>
          <Image
            style={styles.image}
            source={require("../assets/Vector.png")}
          />
        </View>
      </View>
      <View style={{ width: "85%" }}>
        <Button title="CHỌN MUA" color={"red"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    width: "80%",
    marginBottom: 50,
  },
  gia: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  danhgia: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  btn: {
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
export default HomeScreen;
