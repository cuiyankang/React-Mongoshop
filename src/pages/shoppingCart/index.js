import React, { Component } from 'react'
import {ShoppingCartCSS} from "./styled"
class ShoppingCart extends Component {
    render() {
        return (
            <ShoppingCartCSS>
                <div className="header">
                    <div className="iconfont icon" onClick={this.handleJump.bind(this)}>&#xe605;</div>
                    <div className="titleTop">购物车</div>
                    <div className="iconfont right">&#xe601;</div>
                </div>
                <div className="centerAll">
                    <div className="top">
                        <input type="checkbox" className="radio" name="aaa"/>
                        <div className="imgAll">描述</div>
                        <div className="numberAll">数量</div>
                    </div>
                    <ul>
                    <li className="shop">
                        <input type="checkbox" className="radio" name="aaa"/>
                        <img src="https://img.alicdn.com/imgextra/i3/3333859664/O1CN012LGA2FpnzqHNQpw_!!3333859664.jpg_310x310.jpg_.webp" alt=""/>
                        <div className="details">
                            <div className="title">新疆苹果</div>
                            <div className="money">￥100.00</div>
                        </div>
                        <div className="num">
                            <button>-</button>
                            <input type="text"/>
                            <button>+</button>
                        </div>
                    </li>
                   
                    
                    <li className="shop">
                        <input type="checkbox" className="radio" name="aaa"/>
                        <img src="https://img.alicdn.com/imgextra/i3/3333859664/O1CN012LGA2FpnzqHNQpw_!!3333859664.jpg_310x310.jpg_.webp" alt=""/>
                        <div className="details">
                            <div className="title">新疆苹果</div>
                            <div className="money">￥100.00</div>
                        </div>
                        <div className="num">
                            <button>-</button>
                            <input type="text"/>
                            <button>+</button>
                        </div>
                    </li>
                    </ul>
                    <div className="all">
                        <input type="checkbox" className="radio" name="aaa"/>
                        <div className="allMoney">合计</div>
                        <div>不含运费</div>
                        <button>结算</button>
                    </div>
                </div>
            
                
                    
                
            
            </ShoppingCartCSS>
        )
    }
    handleJump() {
        this.props.history.goBack();
    }
}

export default ShoppingCart;
