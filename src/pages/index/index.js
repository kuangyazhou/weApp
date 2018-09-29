import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./index.less";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  jump = e => {
    Taro.redirectTo({
      url: "/pages/view/view"
    });
  };

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Button onClick={this.jump}>跳转</Button>
      </View>
    );
  }
}
