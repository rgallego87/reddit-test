import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Moment from 'moment';

const baseURL = 'https://reddit.com';

export default class SingleReddit extends React.Component {
  
  render() {
    const { item } = this.props;
    const url = baseURL + item.data.permalink;    
    const dateAgo = Moment(item.data.created_utc * 1000).fromNow();
    
    return (      
      <View>
        <Image source = {{uri: item.data.thumbnail}} style={{width: 100, height: 100}}/>
        <View>
          <Text onPress = {() => Linking.openURL(url)}>
            {item.data.title}
          </Text>
          <Text>
            submitted {dateAgo} by {item.data.author}
          </Text>            
        </View>
      </View>      
    )
  }  
}
