import React from 'react';
import { View } from 'react-native';
import RedditList from './src/components/RedditList/RedditList';
import RedditDetail from './src/components/RedditDetail/RedditDetail';
import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({  
  RedditList: RedditList,
  RedditDetail: RedditDetail
});

export default class App extends React.Component {  

  render() {
    return (      
      <AppNavigator />      
    );   
  }
}


