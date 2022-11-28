import React,{Component} from 'react';
import { StyleSheet, View, FlatList,Text} from 'react-native';

import api from './services/api';
import Personagens from './personagens';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      personagens: []
    }
  }
  async componentDidMount(){
    const response = await api.get('people/?format=json');
    this.setState({
      personagens: response.data.results,
    });
  }

  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.titleText}>Personagens do filme StarWars</Text>
          <FlatList
          data={this.state.personagens}
          keyExtractor={item => item.name.toString()}
          renderItem={ ({item}) => <Personagens data={item} />}
          />
      </View>
    );
  }

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:50,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }

});