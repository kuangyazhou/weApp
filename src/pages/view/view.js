import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
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

  back = e => {
    Taro.navigateBack();
  };

  render() {
    return (
      <View>
        {/* <Text>this is the test text</Text> */}
        <Button onClick={this.back}>返回</Button>
        {/* <Text>this is the test text1111</Text> */}
      </View>
    );
  }
}
