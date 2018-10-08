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
    Taro.navigateTo({
      url: "/pages/view/view"
    });
  };

  showList = e => {
    Taro.navigateTo({ url: "/pages/component/component" });
  };

  showTaroUI = e => {
    Taro.navigateTo({ url: "/pages/taroUI/index" });
  };

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Button onClick={this.jump}>跳转</Button>
        <Button onClick={this.showList}>组件展示</Button>
        <Button onClick={this.showTaroUI}>TaroUI</Button>
      </View>
    );
  }
}
