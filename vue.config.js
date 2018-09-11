/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/9/10 10:30
 * Describe javascript功能
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */
'use strict'
const path = require('path')

// 需要输出的配置
const exportConfig = {
	
	// webpack 链式配置
	chainWebpack: (config) => {
		// 路径别名定义
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@config', resolve('src/config'))
			.set('@components', resolve('src/extend/components'))
			.set('@directive', resolve('src/extend/directive'))
			.set('@filters', resolve('src/extend/filters'))
			.set('@plugins', resolve('src/extend/plugins'))
			.set('@utils', resolve('src/utils'))
			.set('@assets', resolve('src/assets'))
			.set('@img', resolve('src/assets/img'))
			.set('@app', resolve('src/app'))
			.set('@comm', resolve('src/comm'))
	}
}

// 路径解析
function resolve(dir) {
	return path.join(__dirname, dir)
}

// 检查是否生成环境
if (process.env.NODE_ENV === 'production') {

}

// 检查是否开发环境
if (process.env.NODE_ENV === 'development') {
	
	Object.assign(exportConfig, {
		// 添加deveServe
		devServer: {
			clientLogLevel: 'warning',
			historyApiFallback: true,
			hot: true,
			// 是否启用资源压缩
			compress: true,
			// host: 'localhost',
			// port: '8080',
			// 是否自动打开浏览器
			// open: false,
			// overlay: false ? {warnings: false, errors: true} : false,
			// 公开的路径目录
			// publicPath: '/',
			// 接口代理配置
			proxy: require('./proxy'),
			quiet: true, // necessary for FriendlyErrorsPlugin
			watchOptions: {
				poll: true,
			}
		},
		configureWebpack: config => {
			config.devtool = 'source-map'
		}
	})
	
}


module.exports = exportConfig;