import React from 'react';
import { Text, View, FlatList } from 'react-native';
import SingleReddit from './SingleReddit';

const redditURL = 'https://api.reddit.com/r/pics/new.json';

export default class RedditList extends React.Component {

  state = {
    loading: true,
    dataSource: []
  }

  async componentDidMount() {
    await this.makeRemoteRequest();
  }

  async makeRemoteRequest() {     
    try { 
      const urlFetched = await fetch(redditURL);        
      const data = await urlFetched.json();
      
      this.setState({
        loading: false,
        dataSource: data
      })

    } catch(error) {      
      this.setState({ error, loading: false });
    }    
  };

  renderLoadingView() {
    return(
      <View>
        <Text>Cargando reddits... </Text>
      </View>
    )
  }

  render() {
    const { loading, dataSource } = this.state;    

    if (loading) {            
      return this.renderLoadingView(); 
    }         

    return (
      <FlatList
        data = { dataSource.data.children }
        renderItem = {({ item }) => <SingleReddit item = { item } />}
        keyExtractor = {(item) => item.data.id}        
      />
    )
  }

}