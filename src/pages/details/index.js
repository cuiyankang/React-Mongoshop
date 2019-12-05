import React from "react";
import { DetailsCSS } from "./styled";
import { withRouter } from "react-router-dom";
@withRouter

class Details extends React.Component {

    render() {
        
        if(JSON.parse(localStorage.getItem("ranking"))){
            var { dtitle, pic, jiage, quanJine, salesNum, xiaoliang, yuanjia } = JSON.parse(localStorage.getItem("ranking")) ? JSON.parse(localStorage.getItem("ranking")) : this.props.location.query;
        }else if(JSON.parse(localStorage.getItem("foldup")) ){
            var { dtitle, pic, jiage, quanJine, salesNum, xiaoliang, yuanjia } = JSON.parse(localStorage.getItem("foldup")) ? JSON.parse(localStorage.getItem("foldup")) : this.props.location.query;
        }else if(JSON.parse(localStorage.getItem("half"))){
            var { name, picUrl, price, itemSoldNum, yijuhua } = JSON.parse(localStorage.getItem("half")) ? JSON.parse(localStorage.getItem("half")) : this.props.location.query;
        }else if(JSON.parse(localStorage.getItem("sortlist"))){
            var { d_title, pic, itemSoldNum, yijuhua, quan_jine ,yuanjia,jiage} = JSON.parse(localStorage.getItem("sortlist")) ? JSON.parse(localStorage.getItem("sortlist")) : this.props.location.query;
        }

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
                    <div>券后价<span>￥{jiage?jiage:price}</span></div>
                    {yijuhua ? <p>{yijuhua}</p> : <p>已售<span>{itemSoldNum ? itemSoldNum : xiaoliang}</span>件</p>}

                </div>
                <div className="originPrice">
                    <div className="price">天猫价￥{price ? price : yuanjia}</div>
                    <div className="right">
                        <span>√</span>包邮
                        <span>√</span>运费险
                    </div>
                </div>
                <a className="discount">
                    <div className="discountL">
                        <div className="discountLT">{quanJine ? quanJine : quan_jine}元优惠券</div>
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
        // alert("去购物车")
        if(this.props.location.query){
            let dataProps=this.props.location.query;
            let data = {
                id:dataProps.id,
                name:dataProps.name ? dataProps.name : dataProps.dtitle ? dataProps.dtitle : dataProps.d_title,
                price:dataProps.jiage?dataProps.jiage:dataProps.price,
                num:1,
                flag:true,
                pic:dataProps.picUrl ? dataProps.picUrl : dataProps.pic
            }
            if(!localStorage.getItem("cart")){
                localStorage.setItem("cart","["+JSON.stringify(data)+"]");
            }else{
                let dataCart = JSON.parse(localStorage.getItem("cart"))
                let has=0;
                for(var i=0;i<dataCart.length;i++){
                    if(dataCart[i].id==dataProps.id){
                        has=1;
                        let num = dataCart[i].num+1;
                        let dataNew = {
                            id:dataCart[i].id,
                            name:dataCart[i].name,
                            price:dataCart[i].price,
                            num:num,
                            flag:true,
                            pic:dataCart[i].picUrl ? dataCart[i].picUrl : dataCart[i].pic
                        }
                        dataCart.splice(i,1,dataNew);
                        localStorage.setItem("cart",JSON.stringify(dataCart));
                        break;
                    }
                }
                if(has==0){
                    dataCart.push(data);
                    localStorage.setItem("cart",JSON.stringify(dataCart));
                }
            }
        }else{
            if(JSON.parse(localStorage.getItem("ranking"))){
                let data1=JSON.parse(localStorage.getItem("ranking"));
                let cartData = JSON.parse(localStorage.getItem("cart"));
                for(var i=0;i<cartData.length;i++){
                    if(data1.id==cartData[i].id){
                        let num = cartData[i].num+1;
                        let data = {
                            id:cartData[i].id,
                            name:cartData[i].name,
                            price:cartData[i].price,
                            num:num,
                            flag:true,
                            pic:cartData[i].picUrl ? cartData[i].picUrl : cartData[i].pic
                        }
                        cartData.splice(i,1,data);
                        localStorage.setItem("cart",JSON.stringify(cartData));
                        break;
                    }
                }
            }else if(JSON.parse(localStorage.getItem("foldup")) ){
                let data1=JSON.parse(localStorage.getItem("foldup"));
                let cartData = JSON.parse(localStorage.getItem("cart"));
                for(var i=0;i<cartData.length;i++){
                    if(data1.id==cartData[i].id){
                        let num = cartData[i].num+1;
                        let data = {
                            id:cartData[i].id,
                            name:cartData[i].name,
                            price:cartData[i].price,
                            num:num,
                            flag:true,
                            pic:cartData[i].picUrl ? cartData[i].picUrl : cartData[i].pic,
                        }
                        cartData.splice(i,1,data);
                        localStorage.setItem("cart",JSON.stringify(cartData));
                        break;
                    }
                }
            }else if(JSON.parse(localStorage.getItem("half"))){
                let data1=JSON.parse(localStorage.getItem("half"));
                let cartData = JSON.parse(localStorage.getItem("cart"));
                for(var i=0;i<cartData.length;i++){
                    if(data1.id==cartData[i].id){
                        let num = cartData[i].num+1;
                        let data = {
                            id:cartData[i].id,
                            name:cartData[i].name,
                            price:cartData[i].price,
                            num:num,
                            flag:true,
                            pic:cartData[i].picUrl ? cartData[i].picUrl : cartData[i].pic
                        }
                        cartData.splice(i,1,data);
                        localStorage.setItem("cart",JSON.stringify(cartData));
                        break;
                    }
                }
            }else if(JSON.parse(localStorage.getItem("sortlist"))){
                let data1=JSON.parse(localStorage.getItem("sortlist"));
                let cartData = JSON.parse(localStorage.getItem("cart"));
                for(var i=0;i<cartData.length;i++){
                    if(data1.id==cartData[i].id){
                        let num = cartData[i].num+1;
                        let data = {
                            id:cartData[i].id,
                            name:cartData[i].name,
                            price:cartData[i].price,
                            num:num,
                            flag:true,
                            pic:cartData[i].picUrl ? cartData[i].picUrl : cartData[i].pic

                        }
                        cartData.splice(i,1,data);
                        localStorage.setItem("cart",JSON.stringify(cartData));
                        break;
                    }
                }
            }
        }
            this.props.history.push("/shoppingcart")
        
       
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