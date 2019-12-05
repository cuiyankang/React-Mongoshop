import React, { Component, Fragment } from 'react'
import { ShoppingCartCSS } from "./styled"
import { withRouter } from "react-router-dom"
import shop from "../../static/shopping.gif";
@withRouter
class ShoppingCart extends Component {
    constructor() {
        super();
        this.state = {
            data:JSON.parse(localStorage.getItem("cart")),
            all:0,
            selectAll:"",
            money:0
        }
    }
    render() {
        let data = JSON.parse(localStorage.getItem("cart"));
        console.log(data[0].checked,1032456);
        let { all,selectAll,money } = this.state;
        if(data){
            for(var i=0;i<data.length;i++){
                if(data[i].checked==true){
                    all++;
                    money+=data[i].num*data[i].price;
                }
            }
            console.log(all);
            if(all==data.length){
                this.state.selectAll=true;
                selectAll=true;
            }else{
                this.state.selectAll=false;
                selectAll=false;
            }   
        }
        return (
            <ShoppingCartCSS>
                <div className="header">
                    <div className="iconfont icon" onClick={this.handleJump.bind(this)}>&#xe605;</div>
                    <div className="titleTop">购物车</div>
                    <div className="iconfont right">&#xe601;</div>
                </div>
                <div className="centerAll">
                    {
                        data? 
                        <ul>
                            {
                                data ? data.map((item, index) => (
                                    <div key={item.id}>
                                        <li className="shop">
                                            {
                                                item.checked==true?<input type="checkbox" className="radio" name="aaa" checked onClick={this.handleChecked.bind(this,index)}/>:""
                                            }
                                            {
                                                item.checked==false?<input type="checkbox" className="radio" name="aaa" onClick={this.handleChecked.bind(this,index)}/>:""
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
                                                    <button onClick={this.handleReduce.bind(this,index)}>-</button>
                                                    <input type="text" value={item.num} onChange={this.handleChangeData.bind(this,index)} />
                                                    <button onClick={this.handleAdd.bind(this,index)}>+</button>
                                                </div>
                                            </div>
                                        </li>
                                        <hr />
                                    </div>
                                )) : ""
                            }
                        </ul>:<div className="noShop">
                        <img src={shop} alt="" />
                    </div>
                        
                    }
                    
                </div>
                <div className="all">
                    {
                        selectAll==true?<input type="checkbox" className="radio left" name="aaa" checked onClick={this.handleSelectAll.bind(this)}/>:""
                    }
                    {
                        selectAll==false?<input type="checkbox" className="radio left" name="aaa" onClick={this.handleSelectAll.bind(this)}/>:""
                    }
                    <div className="allMoney">合计<span>￥{money.toFixed(2)}</span></div>
                    <div>不含运费</div>
                    <button>结算</button>
                </div>
            </ShoppingCartCSS>
        )
    }
    handleChecked(index){
        this.state.data[index].checked=!this.state.data[index].checked;
        localStorage.setItem("cart",JSON.stringify(this.state.data));
        this.forceUpdate();
    }
    handleJump() {
        this.props.history.goBack();
    }
    handleChangeData(index,e) {
        let val = e.target.value;
        // console.log(val);
        this.state.data[index].num = val;
        localStorage.setItem("cart",JSON.stringify(this.state.data));
        this.forceUpdate();
    }

    handleReduce(index) {
        if(this.state.data[index].num>1){
            this.state.data[index].num --;
            localStorage.setItem("cart",JSON.stringify(this.state.data));
            this.forceUpdate();
        }
    }
    handleAdd(index) {
        this.state.data[index].num ++;
        localStorage.setItem("cart",JSON.stringify(this.state.data));
        this.forceUpdate();
    }
    handleSelectAll(){
        let selectAll = !this.state.selectAll;
        this.setState({
            selectAll:selectAll,
        })
        let data= this.state.data;
        if(data){
            if(selectAll==true){
                for(var i=0;i<data.length;i++){
                    data[i].checked=true;
                }
                localStorage.setItem("cart",JSON.stringify(data));
                this.forceUpdate()
            }else{
                for(var i=0;i<data.length;i++){
                    data[i].checked=false;
                }
                localStorage.setItem("cart",JSON.stringify(data));
                this.forceUpdate()
            }
        }
    }
}

export default ShoppingCart;
