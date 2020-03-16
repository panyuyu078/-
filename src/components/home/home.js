import React, { Component } from 'react';
import {Redirect,Route,Link,Switch} from 'react-router-dom';
import './home.css';
import Header from '../header';
import rankdata from './rank.json';

export default class Home extends Component {
	constructor(props,context){
		super(props,context);
		this.num = 0
	}
    render() {
		let rankData = rankdata.sort((a,b)=>{
								if(a.history == b.history){
									return a.shoru-b.shoru
								}else{
									return a.history-b.history
								}
								
							});
        return ( 
        	<div>
            	<div className="home_header">
					<table>
						<tbody>
							<tr>
								<td>
									历史收礼<br/>
									5500
								</td>
								<td className="historyyk">
									历史盈亏<br/>
									2948
								</td>
								<td>
									历史送礼<br/>
									2500
								</td>
							</tr>
							<tr>
							</tr>
							<tr>
								<td>
									6月收礼<br/>
									5500
								</td>
								<td className="benyueyk">
									本月盈亏<br/>
									2948
								</td>
								<td>
									6月送礼<br/>
									2500
								</td>
							</tr>
						</tbody>
					</table>
				</div> 
				<div className="home-content">
					<div className="home-title">
						<li style={{flex:1}}>排行</li>
						<li style={{flex:1.5}}>用户</li>
						<li style={{flex:1.5}}>历史盈亏</li>
						<li style={{flex:1.5}}>本月盈亏</li>
						<li style={{flex:1}}>
						<Link to='/home/rank'>更多</Link>
						</li>
					</div>	
						{/*数据循环*/}
						{
							rankData.map((ele,index)=>{
								return (
									<div key={index}>
										<li style={{flex:1}}>{++this.num}</li>
										<li style={{flex:1.5}}>{ele.user}</li>
										<li style={{flex:1.5}}>{ele.history}</li>
										<li style={{flex:1.5}}>{ele.benyue}</li>
										<li style={{flex:1}}></li>
									</div>
								)
							})
						}
				</div>
				<Header></Header>
					
            </div>
			
        )
    }
}
