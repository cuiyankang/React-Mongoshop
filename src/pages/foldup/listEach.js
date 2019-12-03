import React, { Fragment } from "react"
import {withRouter} from "react-router-dom";
@withRouter
class FoldUpList extends React.Component {
    render() {
        let { foldlist} = this.props
        return (
            <Fragment>
                {
                    foldlist.map((item, index) => (
                        <div className="item" key={item.id} onClick={this.handleGetId.bind(this,item,item.id)}>
                            <div className="left"><img src={item.pic}/></div>
                            <div className="right">
                                <h3>{item.dtitle}</h3>
                                <div className="text">
                                    <div className="l ban">
                                        <p className="money">
                                            <span className="iconfont">&#xe608;</span>
                                            <b>￥{item.yuanjia}</b>
                                        </p>
                                        <p className="zh">
                                            折后
                                            <span className="price">
                                                <i>￥</i>
                                                38.
                                                <i>{item.jiage}</i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="r ban">
                                        <span>已售 {item.xiaoliang}万件</span>
                                        <p className="quan">{item.quanJine}元券</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </Fragment>
        )
    }
    handleGetId(item,id) {
        localStorage.setItem("foldup",JSON.stringify(item))
        localStorage.setItem("foldupID",JSON.stringify(id))
        
        this.props.history.push({pathname:"/details",query:item})
    }
}


export default FoldUpList;