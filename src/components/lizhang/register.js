import React,{Component} from 'react';
import Lizhang from './lizhang.js';
// import './lizhang.css';
import Registerchild from './registerChild.js';
import {Redirect,Router,Link,Route,Switch} from 'react-router-dom';

class Register extends Component{
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
	render(){
		return(
			<div>
				<div className="lizhang-header">
				<Link to = "/lizhang">
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
								<Link key={key} to={`/register/${value.title}`}>
								<li key={key} onClick={this.changeIndex.bind(this,key)}
								className={this.state.index==key?'active':''}>
									{value.title}
								</li>
								</Link>
								)
								
						})}
					</div>
				</div>	
				<Switch>
					<Route path='/lizhang' component={Lizhang}/>
					<Route path='/register/:title' component={Registerchild}/>
					<Redirect from="/" to="/register/收礼"></Redirect>
				</Switch>	
			</div>
		)
	}
}
export default Register