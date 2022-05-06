import React, { useState, createRef, useMemo } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Alert } from 'react-native';

import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { getAuth, signInWithEmailAndPassword } from '../config/firebase';

export const LoginScreen = ({ navigation }: NativeStackHeaderProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useMemo(() => getAuth(), []);

  const handleSubmitPress = () => {
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((e) => {
        console.log(e.user.providerData[0]);
        navigation.navigate('Profile', e.user.providerData[0]);
      })
      .catch((e) => {
        Alert.alert('Có lỗi xảy ra khi đăng nhập', e.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        style={{ height: 40, width: 300 }}
        placeholder="Email"
        onChangeText={setEmail}
        keyboardType="email-address"
        defaultValue={email}
      />
      <View style={styles.separator} />
      <TextInput
        style={{ height: 40, width: 300 }}
        placeholder="Password"
        onChangeText={setPassword}
        defaultValue={password}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={() => handleSubmitPress()} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
});
