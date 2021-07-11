import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro';

import "taro-ui/dist/style/components/message.scss";

import './leaveList.less';

import { Leave } from '../../../interface/index';


interface MyProps {}
interface MyState {
  leaveList: Array<Leave>
  
}


export default class LeaveList extends Component<MyProps, MyState> {

  constructor(props) {
    super(props);
    this.state = {
      leaveList: [
        {
          rest: 9,
          dispense: "手动发放",
          type: "annual",
          name: "年休假"
        },
        {
          rest: 8,
          dispense: "手动发放",
          type: "eventLeaveSalary",
          name: "全薪事假"
        },
        {
          rest: 7,
          dispense: "手动发放",
          type: "sickLeaveSalary",
          name: "全薪病假"
        },
        {
          rest: 6,
          dispense: "手动发放",
          type: "restLeave",
          name: "调休"
        },
        {
          rest: 5,
          dispense: "手动发放",
          type: "weddingLeave",
          name: "婚假"
        },
        {
          rest: 4,
          dispense: "手动发放",
          type: "maternityLeave",
          name: "产假"
        },
        {
          rest: 3,
          dispense: "手动发放",
          type: "paternityLeave",
          name: "陪产假"
        },
        {
          rest: 2,
          dispense: "手动发放",
          type: "bereavementLeave",
          name: "丧假"
        },
        {
          rest: 1,
          dispense: "手动发放",
          type: "eventLeave",
          name: "事假"
        },
        {
          rest: 0,
          dispense: "手动发放",
          type: "sickLeave",
          name: "病假"
        },
        {
          rest: 10,
          dispense: "手动发放",
          type: "obstetricsLeave",
          name: "产检假"
        },
      ]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  leave(data) {
    const { type, name, rest } = data;
    Taro.navigateTo({url: `/pages/form/form?type=${type}&name=${name}&rest=${rest}`})
  }

  render () {
    let leaveListStr = this.state.leaveList.map((item, index) => {
      return (
        
        <View className='leave-content cell' key={index} onClick={() => this.leave(item)}>
          <View className='prefix'>
            <View className={['circle', 'circle-' + index].join(' ')}></View>
          </View>
          <View className='cell-label leave-name'>
            { item.name }
          </View>
          <View className='cell-content leave-content'>
            <View className='rest'>剩余{ item.rest }天</View>
            <View className='dispense'>{ item.dispense }</View>
          </View>
          <View className='suffix'>
            <View className='at-icon at-icon-chevron-right'></View>
          </View>
        </View>
      )
    })
    return (
      <View className='leave-list'>
        <View className='description'>请选择请假类型</View>
        { leaveListStr }
      </View>
      
    )
  }
}
