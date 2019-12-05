import React, { Component, Fragment } from 'react'
import { ShoppingCartCSS } from "./styled"
import { withRouter } from "react-router-dom"
import shop from "../../static/shopping.gif";
@withRouter
class ShoppingCart extends Component {
    constructor() {
        super();
        this.state = {
            data: JSON.parse(localStorage.getItem("cart")),
            
        }
    }
    render() {
        let { data } = this.state;
        console.log(data, 222);
        return (
            <ShoppingCartCSS>
                <div className="header">
                    <div className="iconfont icon" onClick={this.handleJump.bind(this)}>&#xe605;</div>
                    <div className="titleTop">购物车</div>
                    <div className="iconfont right">&#xe601;</div>
                </div>
                <div className="centerAll">
                    <ul>
                        {
                            data ? data.map((item, index) => (
                                <div key={item.id}>
                                    <li className="shop">
                                        <input type="checkbox" className="radio" name="aaa" />
                                        <img src={item.pic} alt="" />
                                        <div className="detailsOther">
                                            <div className="details">
                                                <div className="title">
                                                    <p>{item.name}</p>
                                                </div>
                                                <div className="money">￥{item.price}</div>
                                            </div>
                                            <div className="num">
                                                数量
                                                <button onClick={this.handleReduce.bind(this)}>-</button>
                                                <input type="text" value={item.num} onChange={this.handleChangeData.bind(this)} />
                                                <button onClick={this.handleAdd.bind(this)}>+</button>
                                            </div>
                                        </div>
                                    </li>
                                    <hr />
                                </div>
                            )) : ""
                        }
                    </ul>
                    <div className="noShop">
                        <img src={shop} alt="" />
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
    handleChangeData(e) {
        let val = e.target.value;
        this.setState({
            // num:val
        })
    }

    //存localstorage，从localstorage中取数据   不能用双数据绑定，因为取出的数组长度不固定，state中的num无法做到唯一性
    //每次点击/修改数据时，从localstorage中重新获取数据
    handleReduce() {
        let num = this.state.data.num - 1;
       
    }
    handleAdd() {
        let num = this.state.data.num + 1;
        
    }
}

export default ShoppingCart;
