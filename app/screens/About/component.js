/* eslint-disable import/first */
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Header from '../../components/elements/Header';
import styles from './styles';
import { Container, Content } from 'native-base';

export default class Component extends React.Component {
  _onPress = () => {};

  render() {
    return (
      <Container>
        <Header title="About" setting back />
        <Content style={{ paddingLeft: 15 }}>
          <TouchableOpacity>
            <View style={styles.person}>
              <Image
                source={{
                  uri:
                    'https://i.ibb.co/YXWKzbt/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c4409623-4643918115297806762646.png'
                }}
                style={styles.aboutImg}
              />
              <View style={styles.personInfo}>
                <Text>Mohammad Rafdani Faishal</Text>
                <View style={styles.personRole}>
                  <Text style={styles.personRoleText}>BackEnd Dev</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.person}>
              <Image
                source={{
                  uri:
                    'https://i.ibb.co/YXWKzbt/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c4409623-4643918115297806762646.png'
                }}
                style={styles.aboutImg}
              />
              <View style={styles.personInfo}>
                <Text>Muhammad Ardhana W. N.</Text>
                <View style={styles.personRole}>
                  <Text style={styles.personRoleText}>Analyst</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.person}>
              <Image
                source={{
                  uri:
                    'https://i.ibb.co/YXWKzbt/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c4409623-4643918115297806762646.png'
                }}
                style={styles.aboutImg}
              />
              <View style={styles.personInfo}>
                <Text>Muhammad Yanuar Budi Fatmadi</Text>
                <View style={styles.personRole}>
                  <Text style={styles.personRoleText}>FrontEnd Dev</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.person}>
              <Image
                source={{
                  uri:
                    'https://i.ibb.co/fNFMRd0/kisspng-female-youtube-in-my-frame-of-mind-female-avatar-5b0cd573e7c852-8276544115275677319494.png'
                }}
                style={styles.aboutImg}
              />
              <View style={styles.personInfo}>
                <Text>Nabila Dwi Puspita Sari</Text>
                <View style={styles.personRole}>
                  <Text style={styles.personRoleText}>Analyst</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.person}>
              <Image
                source={{
                  uri:
                    'https://i.ibb.co/YXWKzbt/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c4409623-4643918115297806762646.png'
                }}
                style={styles.aboutImg}
              />
              <View style={styles.personInfo}>
                <Text>Nur Aziz Setiawan</Text>
                <View style={styles.personRole}>
                  <Text style={styles.personRoleText}>UI Designer</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
