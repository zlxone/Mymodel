
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';



export default class App extends Component {
    
    render() {
        const data = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Text>Welcome {data.text1} to Detail.</Text>
                <Text 
                onPress={() => this.props.navigation.goBack()}
                >{data.text2}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
