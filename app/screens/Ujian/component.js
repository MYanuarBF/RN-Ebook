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
          question: 'Yang bukan termasuk rukun salat jenazah adalah…',
          answers: [
            {
              ans: 'Berdiri bagi yang mampu',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Empat kali takbir',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Mengangkat tangan pada saat takbir pertama',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Membaca ayat kursi',
              correct: true,
              isSelected: false
            }
          ]
        },

        {
          question: 'Berikut ini termasuk adab dalam ziarah kubur, kecuali…',
          answers: [
            {
              ans: 'Duduk-duduk di atas makam yang bukan keluarganya sekadar melepas lelah',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Berpakaian yang sopan dan menutup aurat',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Mengucapkan salam kepada penghuni kubur',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Berniat ziarah kubur semata-mata karena Allah Swt',
              correct: false,
              isSelected: false
            }
          ]
        },

        {
          question: 'Berikut ini termasuk perbuatan sunnah pada waktu pemakaman, kecuali…',
          answers: [
            {
              ans: 'Meninggikan kubur sekadarnya',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Penguburan jenazah sebaiknya jangan di segerakan',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Menaruh kerikil di atas kubur',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Menyiram kubur dengan air',
              correct: false,
              isSelected: false
            }
          ]
        },

        {
          question: 'Dalam ajaran Islam, syarat umum jenazah yang bisa dimandikan yaitu…',
          answers: [
            {
              ans: 'Orang yang meninggal dunia ketika sedang berjuang menegakkan Islam',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Orang yang mati syahid',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Jenazah beragama Islam',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Ada bagian tubuh yang tersisa untuk dimandikan',
              correct: true,
              isSelected: false
            }
          ]
        },

        {
          question: 'Di bawah ini adalah ciri adanya kematian, kecuali…',
          answers: [
            {
              ans: 'Berhentinya napas dalam diri seseorang',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Tidak adanya motivasi dan gairah hidup',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Lepasnya nyawa dari tubuh',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Seluruh organ tubuh tidak berfungsi',
              correct: false,
              isSelected: false
            }
          ]
        },

        {
          question: 'Mengangkat tangan pada tiap takbir adalah termasuk…',
          answers: [
            {
              ans: 'Syarat wajib salat jenazah',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Rukun memandikan jenazah',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Syarat sah salat jenazah',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Rukun salat jenazah',
              correct: true,
              isSelected: false
            }
          ]
        },

        {
          question:
            'Menyiram jenazah menggunakan air yang dicampur dengan harum-haruman dilakukan pada waktu…',
          answers: [
            {
              ans: 'Sebelum diwudhukan',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Sebelum diberi pakaian mandi',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Sebelum dibasuh bagian kanan kemudian kiri sebanyak 3 kali',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Sebelum mengeluarkan kotoran dari dalam perutnya',
              correct: false,
              isSelected: false
            }
          ]
        },

        {
          question:
            'Salah satu hal yang disunahkan dalam mengubur mayat yaitu meninggikan tanah dengan tujuan…',
          answers: [
            {
              ans: 'Membedakan bahwa itu adalah kuburan',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Supaya tidak diinjak-injak orang',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Menghormati yang meninggal',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Kebanyakan tanah',
              correct: false,
              isSelected: false
            }
          ]
        },

        {
          question: 'Jenazah yang boleh dimandikan oleh siapa saja adalah……',
          answers: [
            {
              ans: 'Pemimpin agama',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Perempuan',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Anak-anak',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Orang tua',
              correct: false,
              isSelected: false
            }
          ]
        },

        {
          question: 'Liang lahat adalah…',
          answers: [
            {
              ans: 'Lubang kematian',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Lubang kawasan meletakkan jenazah',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Lubang mayat yang lebar dan besar',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Lubang kawasan menaruh makanan',
              correct: false,
              isSelected: false
            }
          ]
        },
        {
          question: 'Di bawah ini yang bukan tata cara mengkafani jenazah adalah…',
          answers: [
            {
              ans: 'Membentangkan tali-tali pengikat kain kafan secukupnya',
              correct: false,
              isSelected: false
            },
            {
              ans:
                'Membentangkan lapis keempat kain kafan di atas tali tersebut kemudian ditambahkan wewangian',
              correct: true,
              isSelected: false
            },
            {
              ans:
                'Membentangkan lapis pertama kain kafan di atas tali tersebut kemudian ditambahkan wewangian',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Kemudian mengikat jenazah dengan tali-tali tadi',
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
              correct: true,
              isSelected: false
            },
            {
              ans: 'Searah lambung',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Searah pinggang',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Di samping',
              correct: false,
              isSelected: false
            }
          ]
        },

        {
          question: 'Jumlah kain kafan yang digunakan untuk mengkafani jenazah perempuan adalah……',
          answers: [
            {
              ans: 'Dua',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Lima',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Satu',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Tiga',
              correct: false,
              isSelected: false
            }
          ]
        },

        {
          question: 'Dibawah ini cara menguburkan jenazah yang baik, kecuali…',
          answers: [
            {
              ans: 'Jenazah wajib dimiringkan ke sebelah kiri dan menghadapkannya ke arah kiblat',
              correct: true,
              isSelected: false
            },
            {
              ans:
                'Dikuburkan ke dalam lubang yang tingginya sama dengan orang berdiri yang melambaikan tangannya ke atas',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Lebarnya lubang adalah lebih dari satu jengkal',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Disunahkan untuk membuka ikatan tali jenazah yang dimulai dari kepala',
              correct: false,
              isSelected: false
            }
          ]
        },

        {
          question: 'Membaca doa untuk jenazah dilaksanakan setelah takbir ke…',
          answers: [
            {
              ans: 'Dua',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Satu',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Lima',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Tiga',
              correct: true,
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
    if (this.state.count !== 14) {
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
