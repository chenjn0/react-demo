import React, { Component } from 'react'

export default class App extends Component {
  state = {
    num: 1,
    isLogin: 0
  }

  _doAdd = () => {
    this.setState(
      {
        num: this.state.num + 1
      }
    )
  }

  showLevel() {
    /**
     * 没有this 指向问题
     * 刷新时触发
     * 2. 一定要state 有关系,setState 时才会遍历和State 有关的UI
     * 变化 和state 有关
     */
    if(this.state.num == 1 ) 
        return <div>测试</div>
    if(this.state.num == 2 ) 
        return <div>NN</div>
    if(this.state.num == 3 ) 
        return <div>WW</div>
    return <div>xxxx</div>
  }

  // 条件渲染必须在外面渲染方法
  showLogin() {
    if (this.state.isLogin == 1) {
      return <div>欢迎xxx
        <button onClick={() => this.setState({isLogin: 0})}>退出</button>
      </div>
    }
    return <div><button onClick={() => this.setState({isLogin: 1})}>登录</button></div>
  }

  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={this._doAdd}>Add</button>
        {this.showLevel()}

        {this.showLogin()}
      </div>
    )
  }
}
