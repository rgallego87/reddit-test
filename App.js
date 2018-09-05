import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const redditURL = 'https://api.reddit.com/r/pics/new.json';

export default class App extends React.Component {

  // getRedditInfo() {
  //   return fetch(redditURL, {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',         
  //     'Content-Type': 'multipart/form-data'
  //   },
  //   body: formdata,
  // })       
  // .then(response => response.json())
  // .then(data => {         
  //   this.setState({
  //     isLoading: false,
  //     quote: data
  //   })
  // })    
  // .catch(error => console.error(error)) 
  // }

  // componentDidMount() {     
  //   this.getRedditInfo();
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu. HOLA</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
