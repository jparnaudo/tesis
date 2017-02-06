/**
 * Created by jp on 2/5/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class First extends React.Component{
    render() {
        return (
            <View style={this.styles.container}>
                <Text>FIRST</Text>
                <TouchableHighlight onPress={this.navSecond.bind(this)}>
                    <Text>Navigate to second screen</Text>
                </TouchableHighlight>
            </View>
        );
    }

    navSecond(){
        this.props.navigator.push({
            id: 'second'
        })
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#910D1A',
        }
    });

}