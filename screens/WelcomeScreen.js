/*tetsetsetset*/

import React from 'react';
/*WelcomeScreenにとって外部にあるものはimprotする*/
import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';

/*constは変数の最初に書かなければいけない接頭辞*/
const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDE_DATA = [
  { title: 'Step: 1', text: 'おはよう' },
  { title: 'Step: 2', text: 'こんにちは' },
  { title: 'Step: 3', text: 'こんばんは' },
];

/*WelcomeScreenというコンポーネントを作りますよ！*/
class WelcomeScreen extends React.Component {
  renderSlides(){
    /*map関数：その配列の中身を一個ずつ細切れにして各要素全てに繰り返し処理をする*/
    /*アロー関数とは無名の関数*/
    /*slide配列の各要素の１つ*/
    /*現要素の番号*/
    /*reactnative特有のルール：return()文はたった１つののタグしか返せない*/
    /*だからViewで囲む必要がある*/
    /*map関数のようになんども繰り返す処理をする場合returnするパーツに一意の識別番号をkeyプロジェクトでつけなければいけない*/
    return SLIDE_DATA.map((slide, index) => {
      return (
        <View
         key={index}
         style={{ flex: 0.5, backgroundColor: 'skyblue' ,width: SCREEN_WIDTH}}
        >
          <Text>{slide.title}</Text>
          <Text>{slide.text}</Text>
          <Text>{index + 1}/3</Text>
        </View>
      );
    });
  }
  /*renderという関数を作る*/
  /*render関数の返すのreturn()が；の中身が描画される*/

  render() {
    return (
      /*horizontal　→　スクロール方向を横にする*/
      /*pagingEnabled　→　ヌルっからピタッと止まるようにする*/
      /*描画エリアをスマホ画面上いっぱいにする*/
      /*renderSlides関数を呼び出す*/
      /*thisは"WelcomeScreen"のこと、.は"~の中に"という意味*/
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1.0 ,backgroundColor: 'skyblue'}}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}
/*WelcomeScreenをApp.jsにexportするため*/
export default WelcomeScreen;
