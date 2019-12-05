import React from "react"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { SortListCSS } from "./styled";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class SortList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            px:"t",
            order:false,
            name_sort:this.props.location.name,
            id:this.props.location.query,
            // 默认升序排列
        }
    }
    render() {
        // console.log(this.props,888)
        let data = this.props.data.sortList.data;
        let {name_sort}=this.state;
        let {query,name} =JSON.parse(localStorage.getItem("sortdata"));
        
        // console.log(query,name,777)
        return (
            <SortListCSS>
                <div className="header">
                    <div className="iconfont icon" onClick={this.handleJump.bind(this)}>&#xe605;</div>
                    <div className="headerTitle">{name_sort?name_sort:name?name:"男士潮服"}</div>
                    <div className="iconfont right">&#xe601;</div>
                </div>
                <div className="nav">
                    <div onClick={this.handleSortList.bind(this,"t",query?query:22)}>人气</div>
                    <div onClick={this.handleSortList.bind(this,"latest",query?query:22)}>最新</div>
                    <div onClick={this.handleSortList.bind(this,"sell",query?query:22)}>销量</div>
                    <div onClick={this.handleSortList.bind(this,this.state.order,query?query:22)}>价格</div>
                </div>
                <div className="center">
                    
                    <ul>
                        {
                            data.content ? data.content.map((item) => (
                                <li key={item.id} onClick={this.handleGetitem.bind(this,item,item.id)}>
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
    handleGetitem(item,id){
        // console.log(item,id,555)
        this.props.history.push({pathname:"/details",id:id,query:item})
        localStorage.setItem("sortlist",JSON.stringify(item));
        localStorage.setItem("sortlistID",id)
    }
    handleSortList(px){
        
        let {query}=JSON.parse(localStorage.getItem("sortdata"));
        
        if(query){
            if(px===true){
                this.props.handleSortList("price",query);
                this.state.order=false;
            }else if(px===false){
                this.props.handleSortList("price_h",query);
                this.state.order=true;
            }else{
                this.props.handleSortList(px,query);
            }
        }else{
            if(px===true){
                this.props.handleSortList("price",22);
                this.state.order=false;
            }else if(px===false){
                this.props.handleSortList("price_h",22);
                this.state.order=true;
            }else{
                this.props.handleSortList(px,22);
            }
        }
        
        
    }
    handleJump() {
        this.props.history.goBack();
    }
    componentDidMount() {

        // console.log(this.props.location,888)
        localStorage.setItem("sortdata",JSON.stringify(this.props.location))
        let {query}=JSON.parse(localStorage.getItem("sortdata"));
        if(query){
            this.props.handleSortList(this.state.px,query);
        }else{
            this.props.handleSortList(this.state.px,22);
        }
        
        // console.log(id,999)
    }
}

export default SortList;