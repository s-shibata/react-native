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
    return SLIDE_DATA.map((slide, index) => {
      return (
        <View
         key={index}
         style={{ flex: 1, backgroundColor: 'skyblue' ,width: SCREEN_WIDTH}}
        >
          <Text>{slide.title}</Text>
          <Text>{slide.text}</Text>
          <Text>{index + 1} </Text>
        </View>
      );
    });
  }
  /*renderという関数を作る*/
  /*render関数の返すのreturn()が；の中身が描画される*/

  render() {
    return (

      <ScrollView
        /*horizontal　→　スクロール方向を横にする*/
        horizontal
        /*pagingEnabled　→　ヌルっからピタッと止まるようにする*/
        pagingEnabled
        /*描画エリアをスマホ画面上いっぱいにする*/
        style={{ flex: 1 ,backgroundColor: 'skyblue'}}
      >
      /*renderSlides関数を呼び出す*/
      /*thisは"WelcomeScreen"のこと、.は"~の中に"という意味*/
        {this.renderSlides()}
      </ScrollView>
    );
  }
}
/*WelcomeScreenをApp.jsにexportするため*/
export default WelcomeScreen;
