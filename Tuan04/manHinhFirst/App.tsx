import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  Linking,
} from 'react-native';

const App = () => {
  const [check, setCheck] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>LOGIN</Text>
        <Text>{check}</Text>
      </View>
      <View style={styles.body}>
        <View>
          <TextInput
            style={{
              height: 35,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: '#DCBB3B',
            }}
            placeholder="Name"
            onChangeText={(newText) => setName(newText)}
            value={name}
          />
          <TextInput
            style={{
              height: 35,
              borderWidth: 1,
              marginTop: 20,
              backgroundColor: '#DCBB3B',
            }}
            placeholder="Password"
            onChangeText={(newText) => setPass(newText)}
            value={pass}
          />
        </View>
        <View>
          <Button
            color="black"
            title="LOGIN"
            onPress={() => {
              if (name == 'khuong' && pass == '123') {
                setCheck('Đăng nhập thành công');
                setName('');
                setPass('');
              } else setCheck('Đăng nhập thất bại!');
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <Text
            onPress={() => {
              Linking.openURL('https://www.facebook.com/');
            }}>
            Forgot your password?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#F2C401',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-evenly',
  },
});
