import { Component } from 'react'
import { View } from '@tarojs/components'

interface MyProps {
    
}
interface MyState {
}

// 请假时间表单
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

  

  render () {
    return (
        <View className='leave-time-form'>
            <View>
              <View className='required'>*</View>开始时间
              <View className='suffix'>
                <View className='at-icon at-icon-chevron-right'></View>
              </View>
            </View>
            <View>
              结束时间
            </View>
            <View>
              时长(小时)
            </View>
        </View>
    )
  }
}
