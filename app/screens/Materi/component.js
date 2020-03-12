/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/sort-comp */
import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import Button from '../../components/elements/Button';

export default class Component extends React.Component {
  _video = () => {
    const { navigation } = this.props;
    navigation.navigate('Video');
  };

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
      <MainScreen style={styles.container}>
        <ScrollView>
          <View style={styles.greet}>
            <View style={styles.bar} />
            <View style={styles.greetStyle}>
              <Text style={styles.greetTitle}>Tata Cara Mengurus Jenazah dalam Islam</Text>
            </View>
          </View>
          <Image style={styles.image} source={{ uri: 'https://i.ibb.co/txrqDw4/image3.jpg' }} />
          <Text style={styles.h1}>A. Perawatan jenazah</Text>
          <Text style={styles.h2}>
            Perawatan jenazah adalah pengurusan jenazah seorang muslim/muslimah dengan cara memandikan,
            mengkafani, menyalatkan, dan menguburkannya. Hukum melaksanakan pengurusan jenazah adalah fardhu
            kifayah bagi orang-orang Islam yang masih hidup. Artinya berdosa jika tidak ada seorang pun yang
            mengerjakannya.
          </Text>
          <Text style={styles.h1}>B. Memandikan jenazah</Text>
          <Text style={styles.h3}>Syarat-syarat wajib memandikan jenazah</Text>
          <Text style={styles.h2}>
            1. Jenazah merupakan orang islam {'\n'}
            2. Terdapat/masih ada bagian tubuhnya walaupun sedikit (misalkan ketika orang tersebut tertabrak
            kereta sehingga tubuhnya hancur berkeping-keping, namun masih ditemukan bagian tubuhnya seperti
            kaki, maka itu wajib untuk dimandikan). {'\n'}
            3. Meninggalnya bukan karena mati syahid (mati dalam peperangan ketika membela agama islam).{' '}
            {'\n'}
            4. Jika jenazah tersebut berjenis kelamin laki-laki, maka yang wajib memandikannya juga laki-laki,
            perempuan tidak diperbolehkan memandikan jenazah tersebut kecuali istri dan mahramnya. {'\n'}
            5. Jika jenazah tersebut berjenis kelamin perempuan, maka yang wajib memandikannya adalah
            perempuan, laki-laki tidak diperbolehkan memadikan jenazah tersebut kecuali suami dan mahramnya.{' '}
            {'\n'}
            6. Jika jenazah tersebut merupakan seorang istri, maka apabila suami dan mahram masih ada, yang
            lebih berhak memandikan adalah suami. {'\n'}
            7. Jika jenazah tersebut merupakan seorang suami, maka apabila istri dan mahramnya masih ada, yang
            lebih berhak memandikan adalah istri. {'\n'}
            8. Kemudian jika jenazah tersbut adalah anak laki-laki yang masih kecil, perempuan diperbolehkan
            untuk memandikannya. Begitu pula sebaliknya, jika jenazah tersebut anak perempuan yang masih
            kecil, maka laki-laki diperbolehkan untuk memandikannya.
          </Text>
          <Text style={styles.h3}>Tata cara mengkafani jenazah</Text>
          <Text style={styles.h2}>
            Kain kafan dibeli menggunakan harta dari orang yang meninggal tersebut. Apabila jenazah tersebut
            adalah laki-laki maka membutuhkan kain kafan tiga lapis, namun apabila jenazah tersebut adalah
            perempuan maka membutuhkan kain kafan sebanyak lima lapis, dan itu sudah termasuk yang digunakan
            sebagai pakaian dalaman/basahan jenazah.
          </Text>
          <Text style={styles.h3}>Tata cara memandikan jenazah</Text>
          <Text style={styles.h2}>
            1. Jenazah harus dimandikan di tempat yang tertutup, agar yang melihat hanya orang-orang yang
            memandikan saja. {'\n'}2 .Jenazah di tempatkan di tempat yang tinggi, seperti dipan atau meja yang
            panjang. {'\n'}
            3. Menggunakan sarung untuk menutup aurat jenazah. {'\n'}4 .Jenazah didudukkan atau disandarkan
            pada sesuatu, kemudian diusap perutnya dan ditekan pelan-pelan agar semua kotorannya keluar. Lalu
            yang memandikan menggunakan sarung tangan kiri untuk membasuh lubang depan dan lubang belakang
            jenazah, dan kemudian membersihkan mulut dan hidung jenazah, setelah itu mewudhukannya seperti
            wudhunya orang yang masih hidup. {'\n'}5 .Membasuh kepala dan wajah jenazah dengan menggunakan
            sabun atau lainnya, kemudian menyisir rambutnya. {'\n'}
            6. Membasuh seluruh tubuh dimulai dari sisi kanan jenazah, kemudian sisi kirinya. {'\n'}
            7. (disunahkan membasuh sebanyak 3 kali)
          </Text>
          <Text style={styles.h1}>C. Mengkafani jenazah</Text>
          <Text style={styles.h3}>Tata cara mengkafani jenazah</Text>
          <Text style={styles.h2}>
            1. Membentangkan tali-tali pengikat kain kafan secukupnya. {'\n'}
            2. Membentangkan lapis pertama kain kafan di atas tali tersebut kemudian ditambahkan wewangian.{' '}
            {'\n'}
            3. Membentangkan lapis kedua kain kafan di atas lapis pertama kain kafan kemudian ditambahkan
            wewangian. {'\n'}
            4. Membentangkan lapis ketiga kain kafan di atas lapis kedua kain kafan kemudian ditambahkan
            wewangian. {'\n'}
            5. Letakkan jenazah pada kain kafan tersebut. {'\n'}
            6. Tutup menggunakan kain kafan lapis ketiga dari sisi kiri ke kanan, lalu dari sisi kanan ke
            kiri. {'\n'}
            7. Tutup menggunakan kain kafan lapis ketiga dari sisi kiri ke kanan, lalu dari sisi kanan ke
            kiri. {'\n'}
            8. Tutup menggunakan kain kafan lapis kedua dari sisi kiri ke kanan, lalu dari sisi kanan ke kiri.{' '}
            {'\n'}
            9. Tutup menggunakan kain kafan lapis pertama dari sisi kiri ke kanan, lalu dari sisi kanan ke
            kiri. {'\n'}
            10. Kemudian mengikat jenazah dengan tali-tali tadi.
          </Text>
          <Text style={styles.h1}>D. Menyalati jenazah</Text>
          <Text style={styles.h3}>Rukun salat jenazah ada delapan, yakni :</Text>
          <Text style={styles.h2}>
            1. Niat {'\n'}
            2. Berdiri bagi yang mampu {'\n'}
            3. Empat kali takbir {'\n'}
            4. Mengangkat tangan pada saat takbir pertama {'\n'}
            5. Membaca surat Al Fatihah {'\n'}
            6. Membaca sholawat Nabi {'\n'}
            7. Berdoa untuk jenazah {'\n'}
            8. Salam
          </Text>
          <Text style={styles.h3}>Tata cara sholat jenazah</Text>
          <Text style={styles.h2}>
            1. Takbiratul ihram dan membaca niat {'\n'}
            2. Kemudian baca surat Al Fatihah {'\n'}
            3. Setelah takbiratul ihram, tangan diletakkan di atas pusar sebagaimana sholat pada umumnya, lalu
            membaca surat Al Fatihah {'\n'}
            4. Takbir kedua setelah itu membaca sholawat Nabi {'\n'}
            5. Takbir ketiga setelah itu membaca doa untuk jenazah {'\n'}
            6. Takbir keempat salam
          </Text>
          <Text style={styles.h1}>E. Menyalati jenazah</Text>
          <Text style={styles.h3}>Cara menguburkan jenazah yang baik, yaitu :</Text>
          <Text style={styles.h2}>
            1. Jenazah dikuburkan ke dalam lubang yang tingginya sama dengan orang berdiri yang melambaikan
            tangannya ke atas, dan kemudian lebarnya adalah lebih dari satu jengkal. {'\n'}
            2. Setelah itu jenazah wajib dimiringkan ke sebelah kanan dan menghadapkannya ke arah kiblat.
            {'\n'}
            3. Kemudian setelah itu disunahkan untuk membuka ikatan tali jenazah yang dimulai dari kepala.
          </Text>
          <View />
          <View style={styles.btn}>
            <View style={styles.btn1}>
              <Button
                customText={styles.outlinedText}
                customContainer={styles.outlined}
                title="Video"
                onPress={this._video}
              />
            </View>
          </View>
        </ScrollView>
      </MainScreen>
    );
  }
}
