import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import Header from "../components/Header";
import { ScreenList } from "../const";

const Screen2 = () => {
  const navigation = useNavigation<NavigationProp<ScreenList>>();
  const [mau, setMau] = useState("Xanh");
  const [cungcap, setCungCap] = useState("Shoppe");
  const [gia, setGia] = useState("1.790.000đ");
  const [image, setImage] = useState(require("../assets/vs_bluesmaill.png"));
  const [url, setUrl] = useState(require("../assets/vs_blue.png"));
  return (
    <View style={styles.container}>
      <Header mau={mau} cungcap={cungcap} gia={gia} image={image} />
      <View style={styles.header}>
        <Text style={{ fontSize: 18 }}>Chọn 1 màu bên dưới:</Text>
        <View style={styles.images}>
          <Pressable
            onPress={() => {
              setMau("Xanh"),
                setCungCap("Shoppe"),
                setGia("1.790.000đ"),
                setImage(require("../assets/vs_bluesmaill.png"));
              setUrl(require("../assets/vs_blue.png"));
            }}
          >
            <Image
              style={styles.img}
              source={require("../assets/Rectangle 4.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setMau("Đỏ"),
                setCungCap("Tiki Trading"),
                setGia("1.790.000đ"),
                setImage(require("../assets/vs_red_a 1.png"));
              setUrl(require("../assets/vs_red_a.png"));
            }}
          >
            <Image
              style={styles.img}
              source={require("../assets/Rectangle 5.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setMau("Đen"), setCungCap("Shoppe"), setGia("1.790.000đ");
              setUrl(require("../assets/vs_red_a.png"));
            }}
          >
            <Image
              style={styles.img}
              source={require("../assets/Rectangle 6.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setMau("Xanh Dương"),
                setCungCap("Tiki Trading"),
                setGia("1.790.000đ");
              setUrl(require("../assets/vs_red_a.png"));
            }}
          >
            <Image
              style={styles.img}
              source={require("../assets/Rectangle 7.png")}
            />
          </Pressable>
        </View>
        <Text>{url}</Text>
        <Pressable
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Home"),
              {
                url: url,
              };
          }}
        >
          <Text style={{ color: "black" }}>Xong</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#C4C4C4",
    flexDirection: "column",
    width: "100%",
    height: "75%",
  },
  images: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "white",
    width: "80%",
    marginLeft: "10%",
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    marginTop: 20,
  },
  img: {
    marginTop: 10,
  },
});
export default Screen2;
