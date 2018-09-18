import React from 'react';
import { WebView } from 'react-native';

export default class SingleReddit extends React.Component {

  render() {    
    const { navigation } = this.props;
    const url = navigation.getParam('url');    

    return(
      <WebView
        source = {{ uri: url }}        
      />
    )
  }
}