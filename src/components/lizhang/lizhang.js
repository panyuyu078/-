import React,{Component} from 'react';
import lizhang from './lizhang.css';

class Lizhang extends Component{
	render(){
		return(
			<div className="lizhang">
				<div className="lizhang-header">
					<div className="lizhang-fanhui">
						<svg className="icon" ariaHidden="true">
							<use xlinkHref="#icon-fanhui1">
							</use>
						</svg>
					</div>
					<div className="lizhang-tab">
						<li className="active">收礼</li>
						<li>送礼</li>
					</div>
					<div className="lizhang-reduce">
						<svg className="icon" ariaHidden="true">
							<use xlinkHref="#icon-tianjia1">
							</use>
						</svg>
					</div>
				</div>
			</div>
		)
	}
}
export default Lizhang