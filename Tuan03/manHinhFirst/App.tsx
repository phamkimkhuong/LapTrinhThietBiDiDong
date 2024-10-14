import React from 'react';
import { Button,View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('images/img1.png')}
          style={{ width: 150, height: 150 }}
        />
      </View>
      <View style={styles.setFlex}>
        <Text>GROWN</Text>
        <Text>YOUR BUSINESS</Text>
      </View>
      <View style={styles.setFlex}>
        <Text>We will help you to grow your business using online server</Text>
      </View>
      <View style={styles.setButton}>
        <Button title="Log IN" color="#E3C000"/>
        <Button title="SiGN UP" color="#E3C000"/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#00CCF9',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  setFlex:{
    display:"flex",
    alignItems:"center",
  },
  setButton:{
    display:"flex",
    width:"100%",
    flexDirection:"row",
    justifyContent: "space-around"
  },
});

export default App;
