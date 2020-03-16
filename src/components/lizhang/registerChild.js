import React,{Component} from 'react'
import store from '../../store/store.js';
import {connect} from 'react-redux';

class Registerchild extends Component{
	constructor(props){
		super(props);
		this.state = {
		value:'0',
		listType:'结婚收礼',
		isShow:false,
		tijiaoInput:''
		};
		this.arrList=[
			"结婚收礼",
			"搬家收礼",
			"诞晨收礼",
			"满月收礼",
			"寿宴收礼",
			"白事收礼"
		];
		
	}
	handleChange(event){
		this.setState({
			value:event.target.value
		})
		console.log(event.target.value)
	}
	changeTj(){
		
	}
	selectType(){
		console.log(111)
		this.setState({
			isShow:!this.state.isShow
		})
		if(this.state.isShow == true){
			this.typeDiv.style.bottom= 0 + 'px'
		}else{
			this.typeDiv.style.bottom= -360 + 'px'
		}
		
	}
	
	changeType(ele){
		this.setState({
			listType:ele,
			isShow:!this.state.isShow
		})
		if(this.state.isShow == true){
			this.typeDiv.style.bottom= 0 + 'px'
		}else{
			this.typeDiv.style.bottom= -360 + 'px'
		}
	}
	handleTj(){
		this.tijiaoDiv.style.bottom=0 + 'px'
	}
	handleQd(){
		this.tijiaoDiv.style.bottom=-100 + 'px'
		console.log(this.tijiaoInput.value)
		this.setState({
			tijiaoInput:this.tijiaoInput.value
		})
	}
	
	render(){
		console.log(this.state.tijiaoInput)
		return(
			<div id="registerChild">
				<p>{this.props.match.params.title}</p>
				<p><span className="registerSpan">&yen;</span>
					<input className="registerInput" value={this.state.value} onChange={this.handleChange.bind(this)} type="number"/>
				</p>
				<div className="registerDiv" contenteditable="true">
						请输入备注信息，最多可输入100字。如“孩子满月，请亲戚吃饭，共收礼8000元”。
				</div>
				<p className="registerDate">
				<svg className="icon" aria-hidden="true">
  <use xlinkHref="#icon-zhaopian"></use>
</svg>
<span>2016.06.27</span>
</p>
	<p className="registerDate" onClick={this.selectType.bind(this)}>
					<svg className="icon" aria-hidden="true">
	  <use xlinkHref="#icon-zhaopian"></use>
	</svg>
	<span>
		{
			this.props.match.params.title == '收礼'?this.state.listType:"选择送礼类型"
		}
	</span>
	</p>
	<p className="registerJia" onClick={this.handleTj.bind(this)}><span>+</span>
	{
		this.props.match.params.title == '收礼'?"送礼人":"收礼人"
	}
	</p>
	<div>{this.state.tijiaoInput}</div>
	<div className="typeDiv" ref={(n)=>{this.typeDiv=n}}>
		{this.arrList.map((ele,index)=>{
			return <li key={index} className="typeLi" onClick={this.changeType.bind(this,ele)}>{ele}</li>
		})}
	</div>
	<div className="tijiaoDiv" ref={(n)=>{this.tijiaoDiv=n}}>
		<input type="text" defaultValue='' ref={(n)=>{this.tijiaoInput=n}}/>
		<button onClick={this.handleQd.bind(this)}>确定</button>
	</div>
	<div className="tijiao" onClick={this.props.selectMath.bind(this)}>
		 提交
	</div>
	
		</div>
		)
	}
}
const mapStateToProps = state => {
	return {
	};
};
const mapDispatchToProps = dispatch => {
	return{
		selectMath(){
			console.log(this,'this')
			console.log(this.state.value,this.props.match.params.title,this.state.listType,this.state.tijiaoInput)
			var o={}
			o.title=this.props.match.params.title
			o.project=this.state.listType
			o.name=this.state.tijiaoInput
			o.prize=this.state.value
			console.log(Object.values(o))
			for(var i in o){
				console.log(o[i])
				if(o[i]==''){
					alert('内容不完整')
					return}  
			}
			dispatch({type:'add',addValue:o})
			this.props.history.replace('/lizhang')
		}
	}
	}
export default connect (mapStateToProps, mapDispatchToProps)(Registerchild)