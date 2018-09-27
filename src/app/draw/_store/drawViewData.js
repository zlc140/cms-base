/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/9/19 15:32
 * Describe javascript功能
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

import Vuex from 'vuex'
// 表单元素结构数据
import {getCompStruct} from '../_store/baseStruct';

const store = new Vuex.Store({
	state: {
		// 组件标识id
		compId : 0,
		// 拖拉组件Id标识
		draggableId: 0,
		// 已选的组件
		selectComp: null,
		// 上一次已选组件
		oldSelectComp: null,
		// 绘制区域的数据
		drawStructData: [],
		// 组件字典
		viewCompMap: {},
		// 历史数据记录
		history: [],
		// 历史撤销记录
		reHistory: [],
		// 不同层级的绘制容器的数据存储
		draggableIdLevelData: {
			0: []
		}
	},
	getters: {
		// 已选的组件
		selectComp: state => {
			return state.selectComp;
		},
		// 组件工具数据
		drawStructData: state => {
			return state.drawStructData;
		},
	},
	mutations: {}
})

const comAPI = {
	// 获取拖拽容器里所有组件私有数据
	getDraggableList(draggableId) {
		return {
			list: store.state.draggableIdLevelData[draggableId] || []
		}
	},
	// 视图组件选择
	selectViewComp(compId) {
		store.state.selectComp = Number(compId);
	},
}

const mixin = {
	data() {
		draggableId:0
	},
	berforUpdate(){
		console.log('update...')
	},
	computed: {
		selectComp() {
			return store.getters.selectComp;
		},
		drawStructData() {
			return store.state.draggableIdLevelData[0] = store.state.draggableIdLevelData[0] || [];
		}
	},
	methods: {
		// 新增组件数据
		addViewCompData(compStruct, index, draggableId) {
			// 检查是否已定义好的组件
			compStruct = toNormalData(getCompStruct(compStruct))
			compStruct.compId = ++store.state.compId;
			// 记录当前新增的组件
			store.state.viewCompMap[store.state.compId] = compStruct;
			// 更改已选择的组件
			store.state.selectComp = store.state.compId;
			// 写入绘制区域
			if(!store.state.draggableIdLevelData[draggableId]){
				// 触发虚拟dom更新
				this.$set(store.state.draggableIdLevelData,draggableId,[])
			}
			store.state.draggableIdLevelData[draggableId].splice(index, 0, compStruct);
		},
		// 临时组件选择 （用于新增时候不确定是否添加）
		tempSelectViewComp(isReset) {
			if (isReset) {
				store.state.selectComp = store.state.oldSelectComp;
				store.state.oldSelectComp = null;
			} else {
				store.state.oldSelectComp = store.state.selectComp;
				store.state.selectComp = null;
			}
		},
		// 视图组件选择
		selectViewComp(compId) {
			store.state.selectComp = Number(compId);
		},
		// 移除绘制区域的组件
		removeviewComp(compId,draggableId) {
			compId = Number(compId);
			delete store.state.viewCompMap[compId];
			const index = store.state.draggableIdLevelData[draggableId].findIndex(function (compInfo) {
				return compInfo.compId === compId;
			});
			store.state.draggableIdLevelData[draggableId].splice(index, 1);
		},
	}
}

/**
 * 新增历史记录
 * @param compId 组件id
 * @param type  操作类型  attrUpdate | compAdd | compRemove
 * @param handleData 处理的数据
 * @param oldData 处理之前的数据
 */
function addHistory(compId, type, handleData, oldData) {
	const history = {
		compId,
		type,
		handleData,
		oldData
	};
	
	// 添加到历史存储中
	store.state.history.push(history)
	
	// 清空回退记录
	store.state.reHistory = [];
}

// 历史记录回退
function backHistory() {
	const history = store.state.history.pop();
	actionHandle(history)
}

// 操作恢复
function recoverAction() {
	const history = store.state.reHistory.pop();
	actionHandle(history, true)
}

// 组件操作记录处理
function actionHandle(history, isRecord) {
	let {
		compId,
		type,
		handleData,
		oldData
	} = history;
	
	// 检查是否历史回退
	if (!isRecord) {
	
	}
	
	
	// 检查当前的操作类型
	switch (type) {
		// 更改组件属性
		case 'attrUpdate':
			
			break;
		// 新增组件
		case 'compAdd':
			
			break;
		// 移除组件
		case 'compRemove':
			
			break;
	}
	
	if (isRecord) {
		// 存入操作恢复中/历史撤销记录
		store.state.history.push(history)
	} else {
		// 存入操作恢复中/历史撤销记录
		store.state.reHistory.push(history)
	}
}

// 绘制区域数据接口
export {
	store,
	mixin,
	comAPI
}


function getType(value) {
	return {}.toString.call(value).slice(8,-1).toLocaleLowerCase().replace(/html(body)?/,'');
};


// vue 双向数据转正常数据
function toNormalData(compStruct) {
	switch (getType(compStruct)) {
		case 'array':
			return compStruct.map(toNormalData)
			break;
		default:
			if (typeof compStruct === "object" && compStruct) {
				return Object.keys(compStruct).reduce(function (map, key) {
					map[key] = toNormalData(compStruct[key])
					return map;
				}, {})
			} else {
				return compStruct;
			}
	}
}