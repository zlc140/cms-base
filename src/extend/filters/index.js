
// 时间序列
import formatTime from './date/formatTime';

// 应用过滤器
import appFilters from './app';

export default function (Vue) {
  // 注入
  Vue.filter('formatTime', formatTime);
   
  appFilters.forEach(function (item) {
    Vue.filter(item.name,item.fn)
  })
}
