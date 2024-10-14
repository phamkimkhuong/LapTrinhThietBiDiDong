import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import { Button } from '@rneui/themed';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('images/usb.png')}
          style={{
            width: 60,
            height: 60,
          }}
        />
        <Text style={styles.setText}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={styles.setText}>Cực kì hài lòng</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image source={require('images/Star.png')} style={styles.setImage} />
          <Image source={require('images/Star.png')} style={styles.setImage} />
          <Image source={require('images/Star.png')} style={styles.setImage} />
          <Image source={require('images/Star.png')} style={styles.setImage} />
          <Image source={require('images/Star.png')} style={styles.setImage} />
        </View>
      </View>
      <View style={styles.importImage}>
        <Image
          source={require('images/camera.png')}
          style={{
            position:"absolute",
            left:"35%",
            // right:100
            
          }}
        />
        <Button
          title="Thêm hình ảnh"
          titleStyle={{
            color: 'black',
          }}
          buttonStyle={{
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
          }}
          containerStyle={{
            flex: 1,
            // width:'100%' 
          }}
        />
      </View>

      <View>
        <TextInput
          multiline={true}
          numberOfLines={5}
          placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
          style={[
            styles.setText,
            {
              borderWidth: 1,
              color: '#C4C4C4',
            },
          ]}
        />
        <Text>https://meet.google.com/nsj-ojwi-xpp</Text>
      </View>
      <View>
        <Button title="Gửi" />
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
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  setText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  setImage: {
    width: 60,
    height: 60,
  },
  importImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:"center"
  },
});
