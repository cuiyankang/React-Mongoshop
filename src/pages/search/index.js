import React,{Fragment} from "react";
import {Header,Box} from "./styled";
import {withRouter} from "react-router-dom"
import { connect } from "react-redux";
import {throttle} from "../../utils/jieliu"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class Search extends  React.Component{
    constructor(){
        super();
        this.state = {
            value:""
        }
    }
    render(){
        let data = this.props.data.data;
        if(!data){
            data = []
        }
        return (
            <Fragment>
                <Header>
                    <a onClick={this.handleRunter.bind(this)}><span>&lt;</span></a>
                    <div className="search">
                        <div>
                            <span className="iconfont">&#xe60d;</span>
                            <input type = "search" placeholder="输入商品名或粘贴宝贝标题搜索" value={this.state.value} onChange={this.handleChange.bind(this)}/>    
                        </div>               
                        <input type="submit" value="搜索" onClick={this.handleTolist.bind(this)}/>      
                    </div>
                   
                </Header>
                <Box>
                        {
                             data.map((item,index)=>(
                                <li key={index} onClick={this.handledata.bind(this)}>
                                    <div>{item}</div>
                                    <i>箭头</i>
                                </li>
                            ))
                        }
                       
                </Box>
            </Fragment>
        )
    }
    handleRunter(){
        this.props.history.push('/home');
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
        throttle(()=>{
            this.props.handleAsyncSearch(e.target.value);
        },500)
    }
    handleTolist(){
        if(this.state.value.length == 0){
            alert("请输入搜索内容")
        }else{
            let value = encodeURI(this.state.value);
            this.props.history.push('/list?kw='+value)
        }
    }
    handledata(e){
        console.log(e.currentTarget.children[0].innerText)
        let text = e.currentTarget.children[0].innerText;
        this.setState({
            value:text
        })
    }
}

export default Search;