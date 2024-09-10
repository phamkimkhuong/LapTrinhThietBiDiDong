import React from 'react';
import {
  Button,
  View,
  ViewStyle,
  TextInput,
  Text,
  StyleSheet,
  Image,
  ImageStyle,
  Linking,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>LOGIN</Text>
      </View>
      <View style={styles.setFlex}>
        <TextInput style={styles.setInput} placeholder="Email" />
        <TextInput style={styles.setInput2} placeholder="Password" />
      </View>
      <View style={{ width: '95%' }}>
        <Button title="LOGIN" color="red" />
      </View>
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <Text>When you agree to terms and conditions</Text>
        <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('')}>
          For got your password?
        </Text>
        <Text>Or login with</Text>
      </View>
      <View style={styles.setButton}>
        <View
          style={{
            width: '31%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#275A8D',
          }}>
          <Image source={require('images/icofb.png')} />
        </View>
        <View style={{ backgroundColor: '#1593C5' }}>
          <Image source={require('images/zalo.png')} />
        </View>
        <View
          style={{
            width: '31%',
            borderColor: 'gradient',
            borderWidth: '1px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#D8EFDE',
          }}>
          <Image source={require('images/google.png')} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8EFDE',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  setInput: {
    padding: 8,
    backgroundColor: '#C4C4C4',
  },
  setInput2: {
    padding: 8,
    backgroundColor: '#C4C4C4',
    marginTop: '10px',
  },
  setFlex: {
    width: '95%',
  },
  setButton: {
    display: 'flex',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
