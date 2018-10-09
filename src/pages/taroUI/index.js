import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import {
  AtButton,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtTabs,
  AtTabsPane,
  AtTabBar,
  AtDrawer
} from "taro-ui";

export default class TaroUI extends Component {
  config = {
    navigationBarTitleText: "TaroUI"
  };
  state = {
    isOpened: true,
    current: 0,
    barCur: 0,
    show: false
  };

  cancel = e => {
    // console.log(e);
    this.setState({ isOpened: false });
  };

  confirm = e => {
    // console.log(e);
    this.setState({ isOpened: true });
  };
  handleClick = e => {
    this.setState({
      current: e
    });
  };

  barClick = e => {
    this.setState({
      barCur: e
    });
  };

  onClose = e => {
    this.setState({
      show: false
    });
  };
  showDrawer = e => {
    this.setState({
      show: true
    });
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
        <AtButton onClick={this.confirm}>显示Modal</AtButton>
        <AtTabs
          current={this.state.current}
          tabList={[
            { title: "标签页1" },
            { title: "标签页2" },
            { title: "标签页3" }
          ]}
          onClick={this.handleClick}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <View style="font-size:18px;text-align:center;height:100px;">
              标签页一的内容
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style="font-size:18px;text-align:center;height:100px;">
              标签页二的内容
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style="font-size:18px;text-align:center;height:100px;">
              标签页三的内容
            </View>
          </AtTabsPane>
        </AtTabs>

        <AtButton onClick={this.showDrawer}>显示Drawer</AtButton>
        {/* <AtModal isOpened onCancel={this.cancel} onConfirm={this.confirm}>
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>
            这里是正文内容，欢迎加入京东凹凸实验室
            这里是正文内容，欢迎加入京东凹凸实验室
            这里是正文内容，欢迎加入京东凹凸实验室
          </AtModalContent>
          <AtModalAction>
            <Button>取消</Button>
            <Button>确定</Button>
          </AtModalAction>
        </AtModal> */}
        {/* <AtTabBar
          tabList={[
            { title: "待办事项", text: 8 },
            { title: "拍照" },
            { title: "通讯录", dot: true }
          ]}
          onClick={this.barClick}
          current={this.state.barCur}
        /> */}
        <AtDrawer
          show={this.state.show}
          mask
          onClose={this.onClose}
          items={["菜单1", "菜单2"]}
        />
        <AtModal
          isOpened={this.state.isOpened}
          title="标题"
          cancelText="取消"
          confirmText="确认"
          onCancel={this.cancel}
          onConfirm={this.cancel}
          content="欢迎加入京东凹凸实验室\n\r欢迎加入京东凹凸实验室"
        />
      </View>
    );
  }
}
