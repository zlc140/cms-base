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
                    <li>
                        <i class="cms cms-creative"></i>
                        <span>创意模板</span>
                    </li>
                    <li class="focus">
                        <i class="cms cms-zujian"></i>
                        <span>组件</span>
                    </li>
                    <li>
                        <i class="cms cms-zujian1"></i>
                        <span>元件</span>
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

                <div class="module-class-toggle">
                    <div class="toggle-tabs-title">
                        <ul>
                            <li>
                                <span>全部</span>
                            </li>
                            <li class="focus">
                                <span>轮播</span>
                            </li>
                            <li>
                                <span>icon</span>
                            </li>
                            <li>
                                <span>营销</span>
                            </li>
                            <li>
                                <span>主题</span>
                            </li>
                        </ul>
                    </div>
                    <div class="toggle-tabs-content">

                    </div>
                </div>
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
                    <el-tabs :stretch="false" type="border-card" @tab-click="()=>{}">
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
	export default {
		name: 'index',
		data() {
			return {
				moduleClass: 'first'
			}
		}
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

    @mixin inner-icon($color) {
        .inner-icon-vertical {
            &:not(:hover) {
                color: $color;
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
        @include inner-icon(#494949);
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
        @include inner-icon(#828282);
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
        width: 250px;
        border-right: solid 1px $container-border-color;
    }

    .module-class-toggle {

    }

    .toggle-tabs-title {
        ul {
            display: flex;
            flex-wrap: wrap;
        }
        li {
            width: (100% / 3);
            cursor: pointer;
            padding-bottom: 5px;
            &.focus {
                span {
                    color: #409EFF;
                    border-bottom-color: #409EFF;
                }
            }
        }
        span {
            height: 100%;
            font-size: 14px;
            padding-left: 3px;
            padding-right: 3px;
            padding-bottom: 5px;
            display: inline-block;
            border-bottom: solid 1.5px transparent;
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
        width: 250px;
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