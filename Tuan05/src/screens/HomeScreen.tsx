import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../assets/vs_blue.png")} />
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
          <Button title="4 MÀU-CHỌN MÀU" />
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
});
export default HomeScreen;
