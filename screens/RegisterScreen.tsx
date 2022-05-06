import React, { useState, useMemo } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Alert } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from '../config/firebase';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export const RegisterScreen = ({ navigation }: NativeStackHeaderProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
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
    if (password != confirmPassword) {
      alert('Confirm password not match');
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(data);

        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: fullName,
          }).then((e) => {
            navigation.navigate('Login');
          });
        }
      })
      .catch((e) => {
        Alert.alert('Có lỗi xảy ra khi đăng ký', e.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={{ height: 40, width: 300 }}
        placeholder="Email"
        onChangeText={setEmail}
        defaultValue={email}
        keyboardType="email-address"
      />
      <View style={styles.separator} />
      <TextInput
        style={{ height: 40, width: 300 }}
        placeholder="Password"
        onChangeText={setPassword}
        defaultValue={password}
        secureTextEntry={true}
      />
      <View style={styles.separator} />
      <TextInput
        style={{ height: 40, width: 300 }}
        placeholder="Confirm password"
        onChangeText={setConfirmPassword}
        defaultValue={confirmPassword}
        secureTextEntry={true}
      />
      <View style={styles.separator} />
      <TextInput
        style={{ height: 40, width: 300 }}
        placeholder="Full name"
        onChangeText={setFullName}
        defaultValue={fullName}
      />
      <View style={styles.separator} />
      <TextInput
        style={{ height: 40, width: 300 }}
        placeholder="Phone number"
        onChangeText={setPhoneNumber}
        defaultValue={phoneNumber}
      />
      <View style={styles.separator} />
      <TextInput
        style={{ height: 40, width: 300 }}
        placeholder="Address"
        onChangeText={setAddress}
        defaultValue={address}
      />
      <Button title="REGISTER" onPress={() => handleSubmitPress()} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
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
