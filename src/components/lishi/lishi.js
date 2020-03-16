import React,{ Component } from 'react';
import {Link,Route,Redirect,Switch} from 'react-router-dom';
import Header from '../header.js';
import Home from '../home/home';
import Lishichild from './lishichild'
import lishi from './lishi.css';

class Lishi extends Component {
	constructor(props){
		super(props);
		this.state = {
			index:0
		}
		this.arr=[{title:'待参加',isAttend:'false'},{title:'已参加',isAttend:'true'}]
	}
	changeIndex(i){
		this.setState({
			index:i
		})
	}
	changedisplay(){
		this.lishiDenglu.style.display="block"
	}
	handlewei(){
		this.qw.style.display = 'block'
	}
	qwClose(){
		this.qw.style.display = 'none'
	}
	render(){
		return(
			<div className="lishi">
				<div className="lishi-header">
					
						<div className="lishi-fanhui">
							<Link to = "/home">
								<svg className="icon" ariaHidden="true">
									<use xlinkHref="#icon-fanhui1">
									</use>
								</svg>
							</Link>
						</div>
					
					<div className="lishi-tab">
						
						{
							this.arr.map((value,key)=>{
								return (
								
								<Link key={key} to={{pathname:`/lishi/${value.title}/${value.isAttend}`}} className={this.state.index==key?'active':''}>
								<li key={key} onClick={this.changeIndex.bind(this,key)}>
									{value.title}</li>
								</Link>
								)
								
						})}
					</div>
					<div className="lizhang-reduce" onClick={this.changedisplay.bind(this)}>
						<svg className="icon" ariaHidden="true">
							<use xlinkHref="#icon-tianjia1">
							</use>
						</svg>
					</div>
					<div className="lizhang-denglu" ref={
						(n)=>{
							this.lishiDenglu = n
						}}>
						{/*跳转到登录界面*/}
						<Link to='/register'><button>登录</button></Link>
						<button onClick={this.handlewei.bind(this)}>未登录</button>
					</div>
					<div className="qw" ref={(n)=>{
						this.qw = n
					}}>
						<div className="qwclose" onClick={this.qwClose.bind(this)}>X</div>
						<br/>
						<div className="qwImg">
							<img src={require('../images/timg.jfif')} alt="qq"/>
							<img src={require('../images/weixin.jpg')} alt="weixin"/>
						</div>
						<div className="qwtext">
							<div>QQ登录</div>
							<div>微信登录</div>
						</div>
					</div>
				</div>
				<Switch>
					<Route path='/home' component={Home}/>
					<Route path='/lishi/:title/:isAttend' component={Lishichild}/>
					<Redirect from='/' to='/lishi/待参加/false'/>
				</Switch>
				<Header></Header>
			</div>
		)
	}
}
export default Lishi ;