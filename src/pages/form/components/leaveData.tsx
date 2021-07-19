import { Component } from 'react';
import { View } from '@tarojs/components';
import "taro-ui/dist/style/components/toast.scss";



interface MyProps {
    
}
interface MyState {
    
}

// 发起提交
export default class Report extends Component<MyProps, MyState> {

  constructor(props) {
    super(props);
    
    this.state = {
       
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillReceiveProps() {
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  render () {

    return (
        <View className='leave-data'>
            <View></View>
        </View>
    )
  }
}
