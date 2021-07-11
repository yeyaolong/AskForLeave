import { Component } from 'react'
import { View, Picker } from '@tarojs/components'
import { AtList, AtListItem, AtTextarea, AtButton, AtToast } from 'taro-ui';

import "taro-ui/dist/style/components/calendar.scss";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/textarea.scss";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/toast.scss";

import "./leaveTimeForm.less";

interface MyProps {
  onFormSubmit: Function
}
interface MyState {
  startDateSel: string, // 选中的请假开始日期
  endDateSel: string, // 选中的请假结束日期
  reason: string, // 请假事由
  isToastOpened: boolean, // 显示提示
  toastText: string, // 提示文字
}

// 请假时间表单
export default class BeginLeave extends Component<MyProps, MyState> {

  constructor(props) {
    super(props);
    this.state = {
      startDateSel: '',
      endDateSel: '',
      reason: '',
      isToastOpened: false,
      toastText: ''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  onStartDateChange(event) {
    this.setState({
      startDateSel: event.detail.value
    });
  }

  onEndDateChange(event) {
    this.setState({
      endDateSel: event.detail.value
    });
  }

  handleReasonChange(reason) {
    this.setState({
      reason: reason
    });
  }

  handleFormSubmit() {
    if (this.checkForm()) {
      this.props.onFormSubmit(this.state);
    }
  }

  checkForm(): Boolean {
    let isToastOpened = false;
    let toastText = '';
    if (!this.state.endDateSel) {
      isToastOpened = true;
      toastText = '请选择结束日期';
    }
    if (!this.state.startDateSel) {
      isToastOpened = true;
      toastText = '请选择开始日期';
    }
    if (!this.state.reason) {
      isToastOpened = true;
      toastText = '请输入请假事由';
    }
    if (isToastOpened) {
      this.setState({
        isToastOpened,
        toastText
      });
      return false;
    }

    let _this = this;

    setTimeout(() =>{
      _this.setState({
        isToastOpened: false,
        toastText: ''
      });
    }, 1500);
    
    return true;
  }

  render () {
    let { isToastOpened, toastText } = this.state;
    return (
        <View className='leave-time-form'>
            <View>
              <View style='padding: 12px'>
                <View className='required'>*</View>开始时间
              </View>
              <View className='suffix'>
                <View className='page-section'>
                  <View>
                    <Picker mode='date' value={this.state.startDateSel} onChange={this.onStartDateChange.bind(this)}>
                      <AtList>
                        <AtListItem title='请选择日期' extraText={this.state.startDateSel} />
                      </AtList>
                    </Picker>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style='padding: 12px'>
                <View className='required'>*</View>结束时间
              </View>              
              <View className='page-section'>
                  <View>
                    <Picker mode='date' value={this.state.endDateSel} onChange={this.onEndDateChange.bind(this)}>
                      <AtList>
                        <AtListItem title='请选择日期' extraText={this.state.endDateSel} />
                      </AtList>
                    </Picker>
                  </View>
                </View>
            </View>
            <View>
              <View style='padding: 12px'>
                <View className='required'>*</View>请假事由
              </View>
              <View>
                <AtTextarea
                  value={this.state.reason}
                  onChange={this.handleReasonChange.bind(this)}
                  maxLength={200}
                  placeholder='请输入请假事由'
                />
              </View>
            </View>
            <AtButton onClick={this.handleFormSubmit.bind(this)} className='submit-button' type='primary' size='normal'>提交</AtButton>
            <AtToast isOpened={isToastOpened} status='error' text={toastText}></AtToast>
        </View>
    )
  }
}
