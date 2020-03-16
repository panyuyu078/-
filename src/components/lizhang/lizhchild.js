import React,{Component} from 'react';
import store from '../../store/store.js';
import {connect} from 'react-redux';

class Lizhchild extends Component {
	constructor(props){
		super(props);
		this.state = {
			index:1,
			listSort:[],
			isShow:false
		}
		this.type = [
			"全部",
		  "结婚收礼",
		  "搬家收礼",
		  "诞晨收礼",
		  "满月收礼",
		  "寿宴收礼",
		  "白事收礼"
		];
		this.money = [
		  "全部",
		  "500元以下",
		  "500-1000元",
		  "1000-5000元",
		  "5000-10000元",
		  "10000-50000元",
		  "50000-100000",
		  "100000元以上"
		];
		}
	handleTab(i){
		this.setState({
			isShow:!this.state.isShow,
		})
		if (this.isShow == false) {
			this.setState({
				index:0,
			})
		} else {
			this.setState({
				index:i,
			})
		}
		
	}
	changeList(item){
		var list = []
		list.push(this.props.initlists.filter(ite=>ite.project==item?ite:item.indexOf('全部')!=-1?this.props.initlists:''))
		this.setState({
			index:0,
			listSort:list.flat(Infinity)
		})
		console.log(this.state.listSort)
	}
	render(){
		return(
		<div>
		参数:{this.props.match.params.title}
			<div className="lizhchildTab">
					<li onClick={this.handleTab.bind(this,1)}>类别 &nbsp;<svg className="icon">
							<use xlinkHref="#icon-sanjiao">
								</use>
					</svg></li>
					<li>时间 &nbsp;<svg className="icon">
							<use xlinkHref="#icon-sanjiao">
								</use>
					</svg></li>
					<li onClick={this.handleTab.bind(this,3)}>金额 &nbsp;<svg className="icon">
							<use xlinkHref="#icon-sanjiao">
								</use>
					</svg></li>
		</div>
		<div className="lizhType" style={{display:this.state.index==1?'block':'none'}}>
			{this.type.map((item, index) => (
			  <li key={index} onClick={this.changeList.bind(this,item)}>{item}</li>
			))}
		</div>
		<div className="lizhMoney" style={{display:this.state.index==3?'block':'none'}}>
			{this.money.map((item, index) => (
			  <li key={index}>{item}</li>
			))}
		</div>
		<div>
			
			{!this.state.listSort.length?<div>没有该数据</div>:
			<div>
				
			
			{this.state.listSort.map((ele,index)=>{
				return (
				<div className="lizhang-ele clearfix" key={index}>
				<div style={{float:'left'}}>
				<p>{ele.project}</p>
				<p>姓名:	{ele.name}</p>
				</div>	
				<div style={{float:'right'}}><p style={{color:'red'}}>{ele.prize}</p></div>	
					
					
				</div>
					
				)
				
			})}</div>
			}
		</div>
			
		</div>
		)
	}
	
}
const mapStateToProps = state => {
	return {
		initlists:state.lizReducer
	};
};
const mapDispatchToProps = dispatch =>{
	return{}
}
export default connect(mapStateToProps, mapDispatchToProps)(Lizhchild);