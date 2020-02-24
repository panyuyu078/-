import React, { Component } from 'react';
import home from './home.css';
class Home extends Component {
    render() {
        return ( 
        	<div>
            	<div className="home_header">
					<div className="home_header1">
						<div>
							<li>历史收礼</li>
							<li>5500</li>
						</div>
						<div>
							<li>6月收礼</li>
							<li>5500</li>
						</div>
					</div>
					<div className="home_header1">
						<div>
							<li>历史盈亏</li>
							<li>2948</li>
						</div>
						<div>
							<li>本月盈亏</li>
							<li>2948</li>
						</div>
					</div>
					<div className="home_header1">
						<div>
							<li>历史送礼</li>
							<li>2500</li>
						</div>
						<div>
							<li>6月送礼</li>
							<li>2500</li>
						</div>
					</div>
				</div> 
				<div className="home-content">
					<div className="home-title">
						<li style={{flex:1}}>排行</li>
						<li style={{flex:1.5}}>用户</li>
						<li style={{flex:1.5}}>历史盈亏</li>
						<li style={{flex:1.5}}>本月盈亏</li>
						<li style={{flex:1}}>更多</li>
					</div>	
					<div className="home-content">
						{/*数据循环的地方*/}
						<div>
							<li style={{flex:1}}>1</li>
							<li style={{flex:1.5}}>JAMES刘</li>
							<li style={{flex:1.5}}>95685.00</li>
							<li style={{flex:1.5}}>4500.00</li>
							<li style={{flex:1}}></li>
						</div>
					</div>
				</div>
            </div>
        )
    }
}
export default Home;