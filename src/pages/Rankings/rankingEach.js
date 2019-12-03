import React, { Fragment } from "react"
import observer from "../../observer"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
@withRouter

class RankingEachs extends React.Component {
    constructor(){
        super();
        
    }
    render() {
        // console.log(this.props)
        let { list, activeIndex } = this.props
        // console.log(list, activeIndex, 888)
        return (
            <Fragment>
                {
                    list ? list.map((item, index) => (
                        <div
                            className="item_list"
                            key={item.id}
                            onClick={this.handleGetId.bind(this, item,item.id)}>
                            <Fragment>
                                    <span className="lv">NO.{index + 1}</span>
                                    <div className="left">
                                        <img src={item.pic} />
                                    </div>
                                    <div className="right">
                                        <h3>{item.dtitle}</h3>
                                        <p className="price">
                                            <span className="Lately">近2小时疯抢</span>
                                            <span className="many">{item.salesNum}</span>
                                            <span className="piece">件</span>
                                        </p>
                                        <p className="price tianmao">天猫价: ¥{item.yuanjia}</p>

                                        <div className="right_text">
                                            <span className="volume red">券后价 ¥ </span>
                                            <span className="price_after red">{item.jiage}</span>
                                            <span className="butt">立即抢</span>
                                        </div>
                                    </div>
                            </Fragment>
                        </div>
                    )) : ""
                }

            </Fragment>
        )
    }
    handleGetId(item,id) {
        localStorage.setItem("ranking",JSON.stringify(item))
        localStorage.setItem("rankingID",JSON.stringify(id))
        this.props.history.push({pathname:"/details",query:item})
    }
}


export default RankingEachs;