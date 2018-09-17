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
                    <tab-pane :label="item.title" :name="selectCompIndexModule+'_'+index"
                              v-for="(item,index) in selectCompToolsData"
                              :key="selectCompIndexModule+'_'+index">
                        <ul class="module-list">
                            <li v-for="compInfo in item.compList">
                                <div class="drop-origin">
                                    <cms-custom :struct="compInfo"></cms-custom>
                                    <div>
                                        <span>{{compInfo.name}}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </tab-pane>
                </tabs>
            </div>
            <!-- 绘制视口 -->
            <div class="body-view">
                <div class="view-container">
                    <!-- 绘制区域 -->
                    <div class="view-draw-zone">

                    </div>
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

	// 自定义组件（万能组件^_^）
	import cmsCustom from './_comp/cms-custom'

	// 组件工具数据
	import {mixin as compToolsDataMixin} from './_store/compToolsData'

	export default {
		name: 'index',
		mixins: [compToolsDataMixin],
		components: {
			tabs,
			tabPane,
			cmsCustom
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
    $header-height: 60px;
    $container-border-color: #e0e0e0;

    i.cms {
        text-shadow: 0 0 1px #afafaf;
    }

    .draw-page {
        height: 100%;
        width: 100%;
        font-family: PingFang-SC-Regular;
    }

    .draw-header {
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        position: absolute;
        height: $header-height;
        background-color: #fcfcfc;
        box-shadow: 1px 1px 3px #dfdfdf;
        > div {
            height: 100%;
            display: flex;
            align-items: center;
        }
        i.cms {
            font-size: 20px;
            & + span {
                font-size: 12px;
            }
        }
    }

    @mixin inner-icon($color,$textColor) {
        .inner-icon-vertical {
            &:not(:hover) {
                i {
                    color: $color;
                }
                span {
                    color: $textColor;
                }

            }
            i.cms {
                &, & + span {
                    display: block;
                }
            }
        }
    }

    .header-logo {
        display: flex;
        width: 150px;
        align-items: center;
        padding-left: 30px;
        img {
            height: 30px;
        }
    }

    .header-active {
        width: 150px;
        @include inner-icon(#494949, #494949);
    }

    .header-module, .header-scaling {
        ul {
            display: flex;
            list-style: none;
        }
        li {
            display: flex;
            align-items: center;
            padding-left: 5px;
            padding-right: 5px;
        }
        @include inner-icon(rgba(0, 0, 0, 0.87), #828282);
    }

    .header-module {
        flex-grow: 1;
        justify-content: center;
    }

    .header-scaling {
        padding-left: 20px;
        padding-right: 40px;
        li {
            padding: 0;
            &:nth-child(2) {
                span {
                    color: #888888;
                    font-size: 13px;
                }
            }
        }
    }

    .draw-body {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        background-color: #fafafa;
        padding-top: $header-height;
    }

    .body-nav {
        width: 60px;
        user-select: none;
        border-right: solid 1px $container-border-color;
        li {
            height: 60px;
            display: flex;
            cursor: pointer;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
        i, span {
            /*color: #002342;*/
        }
        i {
            font-size: 28px;
        }
        span {
            font-size: 12px;
        }
        li:hover, li.focus {
            background-color: #1890ff;
            i, span {
                color: white;
            }
            &:after {
                right: -1px;
                top: 25px;
                content: '';
                position: absolute;
                height: 0px;
                width: 0px;
                border-top: 6px solid transparent;
                border-right: 6px solid white;
                border-bottom: 6px solid transparent;
            }
        }

        li:hover {
            background-color: #a6b4cb;
        }
    }

    .body-module {
        width: 300px;
        height: 100%;
        position: relative;
        border-right: solid 1px $container-border-color;
        &:after {
            top: 0;
            right: -3px;
            width: 6px;
            height: 100%;
            content: '';
            z-index: 2;
            position: absolute;
            /*cursor: col-resize;*/
            border-right: solid 1px transparent;
        }
    }

    .module-class-toggle {

    }

    .module-list {
        display: flex;
        flex-wrap: wrap;
        li {
            width: 50%;
            padding: 2px 5px;
        }
        .drop-origin {
            width: 100%;
            cursor: pointer;
            &.move{
                cursor: move;
            }
            >div{
                color: gray;
                font-size: 13px;
            }
            & >>> *{
                pointer-events: none;
            }

        }
    }

    .module-search {
        padding: 20px 10px;
    }

    .body-view {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-items: center;
        justify-content: center;
        background-color: #eeeeee;
    }

    .view-container {
        width: 350px;
        height: 720px;
        display: flex;
        align-items: center;
        justify-items: center;
        justify-content: center;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("~@img/draw/line-shell.png");
    }

    .view-draw-zone {
        width: 306px;
        height: 545px;
        margin-top: 6px;
        border: solid 1px #dadada;
        background-color: white;
    }

    .body-action {
        width: 40px;
        border-left: solid 1px $container-border-color;
        border-right: solid 1px $container-border-color;
        li {
            cursor: pointer;
            padding-top: 10px;
        }
    }

    .body-attributes {
        width: 300px;
        position: relative;
        border-right: solid 1px $container-border-color;
    }

    $describe-height: 80px;
    .select-draw-describe {
        top: 0;
        left: 0;
        width: 100%;
        position: absolute;
        min-height: $describe-height;
        p {
            color: gray;
            font-size: 13px;
        }
    }

    .attributes-tab-toggle {
        width: 100%;
        height: 100%;
        padding-top: $describe-height;
        & > > > .el-tabs--border-card {
            height: 100%;
            box-shadow: none;
            border-right: none;
            border-left: none;
        }
    }
</style>