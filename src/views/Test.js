/**
 * Created by lixiaoxi on 16/6/7.
 * @description
 */

import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import 'styles/test_less.less';

import 'styles/core.css';

import 'styles/test_scss.scss';

import { getDetail } from '../redux/modules/productDetail';

const testArr = [1,2,3,4,5]; 

const TestArrDom = (props) => {
 const domList = props.arr && props.arr.map((t, i) => {
    console.log(t,i);
    return <div key={`indes_${i}`}>{t}</div>
  });
  return <div>{domList}</div>
}

@connect((state) => ({
  data: state.data
}), (dispatch) => bindActionCreators(
  { getDetail }, dispatch))

class Test extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  goTo() {
    this.context.router.push('hello')
  }
  testArr() {
    const domList = testArr.map((t, i) => {
      console.log(t,i);
      return <div key={`indes_${i}`}>{t}</div>
    })
    return <div>{domList}</div>
  }
  componentDidMount() {
    console.log(this.props, 'props');
  }
  render() {
    console.log(this.props, 'props');
    return (<div className="test">Hello World!
      <div className="styleCore" onTouchTap={::this.goTo}>测试</div>
      <div className="scss_text">测试scss</div>
      <div className="styleTest">测试less</div>
      <div className="" onTouchTap={this.props.getDetail}>dispatch</div>
      <TestArrDom
        arr={testArr}
      />
    </div>);
  }

  componentDidMount() {
  }
}

export default Test;


