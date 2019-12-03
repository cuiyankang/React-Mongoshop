import React, { Fragment } from "react"


class HalfEach extends React.Component {

    render() {
        // console.log(this.props)
        let { halflist } = this.props;

        // console.log(halflist.list)
        return (
            <Fragment>
                {
                    halflist.list ? halflist.list.map((item, index) => (
                        <div className="item" key={item.id}>
                            <div className="left">
                                <img src={item.picUrl} />
                            </div>
                            <div className="right">
                                <h3>
                                    <i></i>
                                    {item.name}
                                </h3>
                                <div className="half">
                                    <span>拍下半价</span>
                                    <br />
                                    <p>{item.yijuhua}</p>
                                </div>
                                <div className="bott">
                                    <div className="left ban">
                                        <b><i>￥</i>{item.price}</b>
                                    </div>
                                    <div className="right ban">
                                        <span>已抢{item.itemSoldNum}件</span>
                                        <a><img src="https://cmsstatic.ffquan.cn//web/ranking/images/btn.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )):""
                }

            </Fragment>
        )
    }

}


export default HalfEach