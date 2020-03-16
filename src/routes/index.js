import React from 'react';
import { BrowserRouter,Redirect,Switch,Route,Link} from 'react-router-dom';
import Home from '../components/home/home.js';
import Lishi from '../components/lishi/lishi.js';
import Lizhang from '../components/lizhang/lizhang.js';
import Mine from '../components/mine/mine.js';
import Register from '../components/lizhang/register.js';
import Rank from '../components/home/more.js';
// 一级路由文件

function Router(){
	return(
		<BrowserRouter>
			<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/home/rank' component={Rank}/>
					<Route path='/lishi' component={Lishi}/>
					<Route path='/lizhang' component={Lizhang}/>
					<Route path='/mine' component={Mine}/>
					<Route path='/register' component={Register}/>
					<Redirect to="/"></Redirect>
			</Switch>
		</BrowserRouter>
	);
}
export default Router;