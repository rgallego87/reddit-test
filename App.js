import React from 'react';
import { View } from 'react-native';
import RedditList from './src/components/RedditList/RedditList';

export default class App extends React.Component {

  render() {
    return (
      <View>
        <RedditList/>
      </View>
    );   
  }
}


