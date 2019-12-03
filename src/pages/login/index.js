import React from "react";
import {LoginCSS} from "./styled";
import {withRouter} from "react-router-dom";
@withRouter
class Login extends React.Component{
    constructor(){
        super();

    }
    render(){
        console.log(this.props,555);
        return (
            <LoginCSS>
                <div className="top">
                    <div className="header">
                        <div className="iconfont icon" onClick={this.handleJump.bind(this)}>&#xe605;</div>
                        <div>登录</div>
                        <div className="right">&nbsp;</div>
                    </div>
                </div>
                <form action="">
                    <div className="phone">
                        <div className="iconfont icon">&#xe70a;</div>
                        <input type="text" className="phoneInput" placeholder="手机号码"/>
                        <div className="iconfont cancel">&#xe609;</div>
                    </div>
                    <div className="phone">
                        <div className="iconfont icon">&#xe613;</div>
                        <input type="text" className="phoneInput" placeholder="密码"/>
                        <div className="iconfont cancel">&#xe63e;</div>
                    </div>
                    <div className="button">登录</div>
                    <div className="registerNow">还没有账号？立即<a href="#">注册</a></div>
                </form>
                <div className="bottom">
                    <a href="#">验证码登录</a>
                    <span>|</span>
                    <a href="#">找回密码</a>
                </div>
            </LoginCSS>
        )
    }
    handleJump(){
        this.props.history.goBack();
    }


}

export default Login;