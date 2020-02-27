import React,{ Component } from 'react';
import {Link,Route,Redirect,Switch} from 'react-router-dom';
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
	render(){
		return(
			<div className="lishi">
				<div className="lishi-header">
					<Link to = "/home">
						<div className="lishi-fanhui">
							<svg className="icon" ariaHidden="true">
								<use xlinkHref="#icon-fanhui1">
								</use>
							</svg>
						</div>
					</Link>
					<div className="lishi-tab">
						
						{
							this.arr.map((value,key)=>{
								return (
								<Link key={key} to={{pathname:`/lishi/${value.title}/${value.isAttend}`}}>
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
				<Switch>
					<Route path='/home' component={Home}/>
					<Route path='/lishi/:title/:isAttend' component={Lishichild}/>
					<Redirect from='/' to='/lishi/待参加/false'/>
				</Switch>
				
			</div>
		)
	}
}
export default Lishi ;