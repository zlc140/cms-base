/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/9/25 10:06
 * Describe javascript功能
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

export default {
	'div': {
		tag: 'div',
		name: '普通容器',
		data: {
			style: {
				height: '200px',
				width: '100%',
			},
			domProps: {},
			on: {},
			class: {
				container: true
			}
		},
		child: [
			'test123',
			{
				tag: 'p',
				text: 'p标签内容'
			},
			{
				tag: 'draggable',
				data: {
					style: {
						height: '100px',
						width: '100%',
					},
					// 组件 props
					props: {
						element: 'div',
						options: {
							group: {
								name: 'one',
								revertClone: false,
							},
							sort: true,
							scroll: false,
							animation: 300,
							draggable: '.drop-atom',
							forceFallback: true,
							chosenClass: 'drop-move',
							ghostClass: 'select-drop,drop-move',
						},
					},
					on: {
						choose(event) {
							console.log('----',this.struct,this)
							// this.viewCompChoose(event)
						},
					},
				},
				child: [
					{
						tag: 'div',
						data: {
							class: {
								"drop-atom": true
							},
							style: {
								height: '20px',
								width: '100%',
								border: 'solid 1px pink'
							},
						},
						child: [
							'div1',
						]
					},
					{
						tag: 'cms-custom',
						for: function (identify) {
							return [{
								tag: 'input',
								name:'输入框',
								data: {
									style:{
										height: '25px',
										width: '100%',
									},
									domProps: {
										value: '',
										placeholder:'输入框'
									},
									on: {
										input(e) {
											console.log(e)
										}
									}
								},
							}]||this.getDraggable(identify).list;
						},
						data: {
							style: {},
							// 组件 props
							props: {
								"for=>key": function (value, index) {
									return index;
								},
								"for=>struct": function (value,ss) {
									console.log(':::',ss)
									return value;
								}
							},
							class: {
								'for=>focus-drop': function (value) {
									return value.compId === this.selectComp;
								},
							}
						},
					}
				]
			}
		]
	},
}