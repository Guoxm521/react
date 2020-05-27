import React from 'react' 
import {Button} from 'antd'
import './../../../node_modules/antd/dist/antd.less';
export default class Login extends React.Component {
 render() {
    return(
        <div>
            <h1>这是一个登录页面</h1>
            <Button type='primary'>按钮</Button>
        </div>
    )
  }
}