import React, { Component } from 'react'
import { mapStateToProps, mapDispatchToProps } from '../Redux/Store/Store'
import { connect, Provider } from 'react-redux'
import { StyleSheet, View, Image, Text, WebView, TouchableOpacity,ScrollView } from "react-native"
import pxTodp from '../utils/pxTodp'
// import FilmSchemaList from '../Components/FilmSchemaList'
// import FilmSchemaListImg from '../Components/FilmSchemaListImg'
// import FilmSchemaInfo from '../Components/FilmSchemaInfo'
class FilmTab extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listType: 'online'
		}
	}
	componentWillMount() {}
	componentDidMount() {}
	render() {
			return (
				<View style={{flex:1}}>
					<Text>1213</Text>
				</View>

			)
		}
	}

FilmTab.navigationOptions = props => {
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

export default connect(mapStateToProps, mapDispatchToProps)(FilmTab)
