<template>
    <div class="home-container">
        <div class="home-header">
            <div class="header-logo">
                <div>
                    <img src="~@img/homeLayout/logo.png">
                </div>
            </div>
            <div class="header-menu">
                <ul>
                    <li>
                        <a><i class="cms cms-mubiaoyemianliebiao"></i>页面列表</a>
                    </li>
                    <li>
                        <a><i class="cms cms-moban"></i>创意模板</a>
                    </li>
                    <li>
                        <a><i class="cms cms-zidingyiyemian"></i>自定义页面</a>
                    </li>
                    <li>
                        <a><i class="cms cms-tuku"></i>我的图库</a>
                    </li>
                </ul>
            </div>
            <div class="header-action">
                <ul>
                    <li><i class="cms cms-yonghu"></i>乐富购电子商务有限公司</li>
                    <li><i class="cms cms-guanji"></i>退出</li>
                </ul>
            </div>
        </div>
        <div class="home-body">
            <div class="home-search">

            </div>
            <div class="home-main">
                <div class="home-view-content">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'layout'
	}
</script>

<style lang="scss" scoped>
    $header-height: 60px;
    .home-container {
        width: 100%;
        height: 100%;
    }

    .home-header {
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        position: absolute;
        height: $header-height;
        background-color: #384B64;
    }

    .header-logo {
        display: flex;
        width: 450px;
        align-items: center;
        padding-left: 50px;
        img {
            height: 30px;
        }
    }

    .header-menu {
        display: flex;
        align-items: center;
        ul, li, a {
            height: 100%;
            display: flex;
            align-items: center;
        }
        a {
            cursor: pointer;
            color: #a6b6cc;
            padding: 0 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            text-decoration: none;
            box-sizing: border-box;
            font-family: PingFang-SC-Heavy;
            border-bottom: solid 3px transparent;
        }
        i.cms, a {
            font-size: 16px;
        }
        i.cms {
            padding-right: 5px;
        }
        li {
            padding: 0 15px;
            &:hover, &:active {
                a {
                    color: white;
                    border-bottom-color: #d81e39;
                }
            }
            &:last-child i.cms {
                font-size: 24px;
            }
        }
    }

    .header-action {
        display: flex;
        flex-grow: 1;
        height: 100%;
        justify-content: flex-end;
        ul, li {
            color: #fffefe;
            height: 100%;
            display: flex;
            align-items: center;
        }
        ul {
            padding-right: 15px;
        }
        li{
            padding: 0 10px;
        }
        i.cms{
            font-size: 22px;
            font-weight: 500;
            padding-right: 5px;
        }
    }

    .home-body {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        padding-top: $header-height;
    }

    .home-search {
        height: 100%;
        width: 300px;
        background-color: gray;
    }

    .home-main {
        height: 100%;
        flex-grow: 1;
        > div {
            height: 100%;
            width: 100%;
        }
    }
</style>