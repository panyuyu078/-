import React,{Component} from 'react';
import lizhang from './lizhang.css';
import {Redirect,Router,Link,Route,Switch} from 'react-router-dom';
import Home from '../home/home';

import Lizhchild from './lizhchild.js';
class Lizhang extends Component{
	constructor(props){
		super(props);
		this.state = {
			index:0
		}
		this.arr=[{title:'收礼'},{title:'送礼'}]
	}
	changeIndex(i){
		this.setState({
			index:i
		})
	}
	render(){
		return(
			<div className="lizhang">
				<div className="lizhang-header">
				<Link to = "/home">
					<div className="lizhang-fanhui">
						<svg className="icon" ariaHidden="true">
							<use xlinkHref="#icon-fanhui1">
							</use>
						</svg>
					</div>
				</Link>
				
					<div className="lizhang-tab">
						
						{
							this.arr.map((value,key)=>{
								return (
								<Link key={key} to={`/lizhang/${value.title}`}>
								<li key={key} onClick={this.changeIndex.bind(this,key)}
								className={this.state.index==key?'active':''}>
									{value.title}
								</li>
								</Link>
								)
								
						})}
					</div>
					<div className="lizhang-reduce">
						<svg className="icon" ariaHidden="true">
							<use xlinkHref="#icon-tianjia1">
							</use>
						</svg>
					</div>
				</div>
				<br/>
				<div>
				</div>
				<Switch>
					<Route path='/home' component={Home}/>
					<Route path='/lizhang/:title' initlists={this.props.initlists} component={Lizhchild}/>
					<Redirect from="/" to="/lizhang/收礼"></Redirect>
				</Switch>	
			</div>
		)
	}
}

export default Lizhang;