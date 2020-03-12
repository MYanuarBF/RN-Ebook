/* eslint-disable import/first */
/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Header from '../../components/elements/Header';
import styles from './styles';
import { scale } from '../../utils/scaling';
import SvgMateria from '../../../assets/svgs/Materia';
import SvgSoala from '../../../assets/svgs/Soala';
import SvgUjian from '../../../assets/svgs/Ujian';

export default class Component extends React.Component {
  _Materi = () => {
    this.props.navigation.navigate('Materi');
  };

  _Logout = () => {
    this.props.navigation.navigate('LogIn');
  };

  _quiz = () => {
    const { navigation } = this.props;
    navigation.navigate('Quiz');
  };

  _ujian = () => {
    const { navigation } = this.props;
    navigation.navigate('Ujian');
  };

  _About = () => {
    const { navigation } = this.props;
    navigation.navigate('About');
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Penajah" back={false} />
        <View style={styles.content}>
          <TouchableOpacity onPress={this._Materi}>
            <View style={styles.cardwide}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: scale(25)
                }}
              >
                <SvgMateria />
                <Text style={styles.titleCard}>MATERI</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={this._quiz}>
              <View style={styles.cardsmall}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: scale(25)
                  }}
                >
                  <SvgSoala />
                  <Text style={styles.titleCard}>Quiz</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ paddingLeft: 20 }} />
            <TouchableOpacity onPress={this._ujian}>
              <View style={styles.cardsmall}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: scale(25)
                  }}
                >
                  <SvgUjian />
                  <Text style={styles.titleCard}>Ujian</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={this._About}>
              <View style={styles.cardslim}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: scale(10)
                  }}
                >
                  <Text style={styles.titleCard}>About</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ paddingLeft: 20 }} />
            <TouchableOpacity onPress={this._Logout}>
              <View style={styles.cardslim}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: scale(10)
                  }}
                >
                  <Text style={styles.titleCard}>Log Out</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
