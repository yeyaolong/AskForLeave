import { Component } from 'react'
import { View } from '@tarojs/components'
import "taro-ui/dist/style/components/toast.scss";

import './table.less';


interface MyProps {
    columns: Array<{ title: string, key: string, width: number }>
    data: Array<any>
}
interface MyState {
}

// 发起提交
export default class Table extends Component<MyProps, MyState> {

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
    let _this = this;
    let tableHeadWidth = 0;
    
    const tableHeadStr = function() {
        let columnList: Array<any> = [];
        _this.props.columns.forEach((item, index) => {
            tableHeadWidth += item.width;
            let cellStyle = {
                width: item.width + 'px'
            };
            columnList.push(
                <View className={['column-name'].join(' ')} key={'table-column-' + index} style={cellStyle}>{item.title}</View>
            )
        })
        let tableHeadStyle = {
            width: tableHeadWidth
        };
        return (
            <View  className='table-head' style={tableHeadStyle}>
                { columnList }
            </View>
        );
    }();

    
    const tableBodyStr = function() {
        let result: Array<any> = [];
        _this.props.data.forEach((item, index) => {
            let tableCellList: Array<any> = [];
            _this.props.columns.forEach((item2) => {
                let dataKey = item2.key;
                // let cellWidth = item2.width;
                let cellStyle = {
                    width: item2.width + 'px'
                };

                tableCellList.push(
                    <View className={['table-cell', , index % 2 === 0 ? 'even' : 'odd'].join(' ')} key={'table-cell-' + index} style={cellStyle}>
                        <View style='margin-left: 18px;'>{item[dataKey]}</View>
                    </View>
                );
            });

            let tableRowStyle = {
                width: tableHeadWidth
            }

            result.push(
                <View className='table-row' style={tableRowStyle}>
                    { tableCellList }
                </View>
            );
        });
        return result;
    }();

    


    return (
        <View className='table'>
            { tableHeadStr }
            <View className='table-body'>
                { tableBodyStr }
            </View>
        </View>
    )
  }
}
