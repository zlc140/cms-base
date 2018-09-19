<template>
    <div class="draw-page">
        <div class="draw-header">
            <!-- logo -->
            <div class="header-logo">
                <div>
                    <img src="~@img/draw/logo.png">
                </div>
            </div>
            <!-- 操作控制 -->
            <div class="header-active">
                <md-button class="md-icon-button md-primary inner-icon-vertical">
                    <i class="cms cms-iosundooutline"></i>
                    <span>撤销</span>
                </md-button>
                <md-button class="md-icon-button md-primary inner-icon-vertical">
                    <i class="cms cms-iosredooutline"></i>
                    <span>恢复</span>
                </md-button>
            </div>
            <!-- 常用组件模块 -->
            <div class="header-module">
                <ul>
                    <li>
                        <md-button class="md-icon-button md-primary inner-icon-vertical">
                            <i class="cms cms-wenzi"></i>
                            <span>文字</span>
                        </md-button>
                    </li>
                    <li>
                        <md-button class="md-icon-button md-primary inner-icon-vertical">
                            <i class="cms cms-picture"></i>
                            <span>图片</span>
                        </md-button>
                    </li>
                    <li>
                        <md-button class="md-icon-button md-primary inner-icon-vertical">
                            <i class="cms cms-e_beijingtupian"></i>
                            <span>背景</span>
                        </md-button>
                    </li>
                    <li>
                        <md-button class="md-icon-button md-primary inner-icon-vertical">
                            <i class="cms cms-yinyue"></i>
                            <span>音乐</span>
                        </md-button>
                    </li>
                </ul>
            </div>
            <!-- 放大缩小 -->
            <div class="header-scaling">
                <ul>
                    <li>
                        <md-button class="md-icon-button md-primary inner-icon-vertical">
                            <i class="cms cms-Group-"></i>
                            <span>缩小</span>
                        </md-button>
                    </li>
                    <li>
                        <span>100%</span>
                    </li>
                    <li>
                        <md-button class="md-icon-button md-primary inner-icon-vertical">
                            <i class="cms cms-fangda"></i>
                            <span>放大</span>
                        </md-button>
                    </li>
                </ul>
            </div>
            <!-- 发布操作 -->
            <div class="header-put">
                <md-button class="md-raised md-dense md-primary">预览及设置</md-button>
                <md-button class="md-raised md-dense md-primary">保存</md-button>
                <md-button class="md-raised md-dense md-primary">发布</md-button>
                <md-button class="md-raised md-dense md-accent">退出</md-button>
            </div>
        </div>
        <div class="draw-body">
            <!-- 组件导航 -->
            <div class="body-nav">
                <ul>
                    <li v-for="(compItem,index) in compToolsData" :class="{focus:index === selectCompIndexModule}"
                        @click="()=>{selectCompModule(compItem)}">
                        <i class="cms" :class="compItem.icon"></i>
                        <span>{{compItem.name}}</span>
                    </li>
                </ul>
            </div>
            <!-- 组件 -->
            <div class="body-module">
                <div class="module-search">
                    <el-input
                            size="small"
                            placeholder="请输入内容"
                            suffix-icon="el-icon-search">
                    </el-input>
                </div>
                <tabs class="module-class-toggle" :value="selectCompItemIndex">
                    <tab-pane :label="item.title+'('+item.compList.length+')'" :name="selectCompIndexModule+'_'+index"
                              v-for="(item,index) in selectCompToolsData"
                              :key="selectCompIndexModule+'_'+index">
                        <!-- 组件工具箱 -->
                        <ul class="module-list">
                            <li v-for="compInfo in item.compList">
                                <draggable element="div" @move="moveDrop" @end="viewCompAddEnd($event,compInfo)"
                                           @update="()=>{}"
                                           :options="toolsDropOption"
                                           class="drop-origin">
                                    <div class="drop-atom">
                                        <!-- 自定义组件 -->
                                        <cms-custom :struct="compInfo"></cms-custom>
                                    </div>
                                    <div>
                                        <span>{{compInfo.name}}</span>
                                    </div>
                                </draggable>
                            </li>
                        </ul>
                    </tab-pane>
                </tabs>
            </div>
            <!-- 绘制视口 -->
            <div class="body-view">
                <div class="view-container">
                    <!-- 绘制区域 -->
                    <draggable class="view-draw-zone" element="div"
                               :options="viewDropOption"
                               @add="viewCompAdd"
                               @choose="viewCompChoose">
                        <div class="drop-atom"></div>
                    </draggable>
                </div>
            </div>
            <!-- 绘制控制区 -->
            <div class="body-action">
                <ul>
                    <li>
                        <i class="cms cms-wenzi"></i>
                    </li>
                    <li>
                        <i class="cms cms-picture"></i>
                    </li>
                    <li>
                        <i class="cms cms-e_beijingtupian"></i>
                    </li>
                    <li>
                        <i class="cms cms-yinyue"></i>
                    </li>
                </ul>
                <!-- 组件回收站 -->
                <draggable class="move-comp-action" element="div" @add="removeDrop_Add"
                           :options="removeDropOption">
                    <div class="drop-atom no-drop">
                        <i class="cms cms-remove1"></i>
                    </div>
                </draggable>
            </div>
            <!-- 组件属性设置 -->
            <div class="body-attributes">
                <div class="select-draw-describe">
                    <p>
                        banner组件描述
                    </p>
                </div>
                <!-- 选择绘制组件的属性切换容器 -->
                <div class="attributes-tab-toggle">
                    <el-tabs :stretch="false" type="border-card" @tab-click="()=>{}" value="first">
                        <el-tab-pane label="组件设置" name="first">
                            组件设置
                        </el-tab-pane>
                        <el-tab-pane label="动画" name="second">
                            动画
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	// 左侧组件tab选择
	import tabs from './_comp/tabs';
	import tabPane from './_comp/tab-pane';

	// 拖拉拽组件
	import draggable from 'vuedraggable'

	// 自定义组件（万能组件^_^）
	import cmsCustom from './_comp/cms-custom'

	// 组件工具数据
	import {mixin as compToolsDataMixin} from './_store/compToolsData'

	// 绘制区域组件数据及接口
	import {mixin as drawViewDataMixin} from './_store/drawViewData'

	// 拖拽组件选项及配置
	import dropMixin from './_store/dropOption'

	export default {
		name: 'index',
		mixins: [compToolsDataMixin, drawViewDataMixin, dropMixin],
		components: {
			tabs,
			tabPane,
			cmsCustom,
			draggable
		},
		data() {
			return {
				moduleClass: 'first'
			}
		},

	}
</script>

<style>
    .md-button {
        min-width: 60px;
    }
</style>

<style lang="scss" scoped>
    @import "_style/variable";
    /*引入当前页面样式*/
    @import './_style/index.scss';
</style>