import React, { Component} from 'react'
import BScroll from "better-scroll"
import {Bswrapper} from "./styled"

export default class BscrollCom extends Component {
    render() {
        return (
            <Bswrapper ref="wrapper">
               {this.props.children};
            </Bswrapper>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.refs.wrapper,{
            pullUpLoad:true,
            click:true,
            tap:true,
            mouseWheel: true
        });
    }
    handleScrollTo(y){
        this.scroll.scrollTo(0,y,300)//滚动到指定的位置四个参数，(x轴坐标，y轴坐标，time，easing缓动函数)
    }
    handlepullingUp(callback){
        this.scroll.on("pullingUp",()=>{
            callback();
        })
    }
    handlefinishPullUp(){
        this.scroll.finishPullUp();
        this.scroll.refresh();
    }
    handlerefresh(){
        this.scroll.refresh();
    }
}
