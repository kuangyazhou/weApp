import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";

export default class TaroUI extends Component {
  config = {
    navigationBarTitleText: "TaroUI"
  };

  test = e => {
    console.log(e + "fuck the king!!!");
  };
  render() {
    return (
      // <h1>fuck the king!!!</h1>;
      <View className="index">
        <AtButton type="primary">按钮文案</AtButton>
        <AtButton type="secondary" onClick={this.test}>
          按钮文案
        </AtButton>
      </View>
    );
  }
}
