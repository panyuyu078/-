import React,{Component} from 'react';
import Header from '../header';
import {Link} from 'react-router-dom';
import rankdata from './rank.json';

class More extends Component {
	constructor(props){
		super(props);
		this.state = {
			index:0,
			rankData:[]
		}
		this.arrBanner=[
			{title:'按盈亏'
			},
			{title:'按收入'
			},
			{title:'按支出'
		}]
		this.arrBanner.content=this.rankyk
	}
	componentDidMount(){
		this.arrsort(0)
	}
	changeIndex(i){
		this.arrsort(i)
	}
	arrsort(i){
		console.log(rankdata)
		let listSort = []
		switch (i) {
			case 0:
				listSort = rankdata.sort((a,b)=>{
								if(a.history == b.history){
									return a.shoru-b.shoru
								}else{
									return a.history-b.history
								}
								
							})
				break;
			case 1:
				listSort = rankdata.sort((a,b)=>{
								if(a.shoru == b.shoru){
									return a.history-b.history
								}else{
									return a.shoru-b.shoru
								}
								
							})
				break;
			case 2:
				listSort = rankdata.sort((a,b)=>{
								if(a.shoru == b.shoru){
									return a.history-b.history
								}else{
									return a.shoru-b.shoru
								}
								
							})
				break;
			default:
			listSort = rankdata.sort((a,b)=>{
							if(a.history == b.history){
								return a.shoru-b.shoru
							}else{
								return a.history-b.history
							}
							
						})
				break;
		}
		this.setState({
			index:i,
			rankData:listSort
		})
	}
	render(){
		return(
		<div>
			<div className="more-header">
				<div className="more-fanhui">
				<Link to="/">
					<svg className="icon" ariaHidden="true">
						<use xlinkHref="#icon-fanhui1">
						</use>
					</svg>
				</Link>	
				</div>
				<div className="more-title">排行榜&nbsp;&nbsp;&nbsp;</div>
			</div>
			<div className="more-banner">
				{this.arrBanner.map((ele,index)=>{
					return(
					<li key={index} onClick={this.changeIndex.bind(this,index)}
					className={this.state.index==index?'active':''}>
						{ele.title}
					</li>
					)
				})}
			</div>
			<div className="home-title">
				<li style={{flex:1}}>排行</li>
				<li style={{flex:1.5}}>用户</li>
				<li style={{flex:1.5}}>历史盈亏</li>
				<li style={{flex:1.5}}>本月盈亏</li>
				<li style={{flex:1}}>
				</li>
			</div>	
			<div className="home-content">
				{this.state.rankData.map((ele,index)=>
				<div key={index} style={{display:'flex',textAlign:'center'}}>
					<li style={{flex:1}}>{index+1}</li>
					<li style={{flex:1.5}}>{ele.user}</li>
					<li style={{flex:1.5}}>{ele.history}</li>
					<li style={{flex:1.5}}>{ele.benyue}</li>
					<li style={{flex:1}}></li>
				</div>
				)}
			</div>
			<Header></Header>
		</div>
		)
	}
}
export default More;