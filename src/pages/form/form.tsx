import { Component } from 'react'
import { View } from '@tarojs/components'

import { AtTabs, AtTabsPane } from 'taro-ui'
import "taro-ui/dist/style/components/tabs.scss";

import './form.less'




import { Tab } from '../../interface/index';

interface MyProps {}
interface MyState { 
    tabList: Array<Tab> ,
    current: number
}


export default class Index extends Component<MyProps, MyState> {

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
        current: 0
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleTabChange(current) {
    // Taro.navigateTo({url: '/pages/index/index'})
    this.setState({
        current
    })
  }

  render () {
    return (
      <View className='index'>
        <AtTabs current={this.state.current} tabList={this.state.tabList} onClick={this.handleTabChange.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
