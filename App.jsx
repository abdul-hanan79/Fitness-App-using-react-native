import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';
import { FitnessContext } from './Context';

const App = () => {
  // console.log("hello")
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
  }
})
export default App;
