/* eslint-disable react/no-unused-state */
/* eslint-disable import/first */
/* eslint-disable react/prop-types */
import React from 'react';
import Header from '../../components/elements/Header';
import YouTube from 'react-native-youtube';
import { scale } from '../../utils/scaling';
import styles from './styles';
import { View } from 'react-native';

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Penajah" back />
        <View style={styles.video}>
          <YouTube
            apiKey="AIzaSyAuIuXHM8REnj7bkRxhZuu96O4wXvNDLB8"
            videoId="Qd2_vEDkm5E" // The YouTube video ID
            play // control playback of video with true/false
            // fullscreen // control whether the video should play in fullscreen or inline
            loop // control whether the video should loop when ended
            onReady={() => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ width: scale(328), height: scale(180) }}
          />
        </View>
      </View>
    );
  }
}
