import React from "react";
import { Card, Button, message, Row, Col } from "antd";
import './index.less'

export default class Messages extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "胡萝卜菜",
    };
    setInterval(()=>{
      let systemTime = new Date().getTime();
      this.setState({
        systemTime
      })
    })
  }
  state = {}
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.username}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col span={4} className='breadcrumb-left'>首页</Col>
          <Col span={20} className='breadcrumb-right'>
    <span >{this.state.systemTime}</span>
            <span className='breadcrumb-right-weather'>天气</span>
          </Col>
        </Row>
      </div>
    );
  }
}
