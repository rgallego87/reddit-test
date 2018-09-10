import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const redditURL = 'https://api.reddit.com/r/pics/new.json';

export default class App extends React.Component {

  state = {
    loading: true,
    dataSource: []
  }

  async componentDidMount() {
    await this.makeRemoteRequest();
  }

  async fetchData(url) {
    const result = await fetch(url);        
    return await result.json();
  }      

  async makeRemoteRequest() {     
    try {      
      const responseData = await this.fetchData(redditURL)
      
      this.setState({
        loading: false,
        dataSource: responseData
      })


    } catch(error) {      
      this.setState({ error, loading: false });
    }

    // fetch(redditURL)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       loading: false,
    //       dataSource: res          
    //     });
    //   })
    //   .catch(error => {
    //     this.setState({ error, loading: false });
    //   });
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
    <View style={styles.container}>
      <Text>Soy el test de Reddit</Text>      
      <FlatList
        data = { dataSource.data.children }
        renderItem={({item}) => <Text>{item.data.title}</Text>}
      />
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
