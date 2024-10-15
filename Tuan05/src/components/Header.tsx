import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
interface HeaderProps {
  mau: string;
  cungcap: string;
  gia: string;
  image: any;
}
const Header: React.FC<HeaderProps> = ({ mau, cungcap, gia, image }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Image source={image} />
      <View style={{ marginTop: 10, marginLeft: 10 }}>
        <Text style={{ fontSize: 18 }}>Điện Thoại Vsmart Joy 3</Text>
        <Text style={{ fontSize: 18 }}>Hàng Chính Hãng</Text>
        <Text>Màu: {mau}</Text>
        <Text>Cung cấp bởi {cungcap}</Text>
        <Text>{gia}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    padding: 10,
    paddingBottom: 30,
    flexDirection: "row",
    width: "100%",
  },
});
export default Header;
