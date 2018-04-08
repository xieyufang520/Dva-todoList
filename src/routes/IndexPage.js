import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  addTodo = (item) => {
    this.setState({ value: '' });
    this.props.dispatch({
      type: 'indexPage/add',
      payload: item,
    });
  };

  deleteTodo = (index) => {
    this.props.dispatch({
      type: 'indexPage/delete',
      payload: index,
    });
  };

  render() {
    const { indexPage } = this.props;
    const { todoList = [] } = indexPage;

    return (
      <div className={styles.normal}>
        {/*<h1 className={styles.title}>Yay! Welcome to dva!</h1>*/}
        {/*<div className={styles.welcome} />*/}
        {/*<ul className={styles.list}>*/}
          {/*<li>To get started, edit <code>src/index.js</code> and save to reload.</li>*/}
          {/*<li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>*/}
        {/*</ul>*/}
        <input
          style={{ border: '1px solid red' }}
          type="text"
          value={this.state.value}
          onChange={(e) => this.setState({value: e.target.value})}
        />
        <button onClick={() => { this.addTodo(this.state.value) }}>添加</button>
        <ul>
          {
            todoList.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <span
                    style={{ marginLeft: '1rem', color: 'blue' }}
                    onClick={() => {this.deleteTodo(index) }}
                  >
                    删除
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { indexPage } = state;
  return {
    indexPage,
  };
}

export default connect(mapStateToProps)(IndexPage);
