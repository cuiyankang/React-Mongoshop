import React from "react";
import {MineCSS} from "./styled"


class Mine extends React.Component{
    constructor(){
        super()
        this.state={
            user:localStorage.getItem("user")
            
        }
        
    }
    render(){
        // console.log(this.props,224898419192);
        let {user} =this.state
        console.log(user)
        return (
            <MineCSS>
                <div className="top">
                    <div className="info">
                        <div className="nameImg">
                            <img src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/user.png?v=201908292038" alt=""/>
                            <div className="loginRegister">
                                欢迎您，{user}
                            </div>
                        </div>
                        <div className="icon">
                            <img src="https://cmsstatic.ffquan.cn//wap_new/user/images/icon/user_icon_set.svg?v=201908292038" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="position">
                    <div className="position1">
                        <div className="myCollection">
                            <div className="iconfont icon1">&#xe600;</div>
                            <div className="myCollection1">我的收藏</div>
                        </div>
                        <div className="myCollection">
                            <div className="iconfont icon1">&#xe681;</div>
                            <div className="myCollection1">浏览记录</div>
                        </div>
                    </div>
                </div>
                <img className="other" src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01JmuymZ2JJhzT7Yfy5_!!2053469401.png" alt=""/>
                <div className="total">
                    <p>
                        <span>常用工具</span>
                    </p>
                    <div className="position11">
                        <div className="myCollection">
                            <img src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/tools1.png?v=201908292038" alt=""/>
                            <div className="myCollection1">我的收藏</div>
                        </div>
                        <div className="myCollection">
                            <img src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/tools4.png?v=201912021833" alt=""/>
                            <div className="myCollection1">意见反馈</div>
                        </div>
                        
                    </div>
                </div>
                <div className="footer">footer</div>
            </MineCSS>
        )
    }
   

}

export default Mine;