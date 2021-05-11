import { Component } from 'react'
import { View } from '@tarojs/components'

import Taro from '@tarojs/taro';
import { AtTabBar } from 'taro-ui'

import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";

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
        <AtTabBar tabList={this.state.tabList} onClick={this.handleTabChange.bind(this, )} current={this.state.current} />
      </View>
    )
  }
}
