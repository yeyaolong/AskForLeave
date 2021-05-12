import { Component } from 'react'
import { View } from '@tarojs/components'

// import Cell from '../../../components/cell/cell';

import './beginLeave.less'




import { UserInfo } from '../../../interface/index';

interface MyProps {
    submitter: UserInfo,
    handleProxy: Function
}
interface MyState {
}

// 发起提交
export default class BeginLeave extends Component<MyProps, MyState> {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleProxy() {
    //   代他人提交
    this.props.handleProxy();
  }

  render () {
    let icon = (
      <View className='at-icon at-icon-chevron-right'></View>
    )
    return (
        <View className='begin-leave'>
            
            <View className='submitter cell'>
                <View className='cell-label'>
                    <View className='label'>提交人</View>
                    <image 
                      className='avatar'
                      src={this.props.submitter.avatar}
                    />
                    <View className='name'>{ this.props.submitter.name }</View>
                </View>
            
                <View className='btn' onClick={this.handleProxy.bind(this)}>代他人提交</View>
            </View>            
            <View className='type cell'>
                <View className='cell-label'>
                    请假类型
                </View>
                {/* <View className='cell-value'>
                    调休
                </View> */}
                <View className='cell-placeholder'>
                    请选择
                </View>
                <View className='suffix'>
                    <View className='at-icon at-icon-chevron-right'></View>
                </View>
            </View>
        </View>
    )
  }
}
