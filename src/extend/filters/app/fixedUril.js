// 数字处理
export default {
  //保留两位数
  name: 'fixedTwo',
  fn: function (val) {
     if(val && +val > 0){
       return val.toFixed(2)
     }else {
       return 0
     }
    
  }
}
