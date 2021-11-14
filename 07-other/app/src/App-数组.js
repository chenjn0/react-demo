import React, { Component } from 'react'
// 列表渲染
export default class App extends Component {
    names = ['xx','y','xxxx'];
    // JSX 标签
    btns = [<button>xx</button>,<button>yy</button>];

    emps = [
        {name: 'qqq', age: 20, phone: '111'},
        {name: 'www', age: 24, phone: '222'},
        {name: 'eeee', age: 10, phone: '333'},
    ]
    // 数字循环
    showBtns() {
        let arr = []

        this.names.forEach((item,index) => {
            // JSX 数组中的元素必须待唯一标识
            arr.push(<button key={index}>{item}</button>)
        })

        return arr;
    }

    showLi() {
        let arr = []

        this.names.forEach((item,index) => {
            // JSX 数组中的元素必须待唯一标识
            arr.push(<li key={index}>{item}</li>)
        })

        return arr;
    }

    showTable() {
        let arr = [];

        this.emps.forEach((item,index) => {
            arr.push(<tr key = {index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
            </tr>)
        })

        return arr;
    }

    // map 处理数组中
    showTable2() {

        return this.emps.map((item,index) => {
            return (<tr key = {index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
            </tr>)
        })

    }
    render() {
        return (
            <div>
                <ul>{this.showLi()}</ul>
                <table border="1">
                    <thead>
                    <tr>
                        <td>序号</td>
                        <td>姓名</td>
                        <td>年龄</td>
                        <td>手机号</td>
                    </tr>
                    </thead>
                    <tbody>
                        {this.showTable2()}
                    </tbody>
                    
                </table>
            </div>
        )
    }
}
