import React from 'react';
import { Text, View, Image, Linking, TouchableHighlight } from 'react-native';
import Moment from 'moment';
import styles from './styles';

const baseURL = 'https://reddit.com';

export default class SingleReddit extends React.Component {
  
  render() {
    const { item } = this.props;
    const url = baseURL + item.data.permalink;    
    const dateAgo = Moment(item.data.created_utc * 1000).fromNow();
    const redditImage = item.data.thumbnail;     
    
    return (
      <TouchableHighlight onPress = {() => Linking.openURL(url)}>
        <View style = { styles.mainContainer }>
          <Image source = {{ uri: redditImage }} style = { styles.image }/>
          <View style = { styles.redditContainer } >
            <Text style = { styles.dateAgo } > submitted { dateAgo } </Text>
            <Text style = { styles.title }>
              {item.data.title}
            </Text>
            <View style = { styles.redditInfo }>  
              <Text>by { item.data.author }</Text>
              <Text>Score: { item.data.score }</Text>
              <Text>Comments: { item.data.num_comments }</Text>
            </View>            
          </View>
        </View>
      </TouchableHighlight>            
    )
  }  
}
