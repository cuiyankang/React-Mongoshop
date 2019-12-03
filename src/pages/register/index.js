import React from "react";
import {RegisterCSS} from "./styled";
import {withRouter} from "react-router-dom";
@withRouter
class Register extends React.Component{
    constructor(){
        super();
        this.state={
            user:"",
            pass:"",
        }

    }
    render(){
        console.log(this.props,555);
        let {user,pass} = this.state;
        return (
            <RegisterCSS>
                <div className="top">
                    <div className="header">
                        <div className="iconfont icon" onClick={this.handleJump.bind(this)}>&#xe605;</div>
                        <div>注册</div>
                        <div className="right">&nbsp;</div>
                    </div>
                </div>
                <form action="">
                    <div className="phone">
                        <div className="iconfont icon">&#xe70a;</div>
                        <input type="text" className="phoneInput" placeholder="手机号码" value={user} onChange={this.handleChangeUser.bind(this)}/>
                        <div className="iconfont cancel" onClick={this.handleCancelAll.bind(this)}>&#xe609;</div>
                    </div>
                    <div className="phone">
                        <div className="iconfont icon">&#xe613;</div>
                        <input type="text" className="phoneInput" placeholder="密码" value={pass} onChange={this.handleChangePass.bind(this)}/>
                        <div className="iconfont cancel">&#xe63e;</div>
                    </div>
                    <div className="button" onClick={this.handleLogin.bind(this)}>注册</div>
                    <div className="registerNow">已有账号？立即<a href="http://localhost:3000/#/login">登录</a></div>
                </form>
                <div className="bottom">
                    <a href="">验证码登录</a>
                    <span>|</span>
                    <a href="">找回密码</a>
                </div>
            </RegisterCSS>
        )
    }
    handleJump(){
        this.props.history.goBack();
    }
    handleChangeUser(e){
        let value=e.target.value;
        this.setState({
            user:value
        })
    }
    handleChangePass(e){
        let value=e.target.value;
        this.setState({
            pass:value
        })
    }
    handleCancelAll(){
        this.setState({
            user:""
        })
    }
    handleLogin(){
        let user=this.state.user;
        let pass = this.state.pass;
        console.log(user,pass,55555);
    }


}

export default Register;