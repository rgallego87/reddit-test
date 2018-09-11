import React from 'react';
import { Text, View, FlatList } from 'react-native';
import SingleReddit from '../SingleReddit/SingleReddit';

const redditURL = 'https://api.reddit.com/r/pics/new.json';

export default class RedditList extends React.Component {

  state = {
    loading: true,
    dataSource: [],
    refreshing: false
  }

  async componentDidMount() {
    await this.makeRemoteRequest();
  }
  
  componentDidUpdate() {
    return !this.state.refreshing;
  }  

  async makeRemoteRequest() {     
    try { 
      const urlFetched = await fetch(redditURL);        
      const data = await urlFetched.json();
      
      this.setState({
        dataSource: data,
        refreshing: false,
        loading: false
      })

    } catch(error) {      
      this.setState({ error, loading: false, refreshing: false });
    }    
  };

  updateList = () => {
    this.setState({
      refreshing: true
    }, () => {
      this.makeRemoteRequest();
    })    
  }

  renderLoadingView() {
    return(
      <View>
        <Text>Cargando reddits... </Text>
      </View>
    )
  }

  render() {
    const { loading, dataSource, refreshing } = this.state;    

    if (loading) {            
      return this.renderLoadingView(); 
    }         

    return (
      <View>
        <FlatList           
          data = { dataSource.data.children }
          renderItem = {({ item }) => 
            <SingleReddit 
              item = { item } 
            />}
          keyExtractor = {(item) => item.data.id}        
          refreshing = { refreshing }
          onRefresh = { this.updateList }
        />
      </View>
    )
  }
}