import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtToast } from 'taro-ui';
import Taro from '@tarojs/taro';
import "taro-ui/dist/style/components/toast.scss";

import LeaveTimeForm from './leaveTimeForm';
import './beginLeave.less';

import { UserInfo, Leave } from '../../../interface/index';

interface MyProps {
    submitter: UserInfo,
    handleProxy: Function,
    typeName: string | undefined, // 请假类型(中文)
    type: string | undefined, // 请假类型
    rest: number | undefined, // 剩余请假天数
    dispense: string | undefined // 分发方式
}
interface MyState {
  leave: Leave,
  leaveList?: Array<Leave>,
  isToastOpened: boolean,
  toastText: string
}

// 发起提交
export default class BeginLeave extends Component<MyProps, MyState> {

  constructor(props) {
    super(props);
    let { type, typeName, dispense, rest } = this.props;
    this.state = {
      leave: {
        rest,
        dispense,
        type,
        name: typeName
      },
      isToastOpened: false,
      toastText: ''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillReceiveProps(props: MyProps) {
    let { type, typeName, dispense, rest } = props;
    this.setState({
      leave: {
        type,
        name: typeName,
        dispense,
        rest
      }
    })
  }


  // componentDidUpdate(prevProps) {
    
  // }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleProxy() {
    //   代他人提交
    this.props.handleProxy();
  }

  onFormSubmit(params) {
    console.log('parent onFormSubmit', params);
    let _this = this;
    this.setState({
      isToastOpened: true,
      toastText: '请求中，请稍后'
    });
    // 调用接口提交表单
    setTimeout(() => {
      _this.setState({
        isToastOpened: false,
        toastText: ''
      });
      Taro.navigateTo({
        url: '/pages/index/index'
      })
      
    }, 3000);
  }
  

  render () {
    let { isToastOpened, toastText } = this.state;

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
            
                {/* <View className='btn' onClick={this.handleProxy.bind(this)}>代他人提交</View> */}
            </View>            
            <View className='type cell'>
                <View className='cell-label'>
                    <View className='required'>*</View>
                    请假类型
                </View>
                <View className={this.state.leave.type ? 'cell-value' : 'cell-placeholder'}>
                 { this.state.leave.type ? this.state.leave.name : '请选择'}                 
                </View>
                <View className='suffix'>
                    <View className='at-icon at-icon-chevron-right'></View>
                </View>
            </View>
            <View className='balance'>
              假期余额：{ this.state.leave.rest }
            </View>

            <LeaveTimeForm
              onFormSubmit={this.onFormSubmit.bind(this)}
            ></LeaveTimeForm>

            <AtToast isOpened={isToastOpened} status='loading' text={toastText}></AtToast>
        </View>
    )
  }
}
