<script>

	// 表单元素结构数据
	import {getCompStruct} from '../_store/baseStruct';

	function render(h, struct) {
		// 检查是否已定义好的组件
		struct = getCompStruct(struct)

		const data = Object.keys(struct.data || {}).reduce(function (data, key) {
			data[key] = struct.data[key];
			return data;
		}, {});

		// 给组件绑定上id
        if(struct.compId){
	        (data.attrs = data.attrs || {})['comp-id'] = struct.compId;
        }

		return h(struct.tag, JSON.parse(JSON.stringify(data)) || {}, (struct.child || struct.children || []).filter(struct => struct.tag).map(function (struct) {
			return render(h, struct)
		}))
	}

	export default {
		name: 'cms-custom',
		props: {
			option: Object,
			struct: Object,
		},
		render(h) {
			if (this.struct) return render(h, this.struct)
		}
	}
</script>

<style lang="scss" scoped>
    * {
        max-width: 100%;
    }
</style>