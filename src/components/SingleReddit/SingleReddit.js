import React from 'react';
import { Text, View, Image } from 'react-native';
import Moment from 'moment';
import styles from './styles';

export default class SingleReddit extends React.Component {

  render() {
    const { item } = this.props;    
    const dateAgo = Moment(item.data.created_utc * 1000).fromNow();
    const redditImage = item.data.thumbnail;      
    
    return (      
        <View style = { styles.mainContainer }>
          <Image source = {{ uri: redditImage }} style = { styles.image }/>
          <View style = { styles.redditContainer }>
            <Text style = { styles.dateAgo } > submitted { dateAgo }</Text>
            <Text style = { styles.title }> {item.data.title}</Text>
            <View style = { styles.redditInfo }>  
              <Text>by { item.data.author }</Text>
              <Text>Score: { item.data.score }</Text>
              <Text>Comments: { item.data.num_comments }</Text>
            </View>            
          </View>
        </View>             
    )
  }  
}
