1.es6有哪些新特性?
	1)不一样的变量声明:const和let;
	2)模板字符串;
	3)箭头函数;
	4)函数的参数默认值
	5)es6中的类:class
	6)for...of和for...in
	7)对象超类:允许使用super方法
2.清除浮动的方法:(3种)
	1)..clearfix:after {
		/*伪元素是行内元素 正常浏览器清除浮动方法*/
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}
	
	.clearfix {
		*zoom: 1;
		/*ie6清除浮动的方式 *号只有IE6-IE7执行,其他浏览器不执行*/
	}
	2)clear:both;
	3)给父级加overflow:hidden
3.css3有哪些新特性(3种)
	可以设置圆角;
	多背景图;
	颜色和透明度(由原来的rgb到现在的rgba);
	多列布局和弹性盒模型;
	可以进行3D变换;
	引入web字体;
	媒体查询;
	可以设置阴影,text-show
4.vue-router有哪几种导航钩子?
  全局导航钩子:前置守卫,后置钩子;
  单独路由独享钩子;
	{
	    path: '/home',
	    name: 'home',
	    component: Home,
	    beforeEnter(to, from, next) {
	        if (window.localStorage.getItem("id")) {
	            next()
	        } else {
	            next({ name: "login" })
	        }
	    }
	}

  组件内的钩子:
	beforeRouteEnter(to, from, next) {
	    // do someting
	    // 在渲染该组件的对应路由被 confirm 前调用
	},
	beforeRouteUpdate(to, from, next) {
	    // do someting
	    // 在当前路由改变，但是依然渲染该组件是调用
	},
	beforeRouteLeave(to, from ,next) {
	    // do someting
	    // 导航离开该组件的对应路由时被调用
	}

5.javascript字符串操作函数有哪些(至少3种)
	1)字符串转换:
		var num=24;
		var mystr=num.toString();    //"24"
	2)字符串连接:
	var mystr1="Hello";
	var mystr2=" world,";
	var mystr3="Hello";
	var mystr4="guoxiansheng";
	var newStr=mystr1.concat(mystr2+mystr3+" "+mystr4); 
	3)字符串分割
	var mystr="qingchenghuwoguoxiansheng,woaishenghuo,woaiziji";
	var arr1=mystr.split(","); 
6.什么是跨域,如何实现跨域访问?(至少写出3种)
指的是浏览器不能执行其他网站的脚本.它是由浏览器的同源策略造成的,是浏览器对js施加的安全限制
1)设置document.domain
2)跨文档通信API:window.postMessage()
3)JSONP
<script src="http://test.com/data.php?callback=dosomething"></script>
// 向服务器test.com发出请求，该请求的查询字符串有一个callback参数，用来指定回调函数的名字
 
// 处理服务器返回回调函数的数据
<script type="text/javascript">
    function dosomething(res){
        // 处理获得的数据
        console.log(res.data)
    }
</script>
7.请简述vue的双向数据绑定原理:
	Vue双向数据绑定是通过数据劫持结合发布订阅模式的方式来实现的,也就是说数据和视图同步,数据发生变化,视图跟着变化,视图变化,数据也随之发生改变.
	核心:Object.defineProperty()方法,
	Object.defineProperty(obj, prop, descriptor) ，这个语法内有三个参数，分别为 obj （要定义其上属性的对象） prop （要定义或修改的属性名字） descriptor （具体的改变方法）
	var obj = {};//定义一个空对象
	var val = 'zhao';//赋予初始值
	Object.defineProperty(obj,'val',{
		get: function(){
			return val;
		},
		set: function(newVal){
			val = newVal;//定义val等于修改后的内容
			document.getElementById('a').value = val;//让文本框的内容等于val
			document.getElementById('b').innerHTML = val;//让span的内容等于val
		}
	});
	document.addEventListener('keyup',function(e){
		obj.val = e.target.value;
	})
8.闭包的3特性
	函数嵌套函数,函数内部可以引用外部的参数和变量,参数和变量不会被垃圾回收机制回收
9.var numbers=[1,2,3,4];将numbers转换成"-"连接起来的字符串
	var numbers=[1,2,3,4];
	var numbers2=numbers.join('-');
	console.log(numbers2)
10.请详细说下你对vue生命周期的理解
	vue每个组件都是独立的,每个组件都有一个属于它的生命周期.从一个组件创建,数据初始化,挂载,更新,销毁:beforeCreate,created,beforeMount,mounted,beforeUpdate,updated,beforeDestory,destoryed
11.请说下vue组件间的传值
	父传子:父组件中定义子组件标签,标签里面赋值,子组件中用props接收
12.浏览器本地存储有哪几种,区别是什么?
cookie,localStorage,sessionStorage
	cookie:一般由服务器生成,可设置失效时间.如果在浏览器端生成cookie,默认是关闭浏览器后失效,4k左右,需要开发者自己封装,
	localstorage(本地存储)除非被清除,否则永久保存,一般为5m,提供原生api
	sessionStorage(会话存储)仅在当前会话下有效,关闭页面或浏览器后清除,一般为5m,提供原生api