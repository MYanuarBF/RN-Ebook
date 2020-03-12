/* eslint-disable import/first */
/* eslint-disable react/prop-types */
import React from 'react';
import { Text } from 'react-native';
import Header from '../../components/elements/Header';
import { List, ListItem, Content, Container } from 'native-base';
import styles from '../../components/layouts/MainScreen/styles';

export default class Component extends React.Component {
  _onPress = () => {};

  _quiz = () => {
    const { navigation } = this.props;
    navigation.navigate('Quiz');
  };

  _ujian = () => {
    const { navigation } = this.props;
    navigation.navigate('Ujian');
  };

  render() {
    return (
      <Container>
        <Header title="Penajah" back={false} />
        <Content>
          <List>
            <ListItem onPress={this._quiz} style={styles.list}>
              <Text>Quiz</Text>
            </ListItem>
            <ListItem onPress={this._ujian}>
              <Text>Ujian</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
