import React, { Component } from 'react'
// react 生命周期
/* 
    组件: 生成,更新,销毁的过程
    每个关键过程: 都会有对应的钩子函数被触发
*/

export default class App extends Component {

    state = {
        show: false
    }

    showSon() {
        if(this.state.show) 
            return <Son name="测试"/>
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({show: !this.state.show})}> 切换组件状态 </button>
                {this.showSon()}
            </div>
        )
    }
}

class Son extends Component {

    state = {
        count: 1
    }



    // 生命周期函数 生成,更新,销毁
    componentDidMount() {
        // 组件挂载并展示
        console.log('componentDidMount 组件生成并展示 -- 网络请求初始化数据')
        // js 一个变量如果没有声明,则首次使用的时候会自动声明
        this.timer = setInterval(()=> {
            this.setState({count: this.state.count + 1})
        },1000)
    }

    componentWillUnmount() {
        // 组件卸载并展示 不显示,就是卸载? 
        console.log('componentDidMount 组件销毁 销毁一些资源,比如定时器');
        clearInterval(this.timer);
    }

    componentDidUpdate(props,state) {
        // props : 外来属性
        // state : 状态值
        console.log('原/旧props:' , props,'新值:',this.props);
        console.log('原/旧state:' , state,'新值:',this.state);
    }

    // 提高渲染效率 - 即将显示的值
    shouldComponentUpdate(props,state) {
        // 通过次方法返回值,来决定页面要不要重新渲染

        return state.count % 2 == 0;

    }


    render() {
        return <h1>我是子组件: {this.state.count}</h1>
    }
}
