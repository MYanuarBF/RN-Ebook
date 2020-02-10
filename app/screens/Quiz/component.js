/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react-native/no-raw-text */
/* eslint-disable react/sort-comp */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import { View, BackHandler, TouchableOpacity } from 'react-native';
import { Text, Container, Header, Left, Body, Right, Title, Content, CheckBox } from 'native-base';
import styles from './styles';
import SvgBack from '../../../assets/svgs/Back';
import Button from '../../components/elements/Button';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_WHITE } from '../../styles';

export default class QuestionAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionAnswer: [
        {
          question: 'Dibawah ini yang paling berhak memandikan jenazah adalah….',
          answers: [
            {
              ans: 'Petugas yang sudah ditetapkan oleh pemerintah',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Ibu atau Bapak dari orang yang sudah meninggal',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Anggota keluarga',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Orang yang paling ahli dalam bidang agama',
              correct: false,
              isSelected: false
            }
          ]
        },
        {
          question: 'Membaca sholawat Nabi dalam salat jenazah dilaksanakan setelah takbir ke….',
          answers: [
            {
              ans: 'Satu',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Dua',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Tiga',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Empat',
              correct: false,
              isSelected: false
            }
          ]
        },
        {
          question: 'Hukum menyalatkan jenazah adalah….',
          answers: [
            {
              ans: 'Sunah',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Makruh',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Mubah',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Fardhu kifayah',
              correct: true,
              isSelected: false
            }
          ]
        },
        {
          question: 'Dibawah ini yang tidak termasuk syarat jenazah yang dimandikan, yaitu….',
          answers: [
            {
              ans: 'Tubuhnya ada walaupun sedikit',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Muslim',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Bukan bayi prematur',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Mati syahid',
              correct: true,
              isSelected: false
            }
          ]
        },
        {
          question: 'Jumlah takbir di dalam salat jenazah sebanyak …. Kali',
          answers: [
            {
              ans: 'Lima',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Empat',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Tiga',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Dua',
              correct: false,
              isSelected: false
            }
          ]
        },
        {
          question: 'Sebaiknya kain kafan yang digunakan untuk mengkafani jenazah berwarna',
          answers: [
            {
              ans: 'Hitam',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Merah',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Putih',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Abu - Abu',
              correct: false,
              isSelected: false
            }
          ]
        },
        {
          question: 'Jumlah kain kafan yang digunakan untuk mengkafani jenazah laki-laki adalah….',
          answers: [
            {
              ans: 'Dua',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Tiga',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Empat',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Lima',
              correct: false,
              isSelected: false
            }
          ]
        },
        {
          question: 'Dibawah ini yang tidak termasuk rukun salat jenazah adalah….',
          answers: [
            {
              ans: 'Mengangkat tangan ketika takbir',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Membaca salawat setelah takbir kedua',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Membaca Al Fatihah setelah takbir pertama',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Membaca takbir empat kali',
              correct: false,
              isSelected: false
            }
          ]
        },
        {
          question: 'Untuk jenazah perempuan, posisi imam pada waktu menyalatkan adalah berdiri…',
          answers: [
            {
              ans: 'Searah kepala',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Searah betis',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Searah lambung',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Searah pinggang',
              correct: true,
              isSelected: false
            }
          ]
        },
        {
          question: 'Dibawah ini hal-hal yang disunahkan dalam mengubur jenazah, kecuali…',
          answers: [
            {
              ans: 'Menyirami kubur dengan air',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Menandai kuburan dengan batu nisan',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Kuburan dibekali atap di atasnya',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Menaruh batu kerikil di atas kubur',
              correct: false,
              isSelected: false
            }
          ]
        }
      ],
      count: 0,
      isFinish: false,
      score: 0
    };
  }

  selectAnswer(index) {
    const data = this.state.questionAnswer;
    console.log(this.state.questionAnswer[this.state.count].answers[index]);

    data[this.state.count].answers.map((m, v) => {
      if (v === index) {
        m.isSelected = true;
      } else {
        m.isSelected = false;
      }
    });
    this.setState({ questionAnswer: data });
  }

  renderQuestion() {
    if (this.state.isFinish === false) {
      return (
        <View>
          <View style={styles.gridCol}>
            <Text style={styles.gridText}>{this.state.count + 1}. </Text>

            <Text style={styles.gridTextvalue}>{this.state.questionAnswer[this.state.count].question}</Text>
          </View>

          <View style={styles.gridColAnswer}>
            {this.state.questionAnswer[this.state.count].answers.map((m, v) => (
              <View key={v}>
                <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                  <CheckBox
                    checked={m.isSelected}
                    color={COLOR_BASE_PRIMARY_MAIN}
                    onPress={this.selectAnswer.bind(this, v)}
                  />
                  <Text style={{ paddingLeft: 20 }}>{m.ans}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Finish</Text>
        <Text style={styles.text}>Score Kamu {this.state.score}</Text>

        <Button
          title="Close Quiz"
          onPress={this._onPressBack.bind(this)}
          rounded
          style={styles.buttonStyleExit}
        />
      </View>
    );
  }

  _onPressBack() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  exitApp() {
    BackHandler.exitApp();
  }

  next() {
    if (this.state.count !== 9) {
      this.setState({ count: this.state.count + 1, isFinish: false });
    } else {
      this.setState({ isFinish: true });
    }
  }

  renderButton() {
    return (
      <View style={styles.btn}>
        <Button title="Next" onPress={this.next.bind(this)} />
      </View>
    );
  }
  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#2c3e50" style={{ backgroundColor: COLOR_WHITE }}>
          <Left>
            <TouchableOpacity style={styles.ButtonRight} onPress={this._onPressBack.bind(this)}>
              <SvgBack />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={styles.headText}>Latihan Soal</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          {this.renderQuestion()}

          {this.state.isFinish === false ? this.renderButton() : null}
        </Content>
      </Container>
    );
  }
}
