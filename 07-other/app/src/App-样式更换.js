import React, { Component } from 'react'

// 外部文件引入
import "./App.css"

// 样式
// style 内联样式  css 外部样式
export default class App extends Component {

    state = {
        size: 18
    }

    show() {
        let size = this.state.size;
        if (size > 20) {
            return 'success'
        }
        return 'warning';
    }

    render() {
        return (
            <div>
                {/* JSX 中 style 写成对象类型*/}
                <button onClick={()=>this.setState({
                    size: this.state.size + 2
                })}>big</button>
                <div style={{color: 'red',fontSize: this.state.size + 'px'}}>测试</div>
                <div className={this.show()}>xx</div>
            </div>
        )
    }
}
