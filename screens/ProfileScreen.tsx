import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { UserInfo } from 'firebase/auth';
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export const ProfileScreen = ({ navigation, route }: NativeStackHeaderProps) => {
  const { email, displayName } = route.params as Record<keyof UserInfo, string>;
  return (
    <View style={styles.container}>
      <Text>
        Hello {displayName}({email})
      </Text>
      <Button title="Redirect to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
