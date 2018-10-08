import Taro, { Component } from "@tarojs/taro";
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  MovableArea,
  MovableView,
  Icon,
  RichText,
  Checkbox,
  Picker,
  Slider,
  Map
} from "@tarojs/components";

export default class List extends Component {
  config = {
    navigationBarTitleText: "组件测试"
  };
  state = {
    nodes: [
      {
        name: "div",
        attrs: {
          class: "div_class",
          style: "line-height: 60px; color: red;"
        },
        children: [
          {
            type: "text",
            text: "Hello World!"
          }
        ]
      }
    ],
    list: [
      {
        value: "美国",
        text: "美国",
        checked: false
      },
      {
        value: "中国",
        text: "中国",
        checked: true
      },
      {
        value: "巴西",
        text: "巴西",
        checked: false
      },
      {
        value: "日本",
        text: "日本",
        checked: false
      },
      {
        value: "英国",
        text: "英国",
        checked: false
      },
      {
        value: "法国",
        text: "法国",
        checked: false
      }
    ],
    selector: ["美国", "中国", "巴西", "日本"],
    selectorChecked: "美国",
    timeSel: "12:01",
    dateSel: "2018-04-22",
    list: [
      {
        value: "美国",
        text: "美国",
        checked: false
      },
      {
        value: "中国",
        text: "中国",
        checked: true
      },
      {
        value: "巴西",
        text: "巴西",
        checked: false
      },
      {
        value: "日本",
        text: "日本",
        checked: false
      },
      {
        value: "英国",
        text: "英国",
        checked: false
      },
      {
        value: "法国",
        text: "法国",
        checked: false
      }
    ]
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    });
  };

  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    });
  };
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    });
  };

  onTap() {}

  render() {
    return (
      <View>
        {/* <Text>组件展示页</Text> */}
        <Swiper
          className="test-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className="demo-text-1">1</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-2">2</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-3">3</View>
          </SwiperItem>
        </Swiper>
        <Text>移动区域</Text>
        <MovableArea style="height: 200px; width: 200px; background: red;">
          <MovableView
            style="height: 50px; width: 50px; background: blue;"
            direction="all"
          />
        </MovableArea>
        <Icon size="60" type="warn" color="#ccc" />
        <RichText nodes={this.state.nodes} />
        <Checkbox value="选中" checked>
          选中
        </Checkbox>
        <View className="page-section">
          <Text>地区选择器</Text>
          <View>
            <Picker
              mode="selector"
              range={this.state.selector}
              onChange={this.onChange}
            >
              <View className="picker">
                当前选择：
                {this.state.selectorChecked}
              </View>
            </Picker>
          </View>
        </View>

        <View className="page-section">
          <Text>时间选择器</Text>
          <View>
            <Picker mode="time" onChange={this.onTimeChange}>
              <View className="picker">
                当前选择：
                {this.state.timeSel}
              </View>
            </Picker>
          </View>
        </View>

        <View className="page-section">
          <Text>日期选择器</Text>
          <View>
            <Picker mode="date" onChange={this.onDateChange}>
              <View className="picker">
                当前选择：
                {this.state.dateSel}
              </View>
            </Picker>
          </View>
        </View>
        <View className="page-section">
          <Text>默认样式</Text>
          <Radio value="选中" checked>
            选中
          </Radio>
          <Radio style="margin-left: 20rpx" value="未选中">
            未选中
          </Radio>
        </View>
        <View className="page-section">
          <Text>推荐展示样式</Text>
          <View className="radio-list">
            <RadioGroup>
              {this.state.list.map((item, i) => {
                return (
                  <Label className="radio-list__label" for={i} key={i}>
                    <Radio
                      className="radio-list__radio"
                      value={item.value}
                      checked={item.checked}
                    >
                      {item.text}
                    </Radio>
                  </Label>
                );
              })}
            </RadioGroup>
          </View>
        </View>
        <View>
          <Text>设置 step</Text>
          <Slider step="1" value="50" />
          <Text>显示当前 value</Text>
          <Slider step="1" value="50" showValue />
          <Text>设置最小/最大值</Text>
          <Slider step="1" value="100" showValue min="50" max="200" />
        </View>
        <View>
          <Map onClick={this.onTap} />
        </View>
      </View>
    );
  }
}
