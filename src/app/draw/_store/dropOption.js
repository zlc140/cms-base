/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/9/18 16:06
 * Describe javascript功能
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

const animation = 300;

export default {
	data() {
		return {
			// 工具栏中的拖拽选项
			toolsDropOption: {
				group: {
					name: 'one',
					pull: 'clone',
					put: false,                  // 元素是否可以从其他列表中添加，或者从组名数组中添加
					revertClone: true,          // 在移动到另一个列表后，将克隆的元素恢复到初始位置。
				},        // 指定哪些元素可拖拽
				sort: false,
				scroll: false,
				animation: animation,
				ghostClass:'drop-move',
				draggable: '.drop-atom',                  // 关闭元素排序功能
				fallbackOnBody: false,          // 将克隆的DOM元素追加到文档的主体中
				forceFallback: true,           // boolean 如果设置为true时，将不使用原生的html5的拖放，可以修改一些拖放中元素的样式等
			},
			// 视图中拖拽组件选项
			viewDropOption: {
				group: {
					name: 'one',
					revertClone: false,
				},
				sort: true,
				scroll: false,
				animation: animation,
				draggable: '.drop-atom',
				forceFallback: true,
				chosenClass:'drop-move',
				ghostClass: 'select-drop,drop-move'
			},
			// 回收站
			removeDropOption: {
				group: {
					name: 'one',
					revertClone: false,
				},
				sort: false,
				scroll: false,
				animation: animation,
				filter: '.no-drop',
				draggable: '.drop-atom',
				forceFallback: true,
			}
		}
	},
	methods: {
		// 元素移入回收站 进行删除
		removeDrop_Add(event) {
			[].slice.call(event.to.children).forEach(function (node) {
				node.classList.contains('no-drop') || event.to.removeChild(node)
			})
			
			// 选中的元素切换
			if(event.from.children.length > 1)event.from.lastChild.classList.add('focus-drop')
		},
		// 中间绘制视图区域组件选中处理
		viewCompChoose(event,) {
			[].slice.call(event.from.children).forEach(function (node) {
				node === event.item || node.classList.remove('focus-drop')
			});
			event.item.classList.add('focus-drop')
		},
		// 添加中间绘制区域组件
		viewCompAdd(event) {
			event.from = event.to;
			this.viewCompChoose(event)
		},
		// 添加达到绘制区域结束
		viewCompAddEnd(event, what){
			console.log(event, what)
		},
		moveDrop(event){
			console.log(event)
		}
	}
}