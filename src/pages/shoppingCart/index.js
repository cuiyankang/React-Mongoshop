import React, { Component } from 'react'
import { ShoppingCartCSS } from "./styled"
import { withRouter } from "react-router-dom"
import shop from "../../static/shopping.gif";
@withRouter
class ShoppingCart extends Component {
    constructor(){
        super();
        

        //存数据思路：详情页点击后存到localstorage中，然后在当前页面直接从localstorage中取数据进行渲染
        //修改数据时通过修改localstorage中的数据来实现对原数据的修改
        this.state={
            data:JSON.parse(localStorage.getItem("data")),
            num:"1"
        }
    }
    render() {
        let {data,num} = this.state;
        console.log(data);
        return (
            <ShoppingCartCSS>
                <div className="header">
                    <div className="iconfont icon" onClick={this.handleJump.bind(this)}>&#xe605;</div>
                    <div className="titleTop">购物车</div>
                    <div className="iconfont right">&#xe601;</div>
                </div>
                <div className="centerAll">
                    {/* <div className="top">
                        <input type="checkbox" className="radio" name="aaa"/>
                        <div className="imgAll">描述</div>
                        <div className="numberAll">数量</div>
                    </div> */}
                    <ul>
                        <li className="shop">
                            <input type="checkbox" className="radio" name="aaa" />
                            <img src="https://img.alicdn.com/imgextra/i3/3333859664/O1CN012LGA2FpnzqHNQpw_!!3333859664.jpg_310x310.jpg_.webp" alt="" />
                            <div className="detailsOther">
                                <div className="details">
                                    <div className="title">
                                        <p>新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果</p>
                                    </div>
                                    <div className="money">￥100.00</div>
                                </div>
                                <div className="num">
                                    数量
                                    <button onClick={this.handleReduce.bind(this)}>-</button>
                                    <input type="text" value={num} onChange={this.handleChangeData.bind(this)} />
                                    <button onClick={this.handleAdd.bind(this)}>+</button>
                                </div>
                            </div>
                        </li>
                        <hr />
                        <li className="shop">
                            <input type="checkbox" className="radio" name="aaa" />
                            <img src="https://img.alicdn.com/imgextra/i3/3333859664/O1CN012LGA2FpnzqHNQpw_!!3333859664.jpg_310x310.jpg_.webp" alt="" />
                            <div className="detailsOther">
                                <div className="details">
                                    <div className="title">
                                        <p>新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果新疆苹果</p>
                                    </div>
                                    <div className="money">￥100.00</div>
                                </div>
                                <div className="num">
                                    数量
                                    <button>-</button>
                                    <input type="text" value={num} onChange={this.handleChangeData.bind(this)} />
                                    <button>+</button>
                                </div>
                            </div>
                        </li>
                        <hr />
                    </ul>
                    
                    <div className="noShop">
                        <img src={shop} alt=""/>
                    </div>
                </div>
                <div className="all">
                    <input type="checkbox" className="radio left" name="aaa" />
                    <div className="allMoney">合计￥100.00</div>
                    <div>不含运费</div>
                    <button>结算</button>
                </div>
            </ShoppingCartCSS>
        )
    }
    handleJump() {
        this.props.history.goBack();
    }
    handleChangeData(e){
        let val = e.target.value;
        this.setState({
            // num:val
        })
    }

    //存localstorage，从localstorage中取数据   不能用双数据绑定，因为取出的数组长度不固定，state中的num无法做到唯一性
    //每次点击/修改数据时，从localstorage中重新获取数据
    handleReduce(){
        let num = this.state.num-1;
        // console.log(num);
        this.setState({
            num:num
        })
    }
    handleAdd(){
        let num = Number(this.state.num)+1;
        this.setState({
            num:num
        })
    }
}

export default ShoppingCart;
