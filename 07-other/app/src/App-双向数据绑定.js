import React, { Component } from "react";
// 双向数据绑定
export default class App extends Component {
  state = {
    uname: "",
    upwd: "",
    agreen: false,
  };

  _btn = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="用户名"
          value={this.state.uname}
          onChange={this._onChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="密码"
          value={this.state.upwd}
          onChange={(e) => this.setState({ upwd: e.target.value })}
        ></input>
        <br />
        <input
          type="checkbox"
          checked={this.state.agreen}
          onChange={(e) => this.setState({ agreen: e.target.checked })}
        />
        同意条款
        <br />
        <button
          onClick={() => alert(this.state.uname + this.state.upwd)}
          disabled={!this.state.agreen}
        >
          登录
        </button>
      </div>
    );
  }

  // 合成事件 react改装过
  _onChange = (event) => {
    // persist 调用了 打印才可以看到
    /* event.persist();
        console.log(event) */
    /*  this.setState(
            {
                uname: event.target.value
            }
        ) */
    // 语法糖
    let uname = event.target.value;
    this.setState({ uname });
  };
}
