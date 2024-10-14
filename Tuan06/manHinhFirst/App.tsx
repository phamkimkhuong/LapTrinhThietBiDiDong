import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  Button,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ca nau lau, nau mi',
    shop: 'Shop',
    button: 'Chat',
    linkImg: require('images/ca_nau_lau.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '1KG kho ga bo toi',
    shop: 'Shop',
    button: 'Chat',
    linkImg: require('images/ga_bo_toi.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Xe can cau da nang',
    shop: 'Shop',
    button: 'Chat',
    linkImg: require('images/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Mo hinh dang do choi',
    shop: 'Shop',
    button: 'Chat',
    linkImg: require('images/xa_can_cau.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Lãnh đạo giản đơn',
    shop: 'Shop',
    button: 'Chat',
    linkImg: require('images/lanh_dao_gian_don.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d88',
    title: 'Hiếu lòng con trẻ',
    shop: 'Shop',
    button: 'Chat',
    linkImg: require('images/hieu_long_con_tre.png'),
  },
];

const Item = ({ obj }) => (
  <View style={styles.item}>
    <View>
      <Image source={obj.linkImg} />
    </View>
    <View>
      <Text style={styles.title}>{obj.title}</Text>
      <Text style={styles.title}>{obj.shop}</Text>
    </View>
    <View>
      <Button title={obj.button} />
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item obj={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,

  },
  title: {
    fontSize: 13,
  },
});

export default App;
