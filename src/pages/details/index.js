import React from "react";
import {DetailsCSS} from "./styled";
import {withRouter} from "react-router-dom";
@withRouter
class Details extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return (
            <DetailsCSS>
                <img className="topImg" src="https://img.alicdn.com/imgextra/i4/93498899/O1CN01JNye6o2Fbn9Q2T8X2_!!93498899.jpg_480x480.jpg" alt=""/>
                <div className="iconfont iconL" onClick={this.handleJump.bind(this)}>&#xe605;</div>
                <div className="iconfont iconR">&#xe63a;</div>

                <div className="hot">
                    <img src="https://img.alicdn.com/imgextra/i1/2053469401/TB2PmMEwLiSBuNkSnhJXXbDcpXa-2053469401.png" alt=""/>
                    <div className="text">限时限量 疯狂抢购中</div>
                    <div className="time">
                        <div>距结束仅剩</div>
                        <p>26:26:28:0</p>
                    </div>
                </div>
                <div className="title"><span>天猫</span>韩国进口芭妮兰zero卸妆膏100ml</div>
                <div className="moneyNum">
                    <div>券后价<span>￥79</span></div>
                    <p>已售<span>5万</span>件</p>
                </div>
                <div className="originPrice">
                    <div className="price">天猫价$89</div>
                    <div className="right">
                        <span>√</span>包邮
                        <span>√</span>运费险
                    </div>
                </div>
                <a href="#" className="discount">
                    <div className="discountL">
                        <div className="discountLT">10元优惠券</div>
                        <div className="discountLB">使用期限:2019.11.29-2019.11.30</div>
                    </div>
                    <div className="discountR">立即领卷</div>
                </a>


                <div className="footer">
                    <div className="share">
                        <div className="iconfont iconS">&#xe663;</div>
                        <div className="share1">分享</div>
                    </div>
                    <div className="share">
                        <div className="iconfont iconS">&#xe665;</div>
                        <div className="share1">收藏</div>
                    </div>
                    <div className="passwordBuy">口令购买</div>
                    <div className="couponBuy">领券购买</div>
                </div>
            </DetailsCSS>
        )
    }
    handleJump() {
        this.props.history.goBack();
    }


}

export default Details;