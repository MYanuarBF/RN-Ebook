/* eslint-disable react/prop-types */
import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import styles from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
    title: 'Materi 1'
  }
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class Component extends React.Component {
  _onPress = () => {};

  _onPressMateri = () => {
    const { navigation } = this.props;
    navigation.navigate('Materi');
  };

  render() {
    return (
      <MainScreen style={styles.container}>
        <Header title="Penajah" back={false} />
        <TouchableOpacity onPress={this._onPressMateri}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        </TouchableOpacity>
      </MainScreen>
    );
  }
}
