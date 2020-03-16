import React,{Component} from 'react';
import './lizhang.css';
import {Redirect,Router,Link,Route,Switch} from 'react-router-dom';
import Home from '../home/home';
import Header from '../header';
import Register from './register';
import Registerchild from './registerChild';
import Lizhchild from './lizhchild.js';

class Lizhang extends Component{
	constructor(props){
		super(props);
		this.state = {
			index:0
		};
		this.arr=[{title:'收礼'},{title:'送礼'}];
	}
	changeIndex(i){
		this.setState({
			index:i
		})
	}
	changefanhui(){
		this.props.history.replace('/')
	}
	changedisplay(){
		this.lizhangDenglu.style.display="block"
	}
	handlewei(){
		this.qw.style.display = 'block'
	}
	qwClose(){
		this.qw.style.display = 'none'
	}
	render(){
		return(
			<div className="lizhang">
				<div className="lizhang-header">
					<div className="lizhang-fanhui" onClick={this.changefanhui.bind(this)}>
						<svg className="icon">
							<use xlinkHref="#icon-fanhui1">
							</use>
						</svg>
					</div>
				
					<div className="lizhang-tab">
						{
							this.arr.map((value,key)=>{
								return (
								<Link key={key} to={`/lizhang/${value.title}`} className={this.state.index==key?'active':''}>
								<li key={key} onClick={this.changeIndex.bind(this,key)}>
									{value.title}
								</li>
								</Link>
								)
								
						})}
					</div>
					<div className="lizhang-reduce" onClick={this.changedisplay.bind(this)}>
						<svg className="icon">
							<use xlinkHref="#icon-tianjia1">
							</use>
						</svg>
					</div>
					<div className="lizhang-denglu" ref={
						(n)=>{
							this.lizhangDenglu = n
						}}>
						{/*跳转到登录界面*/}
						<Link to='/register'><button>已登录</button></Link>
						<button onClick={this.handlewei.bind(this)}>未登录</button>
					</div>
				</div>
				<br/>
				<div className="qw" ref={(n)=>{
					this.qw = n
				}}>
					<div className="qwclose" onClick={this.qwClose.bind(this)}>X</div>
					<br/>
					<div className="qwImg">
						<img src={require('../images/timg.jfif')} alt="qq"/>
						<img src={require('../images/weixin.jpg')} alt="weixin"/>
					</div>
					<div className="qwtext" onClick={this.qwClose.bind(this)}>
						<div>QQ登录</div>
						<div>微信登录</div>
					</div>
				</div>
				{/*收礼*/}
				<Route path="/lizhang/:title" component={Lizhchild}/>
				<Redirect to="/lizhang/收礼"></Redirect>
				<Header></Header>
			</div>
		)
	}
}

export default Lizhang;