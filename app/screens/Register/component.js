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
      name: '',
      email: '',
      password: ''
    };
  }

  _signUp = async () => {
    const { name, email, password } = this.state;
    const params = { name, email, password };
    try {
      const result = await ENDPOINT.register(params);
      const myJSON = JSON.stringify(params);
      alert(myJSON);
      console.log({ result });
      if (result.access_token.length > 0) {
        this.props.navigation.navigate('App');
      } else {
        ToastAndroid.show('Failed to Register', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
    }
  };

  _signIn = () => {
    const { navigation } = this.props;
    navigation.navigate('LogIn');
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <MainScreen style={styles.mainContainer}>
        <View>
          <View style={styles.greet}>
            <View style={styles.bar} />
            <View style={styles.greetStyle}>
              <Text style={styles.greetTitle}>Penajah</Text>
            </View>
          </View>
          <View style={styles.container} />
          <Text style={styles.login}>Register</Text>
          <Input
            label=""
            placeholder={I18n.t('username')}
            editable
            autoCapitalize="none"
            value={name}
            onChangeText={name => this.setState({ name })}
          />
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
            <Button type="raised-ripple" title={I18n.t('register')} onPress={this._signUp} />
          </View>
          <View style={styles.margin} />
        </View>
        <Button
          customText={styles.outlinedText}
          customContainer={styles.outlined}
          title={I18n.t('login')}
          onPress={this._signIn}
        />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
