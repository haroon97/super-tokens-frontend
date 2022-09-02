import React, {useState} from 'react';
import {Image, TextInput, Text, View, Touchable} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/AntDesign';

const Auth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [mode, setMode] = useState<string>('login');

  const loginWithEmail = () => {
    console.log('LOGGED IN WITH EMAIL');
  };

  const loginWithFacebook = () => {
    console.log('LOGGED IN WITH FACEBOOK');
  };

  const loginWithGoogle = () => {
    console.log('LOGGED IN WITH GOOGLE');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          source={require('../../assets/super-tokens.webp')}
          style={styles.logo}
        />
      </View>
      <TextInput
        autoComplete="email"
        onChangeText={setEmail}
        placeholder="Enter email"
        style={styles.input}
        value={email}
      />
      <TextInput
        autoComplete="password"
        onChangeText={setPassword}
        placeholder="Enter password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
      />
      <View style={styles.buttonContainer}>
        <Icon.Button
          onPress={loginWithEmail}
          name="login"
          padding={5}
          margin={5}
          backgroundColor="#42855B">
          <Text style={styles.buttonText}>
            {mode.charAt(0).toUpperCase() + mode.slice(1)} with Email & Password
          </Text>
        </Icon.Button>
      </View>
      <View style={styles.buttonContainer}>
        <Icon.Button
          onPress={loginWithFacebook}
          name="facebook-square"
          padding={5}
          margin={5}
          backgroundColor="#3b5998">
          <Text style={styles.buttonText}>
            {mode.charAt(0).toUpperCase() + mode.slice(1)} with Email & Password
          </Text>
        </Icon.Button>
      </View>
      <View style={styles.buttonContainer}>
        <Icon.Button
          onPress={loginWithGoogle}
          name="google"
          padding={5}
          margin={5}
          backgroundColor="#4688F1">
          <Text style={styles.buttonText}>
            {mode.charAt(0).toUpperCase() + mode.slice(1)} with Email & Password
          </Text>
        </Icon.Button>
      </View>
      <Text
        onPress={
          mode === 'login' ? () => setMode('signup') : () => setMode('login')
        }
        style={styles.signUpText}>
        {mode === 'login'
          ? "Don't have an account? Sign Up"
          : 'Already have an account? Login'}
      </Text>
    </View>
  );
};

export default Auth;
