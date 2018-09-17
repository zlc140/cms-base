<script>

    // 表单元素结构数据
    import formAtom from '../_store/baseStruct/formAtom'

	function render(h, struct) {
    	// 检查是否已定义好的组件
		const atomId= struct.atomId;
        const atomType=struct.atomType;

        if(atomId && atomType){

        }


		const data = Object.keys(struct.data||{}).reduce(function (data, key) {
			data[key] = struct.data[key];
			return data;
		}, {})

		return h(struct.tag, data||{},(struct.child || []).filter(struct => struct.tag).map(function (struct) {
			return render(h, struct)
		}))
	}

	export default {
		name: 'cms-custom',
		props: {
			option: Object,
			struct: Object
		},
		render(h) {
			if (this.struct) return render(h, this.struct)
		}
	}
</script>

<style lang="scss" scoped>
    *{
        max-width: 100%;
    }
</style>