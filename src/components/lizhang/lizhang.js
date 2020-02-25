import React,{Component} from 'react';
import lizhang from './lizhang.css';
import {Router,Link,Route} from 'react-router-dom';
import Home from '../home/home';
class Lizhang extends Component(props){
	constructor(props){
		super(props)
		this.state = {
			list:[
				{
					title:'收礼',
					project:'项目名称',
					name:'xxx',
					prize:'1500.00'
				},
				{
					title:'收礼',
					project:'项目名称',
					name:'xxx',
					prize:'1500.00'
				},
				{
					title:'收礼',
					project:'项目名称',
					name:'xxx',
					prize:'1500.00'
				},
				{
					title:'送礼',
					project:'项目名称',
					name:'xxx',
					prize:'1000.00'
				},
				{
					title:'送礼',
					project:'项目名称',
					name:'xxx',
					prize:'1000.00'
				},
				{
					title:'送礼',
					project:'项目名称',
					name:'xxx',
					prize:'1000.00'
				},
			]
		}
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
						<Link to = "/lizhang/"><li className="active">收礼</li></Link>	
						<Link to = "/lizhang"><li>送礼</li></Link>
						
					</div>
					<div className="lizhang-reduce">
						{/*设置一个动态路由，根据传入的是送礼还是收礼，渲染数据*/}
						<svg className="icon" ariaHidden="true">
							<use xlinkHref="#icon-tianjia1">
							</use>
						</svg>
					</div>
				</div>
				<Switch>
					<Route path='/home' component={Home}/>
					
				</Switch>	
			</div>
		)
	}
}
export default Lizhang