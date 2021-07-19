import { Component } from 'react';
import { View } from '@tarojs/components';
import "taro-ui/dist/style/components/toast.scss";

import Table from '../../../components/table';
import './report.less';


interface MyProps {
    
}
interface MyState {
    durationTime: number,
    formNumber: number,
    columns: Array<{title: string, key: string, width: number}>,
    tableData: Array<{ endTime: string, startTime: string, createTime: string, type: string, reason: string, durationTime: number }>
}

// 发起提交
export default class Report extends Component<MyProps, MyState> {

  constructor(props) {
    super(props);
    
    this.state = {
        durationTime: 17.5,
        formNumber: 5.0,
        columns: [
            {
                title: '结束时间',
                key: 'endTime',
                width: 200
            },
            {
                title: '开始时间',
                key: 'startTime',
                width: 200
            },
            {
                title: '提交时间',
                key: 'createTime',
                width: 200
            },
            {
                title: '请假类型',
                key: 'type',
                width: 100
            },
            {
                title: '请假原因',
                key: 'reason',
                width: 300
            },
            {
                title: '时长',
                key: 'durationTime',
                width: 100
            },
            
            
            
            
        ],
        tableData: [
            {
                endTime: '2019-01-01 18:00',
                startTime: '2019-01-01 09:00',
                createTime: '2018-12-31 09:00',
                reason: '回家过年',
                type: '年假',
                durationTime: 8.0
            },
            {
                endTime: '2020-01-01 18:00',
                startTime: '2020-01-01 09:00',
                createTime: '2019-12-31 09:00',
                reason: '回家过年',
                type: '事假',
                durationTime: 8.0
            },
            {
                endTime: '2021-01-01 18:00',
                startTime: '2021-01-01 09:00',
                createTime: '2020-12-31 09:00',
                reason: '回家过年',
                type: '调休',
                durationTime: 8.0
            },
            {
                endTime: '2022-01-01 18:00',
                startTime: '2022-01-01 09:00',
                createTime: '2022-12-31 09:00',
                reason: '回家过年',
                type: '年假',
                durationTime: 8.0
            },
            {
                endTime: '2023-01-01 18:00',
                startTime: '2023-01-01 09:00',
                createTime: '2022-12-31 09:00',
                reason: '回家过年',
                type: '陪产假',
                durationTime: 8.0
            },
        ]
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
        <View className='report'>
            <View className='overview'>
                <View className='flex-item form-number'>
                    <View className='name'>
                        表单提交量
                    </View>
                    <View className='value'>
                        { this.state.formNumber }
                    </View>
                </View>
                <View className='flex-item duration-time'>
                    <View className='name'>
                        时长
                    </View>
                    <View className='value'>
                        { this.state.durationTime }
                    </View>
                </View>
            </View>
            <View className='detail'>
                <View className='title'>
                    本表单明细数据示例如下(近30日提交前50条)
                </View>
                <Table 
                  columns={this.state.columns}
                  data={this.state.tableData}
                >
                </Table>

            </View>
        </View>
    )
  }
}
