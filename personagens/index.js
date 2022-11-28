import React, {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';

	class Personagens extends Component{
		render(){
			return(
				<View>
					<Text>Nome do personagem = {this.props.data.name}</Text>
					<Text>altura = {this.props.data.height}</Text>
					<Text>Peso = {this.props.data.mass}</Text>
				</View>
			);
		}

	}

	export default Personagens;

	const styles = StyleSheet.create({
		titleText: {
		  fontSize: 20,
		  fontWeight: "bold"
		}
	  });