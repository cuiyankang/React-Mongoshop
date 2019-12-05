import React, { Component, Fragment } from 'react'
import { ShoppingCartCSS } from "./styled"
import { withRouter } from "react-router-dom"
import shop from "../../static/shopping.gif";
@withRouter
class ShoppingCart extends Component {
    constructor() {
        super();
        let { sCount, sPrice } = this.countPrice(JSON.parse(localStorage.getItem("cart")));
        this.state = {
            data: JSON.parse(localStorage.getItem("cart")),
            selectedAll: true,
            sCount,
            sPrice
        }
    }
    render() {
        let { data, selectedAll, sPrice, sCount } = this.state;//信息
        return (
            <ShoppingCartCSS>
                <div className="header">
                    <div className="iconfont icon" onClick={this.handleJump.bind(this)}>&#xe605;</div>
                    <div className="titleTop">购物车</div>
                    <div className="iconfont right">&#xe601;</div>
                </div>
                <div className="centerAll">
                    {
                        data?<ul ref="box">
                        {
                                data
                                ?
                                data.map((item, index) => (
                                    <div key={item.id}>
                                        <li className="shop">
                                            <input type="checkbox" className="radio" name="aaa" ref="box" checked={item.flag} onChange={this.handleChange.bind(this, index)} />
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
                                                <button onClick={this.handleReduce.bind(this, index)}>-</button>
                                                    <input type="text" value={item.num} onChange={this.handleChangeData.bind(this)} />
                                                    <button onClick={this.handleAdd.bind(this, index)}>+</button>
                                                </div>
                                                <div className="num">
                                                    小计&nbsp;&nbsp;
                                                <span className="money">
                                                        ￥{item.num * item.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <hr />
                                    </div>
                                ) )
                                : 
                                 ("")
                                }
        
                     </ul>:<div className="noShop">
                                <img src={shop} alt="" />
                            </div>
                    }
                    

                </div>
                <div className="all">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                        <input type="checkbox" className="radio left" name="aaa" checked={selectedAll ? 'checkout' : ''} onChange={this.handleAllChange.bind(this)} />全选
                    </div>
                    <div className="allMoney">合计:{sPrice}</div>
                    <div>
                        数量:
                        <span>
                            {sCount}
                        </span>
                    </div>
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
    handleChangeData(index, e) {
        let val = e.target.value;
        // console.log(val);
        this.state.data[index].num = val;
        localStorage.setItem("cart", JSON.stringify(this.state.data));
        this.forceUpdate();
    }
    handleChange(index) {
        //全选状态的单选，判断
        let cart = this.state.data;
        cart[index].flag = !cart[index].flag;
        this.setState({
            data: cart
        })
        let bStop = true;
        for (var i = 0; i < cart.length; i++) {
            if (!cart[i].flag) {
                bStop = false;
            }
        }
        this.setState({
            selectedAll: bStop,
        })



        //总价和总量
        let { sCount, sPrice } = this.countPrice(cart);
        this.setState({
            sCount,
            sPrice
        })
    }
    countPrice(cart) {
        let sPrice = 0, sCount = 0;

        for (var i = 0; i < cart.length; i++) {
            if (cart[i].flag) {
                sCount += cart[i].num;//数量
                sPrice += cart[i].num * cart[i].price;//总价：数量*单价
            }
        }
        return {
            sCount,
            sPrice
        }
    }
    handleAllChange() {
        this.setState({
            selectedAll: !this.state.selectedAll,
        })
        this.state.data.map((item, index) => {
            item.flag = !this.state.selectedAll;
        })
        if (this.state.selectedAll) {
            this.setState({
                sCount: 0,
                sPrice: 0
            })
        } else {
            let { sCount, sPrice } = this.countPrice(this.state.data);
            this.setState({
                sCount,
                sPrice
            })
        }
    }
    handleReduce(index) {
        let cart = this.state.data;
        cart[index].num--;
        if (cart[index].num < 1) {
            cart[index].num = 1;
        }
        this.setState({
            data: cart
        })
        let { sCount, sPrice } = this.countPrice(cart);
        this.setState({
            sCount,
            sPrice
        })
    }
    handleAdd(index) {
        let cart = this.state.data;
        cart[index].num++;
        this.setState({
            data: cart
        })
        let { sCount, sPrice } = this.countPrice(cart);
        this.setState({
            sCount,
            sPrice
        })
    }
}

export default ShoppingCart;
