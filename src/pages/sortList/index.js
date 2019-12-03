import React from "react"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { SortListCSS } from "./styled";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class SortList extends React.Component {
    constructor(){
        super();
        this.state={
            order:false
            // 默认升序排列
        }
    }
    render() {
        let data = this.props.data.sortList.data;
        console.log(data);
        return (
            <SortListCSS>
                <div className="header">
                    <div className="iconfont icon" onClick={this.handleJump.bind(this)}>&#xe605;</div>
                    <div className="headerTitle">男士潮服</div>
                    <div className="iconfont right">&#xe601;</div>
                </div>
                <div className="nav">
                    <div onClick={this.handleSortList.bind(this,"t")}>人气</div>
                    <div onClick={this.handleSortList.bind(this,"latest")}>最新</div>
                    <div onClick={this.handleSortList.bind(this,"sell")}>销量</div>
                    <div onClick={this.handleSortList.bind(this,this.state.order)}>价格</div>
                </div>
                <div className="center">
                    
                    <ul>
                        {
                            data.content ? data.content.map((item) => (
                                <li key={item.id}>
                                    <img src={item.pic} alt="" />
                                    <div className="allRight">
                                        <div className="liRightTop">
                                            <span className="logo">天猫</span>
                                            <span className="liRightT">{item.d_title}</span>
                                        </div>
                                        <div className="price">
                                            <span>券后</span>
                                            <span>￥{item.jiage}</span>
                                        </div>
                                        <div className="quan">
                                            <span>券</span>
                                            <span>{item.quan_jine}元</span>
                                        </div>
                                        <div className="saleNumber">
                                            <span>已售{item.xiaoliang}</span>
                                            <span>| 评论{item.comment}</span>
                                        </div>
                                    </div>
                                </li>
                            )):""
                        }

                    </ul>
                </div>

            </SortListCSS>
        )
    }
    handleSortList(px){
        if(px===true){
            this.props.handleSortList("price");
            this.state.order=false;
        }else if(px===false){
            this.props.handleSortList("price_h");
            this.state.order=true;
        }else{
            this.props.handleSortList(px);
        }
        
    }
    handleJump() {
        this.props.history.goBack();
    }
    componentDidMount() {
        this.props.handleSortList();
    }
}

export default SortList;