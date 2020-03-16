import React,{Component} from 'react';
import Header from '../header.js';
import './mine.css';

class Mine extends Component{
	constructor(props){
		super(props);
		this.arrList=[
			'设置','反馈','帮助','关于','分享'
		]
	}
	render(){
		return(
			<div id="mine">
				<p className="mt">我的</p>
				<div className="m_touxiang clearfix">
					<div className="m_touxiangL">
						<svg className="icon" aria-hidden="true">
						  <use xlinkHref="#icon-wode"></use>
						</svg>
					</div>
					<div className="m_touxiangR clearfix">
						<span>调用QQ、微信昵称</span>
						<div className="m_touxiangRr"><svg className="icon" ariaHidden="true">
						  <use xlinkHref="#icon-fanhui"></use>
						</svg></div>
					</div>
					
				</div>
				<div className="mine_list">
					{this.arrList.map((value,key)=>{
						return (
							<div className="mine_list clearfix">
								<li className="mine_listl">
									<svg class="icon" ariaHidden="true">
									  <use xlinkHref="#icon-zhaopian"></use>
									</svg>
									{value}
								</li>
								<li className="mine_listr">
									<svg className="icon" ariaHidden="true">
									  <use xlinkHref="#icon-fanhui"></use>
									</svg>
								</li>
							</div>
						)
					})}
				</div>
				<Header></Header>
			</div>
		)
	}
}
export default Mine