import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { increate, increateAsync, fetch_user } from './actions/counter';

class App extends Component {

  render() {
    const { isFetch, error, user } = this.props.users;
    let data = "";
    if (isFetch) {
      data = '正在加载中。。。'
    } else if (user) {
      data = user.data[0]['name'];
    } else if (error) {
      data = error.message;
    }
    return (
      <div className="App">
        {/* 触发dispatch，发送对应的action */}
        <div style={{ marginBottom: 20 }}>
          <p>{this.props.counter}</p>
          <button onClick={() => this.props.increate()}>新增</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={() => this.props.increateAsync()}>异步新增</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={() => this.props.fetch_user()}>axios请求</button>
        </div>
        <h2>{data}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter, // state对应的key,在reducers/index.js中声明。
    users: state.us
  }
}

// mapStateToProps，在reducers/index.js中，通过connect导入对应的state
// { increate, increateAsync, fetch_user } ,通过connect导入对应的action，在view触发相应的action
export default connect(mapStateToProps, { increate, increateAsync, fetch_user })(App);
