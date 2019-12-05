import React, { Component } from 'react'
import { Container } from "./styled"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import BscrollCom from "../../common/bscroll/index.js"

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class City extends Component {
    render() {
        let cities = this.props.data.city.city_list;
        let hotCity = this.handleCityPopular(cities);
        let cityList = this.cityList(cities);
        if (localStorage.getItem("hotCity") && localStorage.getItem("cityList")) {
            hotCity = JSON.parse(localStorage.getItem("hotCity"));
            cityList = JSON.parse(localStorage.getItem("cityList"));
        } else {
            hotCity = this.handleCityPopular(cities);
            cityList = this.cityList(cities);
        }

        return (
            <Container ref="cityContainer">
                <BscrollCom ref="scroll">
                    <div className="city_body">
                        {/* 热门城市 */}
                        <div className="hot_city">
                            <div className="hot_title">热门城市</div>
                            <div className="hot_city_list">
                                {
                                    hotCity.map((item, index) => (
                                        <div className="hot_city_name" key={index}>{item.nm}</div>
                                    ))
                                }
                            </div>
                        </div>
                        {/* 城市列表 */}
                        <div className="city_list" ref="citys">
                            {
                                cityList.map((item, index) => (
                                    <div className="city_list_item" key={index}>
                                        <div className="city_title_letter">{item.index}</div>
                                        {
                                            item.list.map((it, id) => (
                                                <div className="city_list_name" onClick={this.handleCityTo.bind(this, it.nm)} key={id}>{it.nm}</div>
                                            ))
                                        }
                                    </div>
                                ))

                            }
                        </div>
                    </div >
                </BscrollCom>
                {/* 城市列表下标 */}
                <div className="city_list_index">
                    {
                        cityList.map((item, index) => (
                            <div onClick={this.handleTo.bind(this, index)} key={index}>{item.index}</div>
                        ))
                    }
                </div>
            </Container >
        )
    }
    componentDidMount() {
        this.props.handleCityList();
    }
    handleCityPopular(cities) {
        let hotCity = [];
        /*
          热门城市:
            hotCity = [
                {
                    id:'',
                    nm:''
                }
            ]
        */
        for (var i = 0; i < cities.length; i++) {
            if (cities[i].isHot) {
                hotCity.push({ id: cities[i].id, nm: cities[i].nm });
            }
        }
        localStorage.setItem("hotCity", JSON.stringify(hotCity));

        return hotCity;
    }

    cityList(cities) {
        let cityList = [];
        //判断城市标识是否在cityList中存在，返回值（true||false）
        function isCityList(letterFirst) {
            var bStop = true;
            for (var i = 0; i < cityList.length; i++) {
                if (cityList[i].index == letterFirst) {
                    bStop = false;
                    break;
                }
            }
            return bStop;
        }
        for (var i = 0; i < cities.length; i++) {
            let letterFirst = cities[i].py.slice(0, 1).toUpperCase();

            if (isCityList(letterFirst)) {
                //标识不存在
                cityList.push({ index: letterFirst, list: [{ id: cities[i].id, nm: cities[i].nm }] })
            } else {
                //存在
                for (var j = 0; j < cityList.length; j++) {
                    if (cityList[j].index == letterFirst) {
                        cityList[j].list.push({ id: cities[i].id, nm: cities[i].nm })
                    }
                }
            }
        }
        //字典排序
        cityList.sort((a, b) => {
            if (a.index > b.index) {
                return 1;
            } else {
                return -1;
            }
        })
        localStorage.setItem("cityList", JSON.stringify(cityList));

        return cityList;
    }

    handleTo(index) {
        let t = this.refs.citys.querySelectorAll('.city_title_letter')[index].offsetTop;
        // this.refs.cityContainer.scrollTop = t;
        this.refs.scroll.handleScrollTo(-t);
    }
    handleCityTo(nm) {
        this.props.history.push({ pathname: "/home", query: nm })
    }

}
export default City;
