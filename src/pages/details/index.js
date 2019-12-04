import React from "react";
import { DetailsCSS } from "./styled";
import { withRouter } from "react-router-dom";
@withRouter

class Details extends React.Component {

    render() {

        var { dtitle, pic, jiage, quanJine, salesNum, xiaoliang, yuanjia } = localStorage.getItem("ranking") ? JSON.parse(localStorage.getItem("ranking")) : this.props.location.query;
        var { dtitle, pic, jiage, quanJine, salesNum, xiaoliang, yuanjia } = localStorage.getItem("foldup") ? JSON.parse(localStorage.getItem("foldup")) : this.props.location.query;
        var { name, picUrl, price, itemSoldNum, yijuhua } = localStorage.getItem("half") ? JSON.parse(localStorage.getItem("half")) : this.props.location.query;
        var { d_title, picUrl, price, itemSoldNum, yijuhua, quan_jine } = localStorage.getItem("sortlist") ? JSON.parse(localStorage.getItem("sortlist")) : this.props.location.query;

        return (
            <DetailsCSS>
                <img className="topImg" src={picUrl ? picUrl : pic} />
                <div className="iconfont iconL" onClick={this.handleJump.bind(this)}>&#xe605;</div>
                <div className="iconfont iconR">&#xe63a;</div>

                <div className="hot">
                    <img src="https://img.alicdn.com/imgextra/i1/2053469401/TB2PmMEwLiSBuNkSnhJXXbDcpXa-2053469401.png" alt="" />
                    <div className="text">限时限量 疯狂抢购中</div>
                    <div className="time">
                        <div>距结束仅剩</div>
                        <p>26:26:28:0</p>
                    </div>
                </div>
                <div className="title"><span>天猫</span>{name ? name : dtitle ? dtitle : d_title}</div>
                <div className="moneyNum">
                    <div>券后价<span>￥{jiage}</span></div>
                    {yijuhua ? <p>{yijuhua}</p> : <p>已售<span>{itemSoldNum ? itemSoldNum : xiaoliang}</span>件</p>}

                </div>
                <div className="originPrice">
                    <div className="price">天猫价￥{price ? price : yuanjia}</div>
                    <div className="right">
                        <span>√</span>包邮
                        <span>√</span>运费险
                    </div>
                </div>
                <a href className="discount">
                    <div className="discountL">
                        <div className="discountLT">{quanJine?quanJine:quan_jine}元优惠券</div>
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
                    <div className="couponBuy" onClick={this.handleCart.bind(this)}>领券购买</div>
                </div>
            </DetailsCSS>
        )
    }
    handleCart() {
        alert("去购物车")
    }
    handleJump() {
        this.props.history.goBack();
        localStorage.removeItem('ranking')
        localStorage.removeItem("rankingID")
        localStorage.removeItem('foldup')
        localStorage.removeItem("foldupID")
        localStorage.removeItem('half')
        localStorage.removeItem("halfID")
        localStorage.removeItem('sortlist')
        localStorage.removeItem("sortlistID")

    }


}

export default Details;