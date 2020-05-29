import React from 'react'
import {Row,Col} from 'antd'
import Header from './../../components/Header/index.js'
import Footer from '../../components/Footer/index.js'
import NavLeft from '../../components/NavLeft/index.js'
import './admin.less';
import './../../style/common.less'
export default class Admin extends React.Component {
    render() {
        return (
            <div>
                <Row className='container'>
                    <Col span = {4} className='nav-left'>
                        <NavLeft></NavLeft>
                    </Col>
                    <Col span = {20} className='main'> 
                        <Header></Header>
                        <Row className='content'>
                            {this.props.children}
                            <Footer></Footer>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
 }