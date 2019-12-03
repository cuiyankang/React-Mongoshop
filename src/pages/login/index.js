import React from "react";
import { connect } from "react-redux";
import {LoginCSS} from "./styled";
import {withRouter} from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)

@withRouter
class Login extends React.Component{
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
                        <input type="text" className="phoneInput" placeholder="手机号码" value={user} onChange={this.handleChangeUser.bind(this)}/>
                        <div className="iconfont cancel" onClick={this.handleCancelAll.bind(this)}>&#xe609;</div>
                    </div>
                    <div className="phone">
                        <div className="iconfont icon">&#xe613;</div>
                        <input type="text" className="phoneInput" placeholder="密码" value={pass} onChange={this.handleChangePass.bind(this)}/>
                        <div className="iconfont cancel">&#xe63e;</div>
                    </div>
                    <div className="button" onClick={this.handleLogin.bind(this)}>登录</div>
                    <div className="registerNow">还没有账号？立即<a href="http://localhost:3000/#/register">注册</a></div>
                </form>
                <div className="bottom">
                    <a href="">验证码登录</a>
                    <span>|</span>
                    <a href="">找回密码</a>
                </div>
            </LoginCSS>
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
        console.log(user,pass,typeof user,55555);
        if(user==""){
            alert("请输入用户名");
        }else if(pass==""){
            alert("请输入密码");
        }else{
            // this.props.handleLoginData(user,pass);
        }
    }
  

}

export default Login;