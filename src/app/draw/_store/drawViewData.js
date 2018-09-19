/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/9/19 15:32
 * Describe javascript功能
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

import Vuex from 'vuex'

const store = new Vuex.Store({
	state:{
		// 已选的组件
		selectComp:null,
		// 绘制区域的数据
		drawStructData:[
		
		],
		// 组件字典
		viewCompMap:{
		
		}
	},
	mutations:{
	
	}
})

const mixin = {
	computed: {
	
	}
}


// 绘制区域数据接口
export {
	store,
	mixin
}