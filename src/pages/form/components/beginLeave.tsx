import { Component } from 'react'
import { View } from '@tarojs/components'

// import Cell from '../../../components/cell/cell';

import './beginLeave.less'




import { UserInfo, Leave } from '../../../interface/index';

interface MyProps {
    submitter: UserInfo,
    handleProxy: Function
}
interface MyState {
  leave: Leave,
  balance: number,
  leaveList?: Array<Leave>
}

// 发起提交
export default class BeginLeave extends Component<MyProps, MyState> {

  constructor(props) {
    super(props);
    this.state = {
      leave: {
        rest: 3,
        dispense: "手动发放",
        type: "annual",
        name: "年休假"
      }
      // leaveList: [
      //   {
      //     rest: 3,
      //     dispense: "手动发放",
      //     type: "annual",
      //     name: "年休假"
      //   },
      //   {
      //     rest: 3,
      //     dispense: "手动发放",
      //     type: "eventLeaveSalary",
      //     name: "全薪事假"
      //   },
      //   {
      //     rest: 3,
      //     dispense: "手动发放",
      //     type: "sickLeaveSalary",
      //     name: "全薪病假"
      //   },
      //   {
      //     rest: 3,
      //     dispense: "手动发放",
      //     type: "restLeave",
      //     name: "调休"
      //   },
      //   {
      //     rest: 3,
      //     dispense: "手动发放",
      //     type: "weddingLeave",
      //     name: "婚假"
      //   },
      //   {
      //     rest: 3,
      //     dispense: "手动发放",
      //     type: "maternityLeave",
      //     name: "产假"
      //   },
      //   {
      //     rest: 3,
      //     dispense: "手动发放",
      //     type: "paternityLeave",
      //     name: "陪产假"
      //   },
      //   {
      //     rest: 3,
      //     dispense: "手动发放",
      //     type: "bereavementLeave",
      //     name: "丧假"
      //   },
      //   {
      //     rest: 3,
      //     dispense: "手动发放",
      //     type: "eventLeave",
      //     name: "事假"
      //   },
      //   {
      //     rest: 3,
      //     dispense: "手动发放",
      //     type: "sickLeave",
      //     name: "病假"
      //   },
      //   {
      //     rest: 3,
      //     dispense: "手动发放",
      //     type: "obstetricsLeave",
      //     name: "产检假"
      //   },
      // ]
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
        </View>
    )
  }
}
