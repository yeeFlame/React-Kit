/**
 * Created by lixiaoxi on 16/6/7.
 * @description
 */

import React, {
    Component,
    PropTypes,
  } from 'react';
  
  import './testCom.scss';
  
  
  class TestCom extends Component {

    render() {
      return (<div className="test_com">
        <div className="test_txt">测试组件1
            <div className="test_txt2">测试组件2</div>
        </div>
        <div className="test_txt3">测试组件2</div>
      </div>);
    }
  
    componentDidMount() {
    }
  }
  
  export default TestCom;
  
