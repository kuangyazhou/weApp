import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";

import "./app.less";

class App extends Component {
  config = {
    pages: [
      "pages/index/index",
      "pages/view/view",
      "pages/component/component",
      "pages/taroUI/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
