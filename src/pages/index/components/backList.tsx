// 销假
import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtMessage } from 'taro-ui'
import Taro from '@tarojs/taro'


import 'taro-ui/dist/style/components/icon.scss';
import "taro-ui/dist/style/components/message.scss";

import './backList.less';

import { Backinfo, UserInfo } from '../../../interface/index';


interface MyProps {}
interface MyState {
  backList: Array<Backinfo>,
  userInfo: UserInfo
}


export default class BackList extends Component<MyProps, MyState> {

  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
          id: '',
          name: '河童重工',
          phone: '13712345678',
          avatar: 'https://avatars.githubusercontent.com/u/10331296?s=400&u=57d4cf383383ac6e3d21b704cfe7e7b3aaed777c&v=4'
        },
        backList: [
            {
                id: 1,
                type: '调休',
                applyDate: '2021.03.11',
                starttime: '2021-03-22 08:30',
                endtime: '2021-03-22 18:00',
                status: 'success'
            },
            {
              id: 2,
              type: '年假',
              applyDate: '2020.02.18',
              starttime: '2020-02-19 上午',
              endtime: '2021-02-19 下午',
              status: 'error'
          },
        ]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  back() {
    console.log('销假');    
  }

  cancel(data) {
    // 撤销
    let backListCopy = JSON.parse(JSON.stringify(this.state.backList));
    let ind = -1;
    backListCopy.forEach((item, index) => {
      if (item.id === data.id) {
        ind = index;
      }
    });

    if (ind > -1) {
      backListCopy.splice(ind, 1);
      Taro.atMessage({
        'message': `撤销记录成功`,
        'type': 'success',
      });
      this.setState({
        backList: backListCopy
      });
    } else {
      Taro.atMessage({
        'message': `撤销记录失败`,
        'type': 'error',
      });
    }
  }

  edit(data) {
    // 修改
    Taro.atMessage({
      'message': `修改记录${data.starttime}~${data.endtime}`,
      'type': 'success',
    })
  }

  render () {
    let backListStr = this.state.backList.map((item, index) => {
        return (
            <View className='back-container' key={index} onClick={() => this.back()}>              
                <View className='avatar-container'>
                    <image 
                      className='avatar'
                      src={this.state.userInfo.avatar}
                    />
                </View>
                <View className='container'>
                  <View className='header'>
                    <View className='title'>
                      {this.state.userInfo.name}提交的请假
                    </View>
                    <View className='apply-date'>
                      { item.applyDate }
                    </View>
                  </View>
                  <View className='detail content'>
                    <View className='type'>请假类型: {item.type}</View>
                    <View className='start-time'>开始时间: {item.starttime}</View>
                    <View className='end-time'>结束时间: {item.endtime}</View>
                    <View className='operation'>
                      <View className={['status', item.status === 'success' ? 'success' : 'error'].join(' ')}>
                        {item.status === 'success' ? '审批通过' : '审批拒绝'}
                      </View>
                      {
                        item.status === 'success' ? 
                        (
                          <View className='btn-group'>
                            <View className='btn' onClick={this.cancel.bind(this, item)}>
                              撤销
                            </View>
                            <View className='divider'></View>
                            <View className='btn' onClick={this.edit.bind(this, item)}>
                              修改
                            </View>
                          </View>
                        ) : ''
                      }
                    </View>
                    
                  </View>
                </View>
            </View>
          )
    });
    return (
      <View className='back-list'>
         <AtMessage />
        { backListStr }
      </View>
    )
  }
}
