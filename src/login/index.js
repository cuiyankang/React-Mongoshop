import React from "react";
import {LoginCSS} from "./styled";

class Login extends React.Component{
    constructor(){
        super();

    }
    render(){

        return (
            <LoginCSS>
                <div className="top">
                    <div className="header">
                        <div className="iconfont icon">&#xe606;</div>
                        <div>登录</div>
                        <div className="right">&nbsp;</div>
                    </div>
                </div>
                <form action="">
                    <div className="phone">
                        <div className="iconfont icon">&lt;</div>
                        <input type="text" className="phoneInput" placeholder="手机号码"/>
                        <div className="iconfont cancel">&gt;</div>
                    </div>
                    <div className="phone">
                        <div className="iconfont icon">&lt;</div>
                        <input type="text" className="phoneInput" placeholder="密码"/>
                        <div className="iconfont cancel">&gt;</div>
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


}

export default Login;