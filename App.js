import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import BuscarMusicaScreen from './src/screens/BuscarMusicaScreen'
class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container} >
        <BuscarMusicaScreen />
      </SafeAreaView>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})