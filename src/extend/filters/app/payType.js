

export default [{
    name: 'filterPaySource',
    fn: function (val) {
        switch (parseInt(val)){
            case 0:
              return '未付款'
              break;
            case 1:
              return '支付宝'
              break;
            case 2:
              return '微信'
              break;
            case 3:
              return '银联'
              break;
            case 11:
              return '线下付款'
              break;
            case 21:
              return '其他'
              break;
            default:
              return '--'
              break;
          }
    }
   
 
  },
  {
    name: 'filterPayType',
    fn: function (val) {
      switch (parseInt(val)){
        
       case 1:
        return '自付'
        break;
      case 2:
        return '代付'
        break;
      default:
        return '--'
        break;
      }
    }
  } ]