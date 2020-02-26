import React,{Component} from 'react';
import store from '../../store/store.js';
import {connect} from 'react-redux';

class Lizhchild extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
		<div>
		123{this.props.match.params.title}
		
		{this.props.initlists.map((ele,index)=>{
			return (
				this.props.match.params.title==ele.title && <div className="lizhang-ele clearfix" key={index}>
			<div style={{float:'left'}}>
			<p>{ele.project}</p>
			<p>姓名:	{ele.name}</p>
			</div>	
			<div style={{float:'right'}}><p style={{color:'red'}}>{ele.prize}</p></div>	
				
				
			</div>
				
			)
		})}
		
		</div>
		)
	}
	
}
const mapStateToProps = state => {
	console.log(state)
	return {
		initlists:state
	};
};
const mapDispatchToProps = dispatch =>{
	return{}
}
export default connect(mapStateToProps, mapDispatchToProps)(Lizhchild);