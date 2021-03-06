import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtMessage } from 'taro-ui'

import Taro from '@tarojs/taro';

import "taro-ui/dist/style/components/message.scss";
import "taro-ui/dist/style/components/tabs.scss";

import BeginLeave from './components/beginLeave';
import Report from './components/report';
import './form.less'




import { Tab, UserInfo } from '../../interface/index';

interface MyProps {}
interface MyState { 
    tabList: Array<Tab> ,
    current: number,
    submitter: UserInfo,
    name: string | undefined, // 请假类型(中文)
    type: string | undefined, // 请假类型
    rest: number | undefined, // 剩余请假天数
    dispense: string | undefined // 分发方式
}


export default class Form extends Component<MyProps, MyState> {

  constructor(props) {
    super(props);
    this.state = {
        tabList: [
            {
                title: '发起提交'
            },
            {
                title: '查看报表'
            },
            {
                title: '查看数据'
            }
        ],
        current: 0,
        submitter: {
          avatar: 'https://avatars.githubusercontent.com/u/10331296?s=400&u=57d4cf383383ac6e3d21b704cfe7e7b3aaed777c&v=4',
          phone: '13712345671',
          name: '河童重工',
          id: ''
        },
        name: '',
        type: '',
        rest: 0,
        dispense: ''
    }
  }

  componentWillMount () { }

  componentDidMount () { 
    let { name, rest, type, dispense } = Taro!.getCurrentInstance()!.router!.params;
    let restNum = rest ? parseInt(rest) : 0;
    this.setState({
      name,
      rest: restNum,
      type,
      dispense
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleTabChange(current) {
    // Taro.navigateTo({url: '/pages/index/index'})
    this.setState({
        current
    })
  }
  // 代他人提交
  handleProxy() {
    Taro.atMessage({
      message: '代他人提交',
      type: 'info'
    });
  }

  render () {
    return (
      <View className='form'>
        <AtMessage />
        <AtTabs swipeable={false} current={this.state.current} tabList={this.state.tabList} onClick={this.handleTabChange.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View>
              <BeginLeave 
                typeName={this.state.name}
                type={this.state.type}
                rest={this.state.rest}
                dispense={this.state.dispense}
                submitter={this.state.submitter}
                handleProxy={this.handleProxy.bind(this)}
              />
            </View>
            
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            {/* <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View> */}
            <Report></Report>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
