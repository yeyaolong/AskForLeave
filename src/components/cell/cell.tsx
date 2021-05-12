import { Component } from 'react'
import { View } from '@tarojs/components'

// import { CellData } from '../interface';

import './cell.less';

interface MyProps {
  cellPrefix?: string | Element,
  cellLabel?: string | Element,
  cellValue?: string | Element,
  cellPlaceholder?: string | Element,
  cellSuffix?: string | Element
}
interface MyState {
}

// 发起提交
export default class Cell extends Component<MyProps, MyState> {

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
  }

  render () {
    return (
        <View className='cell'>
            <View className='cell-prefix'>
            { this.props.cellPrefix }
            </View>
            <View className='cell-label'>
                { this.props.cellLabel }
            </View>
            <View className='cell-value'>
              { this.props.cellValue }
            </View>
            <View className='cell-placeholder'>
                { this.props.cellPlaceholder}
            </View>
            
            <View className='suffix'>
                { this.props.cellSuffix }
            </View>
        </View>
    )
  }
}
