import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { LoginScreen } from './LoginScreen';
import { DogsScreen } from './DogsScreen';

const App=()=> {
  
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <LoginScreen />
          <DogsScreen />
        </View>
      </ScrollView>
    );
  }

export default App;
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    marginTop: 40
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});