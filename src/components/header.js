import React,{Component} from 'react';
import {Redirect,Route,Link,Switch} from 'react-router-dom';
class Header extends Component {
	render(){
		return(
			<div className = "Appfooter">
				<Link to = "/home">
				<div className="li">
					<p>
						<svg className="icon">
							<use xlinkHref="#icon-shouye7">
							</use>
						</svg>
					</p>
					<p> 首页</p>
				</div>
			</Link>	
			<Link to = "/lizhang">
				<div className="li">
					<p>
						<svg className="icon">
							<use xlinkHref="#icon-zhangdan">
							</use>
						</svg>
					</p>
					<p> 礼账 </p>
				</div>
			</Link>	
			<Link to = "/home">
				<div className="li">
					<svg className="icon">
						<use xlinkHref="#icon-tianjia1">
							</use>
					</svg>
				</div>
			</Link>	
			<Link to = "/lishi">	
				<div className="li">
					<p>
						<svg className="icon">
							<use xlinkHref="#icon-daibanshixiang">
							</use>
						</svg>
					</p>
					<p> 礼事</p>
				</div>
			</Link>	
			<Link to = "/mine">
				<div className="li">
					<p>
						<svg className="icon">
							<use xlinkHref="#icon-wode">
							</use>
						</svg>
					</p>
					<p> 我的 </p>
				</div>
			</Link>
			</div>
		)
	}
}
export default Header