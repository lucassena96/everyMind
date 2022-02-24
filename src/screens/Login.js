/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.title}>EVERYMIND</Text>
        <TextInput placeholder="Usuário" style={styles.inputText} />
        <TextInput placeholder="Senha" style={styles.inputText} />
      </View>
      <View style={styles.touchableWrapper}>
        <TouchableOpacity onPress={() => {navigation.navigate('Main');}}>
          <View style={styles.styleButton}>
            <Text> Login </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Register');}}>
          <View style={styles.styleButton}>
            <Text> Cadastrar </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{width: '50%', height: '50%', alignSelf: 'center'}}>

<LottieView source={require('../utils/gifs/91574-astronaut-illustration.json')} autoPlay loop />
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#2ecc71',
    flex: 1,
  },
  login: {
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    width: 250,
    alignSelf: 'center',
    marginTop: 10,
  },
  styleButton: {
    backgroundColor: '#16a085',
    width: 120,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  touchableWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
