import React, { Component } from 'react'
import { Container } from "./styled"

class City extends Component {
    render() {
        return (
            <Container>
                <div className="city_body">
                    {/* 热门城市 */}
                    <div className="hot_city">
                        <div className="hot_title">热门城市</div>
                        <div className="hot_city_list">
                            <div className="hot_city_name">北京</div>
                            <div className="hot_city_name">上海</div>
                            <div className="hot_city_name">广州</div>
                            <div className="hot_city_name">天津</div>
                            <div className="hot_city_name">杭州</div>
                            <div className="hot_city_name">南京</div>
                            <div className="hot_city_name">成都</div>
                        </div>
                    </div>
                    {/* 城市列表 */}
                    <div className="city_list" ref="cityList">
                        <div className="city_list_item">
                            <div className="city_title_letter">A</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                        </div>
                        <div className="city_list_item">
                            <div className="city_title_letter">A</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                        </div>
                        <div className="city_list_item">
                            <div className="city_title_letter">A</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                        </div>
                        <div className="city_list_item">
                            <div className="city_title_letter">A</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                        </div>
                        <div className="city_list_item">
                            <div className="city_title_letter">A</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                            <div className="city_list_name">阿拉善盟</div>
                        </div>
                    </div>
                </div >
                {/* 城市列表下标 */}
                <div className="city_list_index">
                    <div>A</div>
                    <div>A</div>
                    <div>A</div>
                    <div>A</div>
                    <div>A</div>
                    <div>A</div>
                    <div>A</div>
                </div>
            </Container >
        )
    }
    componentDidMount(){
        
    }
}
export default City;
