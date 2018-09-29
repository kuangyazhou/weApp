import { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/Components";
import "./view.less";

export default class Testview extends Component {
  config = {
    navigationBarTitleText: "测试页"
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        <Text>this is the test text</Text>
      </View>
    );
  }
}
