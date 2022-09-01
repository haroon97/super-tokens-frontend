/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import SuperTokens from 'supertokens-react-native';

SuperTokens.init({
  apiDomain: 'http://localhost:3001',
  apiBasePath: '/',
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Super Tokens app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
