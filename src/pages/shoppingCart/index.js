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
            selectAll: true,
        }
    }
    render() {
        let { data, selectAll } = this.state;
        let sum = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i].flag === true) {
                sum++
            }
        }
        if (sum === data.length) {
            localStorage.setItem("cart", JSON.stringify(data))
            this.state.selectAll = true
            selectAll=true
        }else{
            this.state.selectAll=false
            selectAll=false
        }



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
                                        {
                                            item.flag == true ? <input type="checkbox" className="radio" checked name="aaa" onChange={this.handleCheck.bind(this, index)} /> : ""
                                        }
                                        {
                                            item.flag == false ? <input type="checkbox" className="radio" name="aaa" onChange={this.handleCheck.bind(this, index)} /> : ""
                                        }
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
                    {
                        selectAll == true ? <input type="checkbox" className="radio left" checked name="aaa" onChange={this.handleSelectAll.bind(this)} /> : ""
                    }
                    {
                        selectAll == false ? <input type="checkbox" className="radio left" name="aaa" onChange={this.handleSelectAll.bind(this)} /> : ""
                    }

                    <div className="allMoney">合计￥100.00</div>
                    <div>不含运费</div>
                    <button>结算</button>
                </div>
            </ShoppingCartCSS>
        )
    }



    handleSelectAll() {
        let cart = this.state.data
        let UnselectAll = !this.state.selectAll
        localStorage.setItem("cart", JSON.stringify(cart))
        for (var i = 0; i < cart.length; i++) {
            if (UnselectAll === false) {
                cart[i].flag = false
            } else {
                cart[i].flag = true
            }
        }
        this.setState({
            selectAll: UnselectAll
        })
        this.forceUpdate()
        localStorage.setItem("cart", JSON.stringify(cart))
    }


    handleCheck(index) {
        let cart = this.state.data
        cart[index].flag = !cart[index].flag
        localStorage.setItem("cart", JSON.stringify(cart))
        // console.log(cart[index].flag,888)
        this.setState({
            data: cart
        })

        if (cart[index].flag === false) {
            localStorage.setItem("cart", JSON.stringify(cart))
            this.setState({
                selectAll: false
            })
            // console.log(this.state.selectAll, cart, 222)
        } else {
            let sum = 0;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].flag === true) {
                    sum++
                }
            }
            if (sum === cart.length) {
                localStorage.setItem("cart", JSON.stringify(cart))
                this.setState({
                    selectAll: true
                })
            }
        }

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
