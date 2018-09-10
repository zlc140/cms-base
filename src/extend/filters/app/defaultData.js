// 商品图片处理
export default {
  name: 'defaultData',
  fn: function (data, type) {
    switch (type) {
      case 0:
        return (!data) ? '--' : data;
      case 1:
        return (!data) ? '0' : data;
      default:
        return (!data) ? '--' : data;
    }

  }
}
