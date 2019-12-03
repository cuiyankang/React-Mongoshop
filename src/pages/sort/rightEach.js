import React, { Fragment } from "react"
class Categoryeach extends React.Component {
    render() {
        let { activeIndex, fenlei } = this.props;
        // console.log(fenlei)
        return (
            <Fragment>
                {
                    (fenlei.length !== 0) ? (fenlei.map((item) => (
                        <Fragment key={item.cid}>
                            {(activeIndex === item.cid) ? (item.floors.map((ite, index) => (
                                <div className="right_small" key={index}>
                                    <h3 className="title">{ite.name}</h3>
                                    <ul>
                                        {
                                            ite.list.map((i, d) => (
                                                <li 
                                                className="item" 
                                                key={i.api_cid}
                                                onClick={this.handleClickId.bind(this,i.api_cid)}
                                                >
                                                    <a>
                                                        <img src={i.img} />
                                                        <p>{i.name}</p>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))) : ""}
                        </Fragment>
                    ))) : ""
                }
            </Fragment>
        )
    }
    handleClickId(id){
        console.log(id)
    }
}

export default Categoryeach;