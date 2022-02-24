import React from 'react';
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.title}>EVERYMIND</Text>
        <TextInput placeholder="Usuário" style={styles.inputText} />
        <TextInput placeholder="Senha" style={styles.inputText} />
      </View>
      <View style={styles.touchableWrapper}> 
        <TouchableOpacity >
          <View style={styles.styleButton}>
            <Text> Login </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.styleButton}>
            <Text> Cadastrar </Text>
          </View>
        </TouchableOpacity>
      </View> 
    </View>
  );
};

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
});

export default App;
