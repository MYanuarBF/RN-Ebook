/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Component extends React.Component {
  _signIn = () => {
    this.props.navigation.navigate('LogIn');
  };
  _renderCard = () => (
    <View style={styles.card}>
      <TouchableOpacity onPress={this._signIn}>
        <Text style={styles.title}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return <View style={styles.container}>{this._renderCard()}</View>;
  }
}
