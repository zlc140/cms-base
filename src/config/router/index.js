// 路由规则
const RouterRules = [
	{
		cache: false,
		isMenu: false,
		path: '/',
		redirect: '/home/',
	},
	{
		isMenu: false,
		path: '/home',
		sourcePath: 'home/layout',
		children: [
			{
				isMenu: false,
				cache: false,
				title: '页面列表',
				path: '/',
				sourcePath: 'home/Home',
			},
		]
	},
	// 其他页面重定向
	{
		isMenu: false,
		path: '*',
		redirect: '/',
	},
];

export default RouterRules
