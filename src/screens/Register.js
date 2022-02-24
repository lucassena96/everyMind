/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';


const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={{width: '50%', height: '20%', alignSelf: 'center'}}>

<LottieView source={require('../utils/gifs/68794-cute-astronaut-operating-laptop.json')} autoPlay loop />
</View>
        <View style={styles.login}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput placeholder="Nome" style={styles.inputText} />
            <TextInput placeholder="CPF" style={styles.inputText} />
            <TextInput placeholder="Data de nascimento" style={styles.inputText} />
            <TextInput placeholder="Email" style={styles.inputText} />
            <TextInput placeholder="Usuário" style={styles.inputText} />
            <TextInput placeholder="Senha" style={styles.inputText} />
        </View>
        <View>
            <TouchableOpacity onPress={() => {navigation.navigate('Login');}}>
            <View style={styles.styleButton}>
                <Text> Confirmar </Text>
            </View>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => {navigation.pop();}}>
            <View style={styles.styleCancelButton}>
                <Text style={styles.cancelButton}> Cancelar </Text>
            </View>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
    container: {
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
    styleCancelButton: {
      backgroundColor: 'transparent',
    },
    cancelButton:{
      color: '#2980b9',
      fontSize: 15,
      marginTop: 30,
      alignSelf: 'center',
      textDecorationLine: 'underline',
    },
  });
