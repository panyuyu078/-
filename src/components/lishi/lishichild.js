import React,{Component} from 'react';
import store from '../../store/store.js';
import {connect} from 'react-redux';

class Lishi extends Component {
	constructor(props) {
	    super(props);
	}
	render(){
		return(
		<div>
		{/*this.props.match.params.isAttend*/}
			{
				this.props.partLists.map((ele,index)=>{
					return (
					this.props.match.params.isAttend == String(ele.isAttend) &&
					<div className="lizhang-ele clearfix" key={index}>
					  <div style={{float:'left'}}>
						<p>{ele.thing}</p>
						<p>地点名称:{ele.area}</p>
					  </div>
					  <div style={{float:'right'}}><p style={{color:'red'}}>{this.props.match.params.title}</p></div>	
					</div>
					
					)
				})
			}
		</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		partLists:state.partReducer
	};
};
const mapDispatchToProps = dispatch => {
	return{}
}
export default connect(mapStateToProps, mapDispatchToProps)(Lishi);