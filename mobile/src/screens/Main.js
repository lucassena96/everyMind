/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>EVERYMIND</Text>
      </View>
      <View style={styles.texts}>
          <Text style={styles.welcome}>Bem Vindo a Everymind!</Text>
          <Text style={styles.welcome}>Vamos enviar para o seu email as informações com os próximos passos.</Text>
          <Text style={[styles.welcome, {alignSelf: 'center', marginTop: 50, fontSize: 25}]}>Obrigado!</Text>
      </View>

      <View style={{width: '50%', height: '20%', alignSelf: 'center'}}>
        <LottieView source={require('../utils/gifs/89032-victory-sign-baby-astronaut.json')} autoPlay loop />
      </View>
    </View>

  );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2ecc71',
        flex: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    texts: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 400,
        padding: 20,
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 20,
        marginBottom: 20,
    },
});
