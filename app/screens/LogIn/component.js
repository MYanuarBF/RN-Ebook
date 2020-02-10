/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import { Text, View, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';

import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import Input from '../../components/elements/Input';
import I18n from '../../i18n';
import Button from '../../components/elements/Button';
import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  _signIn = async () => {
    const { email, password } = this.state;
    const params = { email, password };
    try {
      const result = await ENDPOINT.login(params);
      const myJSON = JSON.stringify(params);
      if (result.access_token.length > 0) {
        this.props.navigation.navigate('App');
      } else {
        ToastAndroid.show('Failed to login', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
    }
  };

  _signUp = () => {
    console.log('SIGN UP');
    const { navigation } = this.props;
    navigation.navigate('Register');
  };

  render() {
    const { email, password } = this.state;
    return (
      <MainScreen style={styles.mainContainer}>
        <View>
          <View style={styles.greet}>
            <View style={styles.bar} />
            <View style={styles.greetStyle}>
              <Text style={styles.greetTitle}>WELLCOME</Text>
            </View>
          </View>
          <View style={styles.container} />
          <Text style={styles.login}>LOG IN</Text>
          <Input
            label=""
            placeholder={I18n.t('email')}
            editable
            autoCapitalize="none"
            value={email}
            onChangeText={email => this.setState({ email })}
          />
          <Input
            label=""
            placeholder={I18n.t('password')}
            editable
            autoCapitalize="none"
            value={password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
          <View style={styles.btnLogin}>
            <Button type="raised-ripple" title={I18n.t('login')} onPress={this._signIn} />
          </View>
          <View style={styles.margin} />
        </View>
        <Button
          customText={styles.outlinedText}
          customContainer={styles.outlined}
          title={I18n.t('register')}
          onPress={this._signUp}
        />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
