import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { AtIcon } from 'taro-ui'

import 'taro-ui/dist/style/components/icon.scss';
import "taro-ui/dist/style/components/message.scss";
import './index.less'

import LeaveList from './components/leaveList';
import BackList from './components/backList';

interface MyProps {}
interface MyState {
  current: number
}


export default class Index extends Component<MyProps, MyState> {

  constructor(props) {
    super(props);
    this.state = {
      current: 1
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  leave(data) {
    console.log(data);
    Taro.navigateTo({url: '/pages/form/form'})
  }

  handleNavChange(current) {
    console.log('current', current);
    this.setState({
      current
    })

  }

  render () {
    return (
      <View className='index'>        
        <View className='index-container'>
          { this.state.current === 0 ? <LeaveList /> : this.state.current === 1 ? <BackList /> : ''}
        </View>
        
        <View className='footer'>
          <View className={['nav', this.state.current === 0 ? 'current' : ''].join(' ')} onClick={this.handleNavChange.bind(this, 0)}>
            <AtIcon value='block iconfont icon-qingjia' size='30' ></AtIcon>
            我要请假
          </View>
          <View className={['nav', this.state.current === 1 ? 'current' : ''].join(' ')} onClick={this.handleNavChange.bind(this, 1)}>
            <AtIcon value='block iconfont icon-xiaojiaguanli' size='30'></AtIcon>
            我要销假
          </View>
          <View className={['nav', this.state.current === 2 ? 'current' : ''].join(' ')} onClick={this.handleNavChange.bind(this, 2)}>
            <AtIcon value='block iconfont icon-biaoqiankuozhan_jilu-378' size='30'></AtIcon>
            请假记录
          </View>
        </View>
      </View>
    )
  }
}
