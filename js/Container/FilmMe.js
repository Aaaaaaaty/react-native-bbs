import React, { Component } from 'react'
import { mapStateToProps, mapDispatchToProps } from '../Redux/Store/Store'
import { connect, Provider } from 'react-redux'
import { StyleSheet, View, Image, Text, WebView, TouchableOpacity,ScrollView, Button } from "react-native"
import pxTodp from '../utils/pxTodp'
class FilmMe extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listType: 'online'
		}
	}
	componentWillMount() {}
	componentDidMount() {}
	render() {
		const { navigate } = this.props.navigation;
			return (
				<View style={{flex:1}}>
					<Text>发生发发发</Text>
					<Button
				        title="Go to Jane's profile"
				        onPress={() =>
				          navigate('FilmTab', { name: 'Jane' })
				        }
				      />
				</View>

			)
	}
}

FilmMe.navigationOptions = props => {
	let { navigation } = props
	return {
		title: '选择场次',
		tabBarLabel: '我的',
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: '#fe4b37',
			height: pxTodp(90)
		},
		headerLeft: (
			<TouchableOpacity>
				<Text style = {{color: 'white'}}>
				  《
				</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, mapDispatchToProps)(FilmMe)
