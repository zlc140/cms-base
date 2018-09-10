// 路由规则
const RouterRules = [
	{
		cache: false,
		isMenu: false,
		path: '/',
		redirect: '/home',
	},
	{
		isMenu: false,
		path: '/home',
		sourcePath: 'views/Home',
	},
	{
		path: '/about',
		name: 'about',
		sourcePath: 'views/About',
	},
	{
		isMenu: false,
		path: '/404',
		sourcePath: 'base/error/404',
	},
	{
		isMenu: false,
		path: '/401',
		sourcePath: 'base/error/401',
	},
	// 其他页面重定向
	{
		isMenu: false,
		path: '*',
		redirect: '/',
	},
];

export default RouterRules
