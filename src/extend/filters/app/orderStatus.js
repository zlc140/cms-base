

export default [{
  // 订单类型
  name: 'filterOrderType',
  fn: function (val) {
      switch (parseInt(val)){
          case 1:
            return '常规订单'
            break;
          case 2:
            return '门店订单（自提）'
            break;
          case 3:
            return '红包兑换'
            break;
          case 4:
            return '乐砍价订单';
          case 5:
            return '乐拼团订单';
          case 6:
            return '成长型订单';
          case 7:
            return '卡券订单'
          case 8:
            return '爆款商品';
          default:
            return '--'
            break;
        }
  }
},{
  // 订单类型
  name: 'computedAuditRoles',
  fn: function (val) {
    switch (parseInt(val)){
      case 0:
        return '用户'
        break;
      case 1:
        return '客服'
        break;
      case 2:
        return '客服经理'
        break;
      case 3:
        return '财务'
        break;
      case 4:
        return '仓库'
        break;
      case 5:
        return '平台/供应商'
        break;
      default:
        return '--'
        break;
    }
  }
},{
  // 订单状态
    name: 'filterOrderStatus',
    fn: function (val) {
        switch (parseInt(val)){
            case 1:
              return '待付款'
              break;
            case 2:
              return '待发货'
              break;
            case 3:
              return '待收货'
              break;
            case 4:
              return '已完成'
              break;
            case 5:
              return '待使用'
              break;
            case 11:
              return '已取消'
              break;
            case 21:
              return '申请退款中'
              break;
            case 22:
              return '售后进行中'
              break;
            case 23:
              return '已关闭（退款交易关闭)'
              break;
            case 24:
              return '已关闭（售后退货退款交易关闭)'
              break;
            default:
              return '--'
              break;
          }
    }
  },{
    name: 'filterBusinessType',
    fn: function (val) {
      switch (parseInt(val)){
        case 1:
        return '购销'
        break;
      case 2:
        return '代销'
        break;
      case 3:
        return '购销+代销'
        break;
      case 4:
        return '代销+购销'
        break;
      default:
        return '--'
        break;
      }
    }

  },{
    // 售后状态
    name:'filterAfterStatus',
    fn: function(val){
      switch (parseInt(val)) {
        case 1:
          val = '填写申请'
          break;
        case 2:
          val = '待审核'
          break;
        case 3:
          val = '审核中'
          break;
        case 4:
          val = '售后关闭'
          break;
        case 5:
          val = '审核通过'
          break;
        case 6:
          val = '审核不通过'
          break;
        case 7:
          val = '等待仓库收货'
          break;
          case 8:
          val = '寄回商品'
          break;
          case 9:
          val = '等待质检'
          break;
          case 10:
          val = '仓库收货'
          break;
          case 11:
          val = '质检通过'
          break;
          case 12:
          val = '质检不通过'
          break;
          case 13:
          val = '已寄出'
          break;
          case 14:
          val = '退款中'
          break;
          case 15:
          val = '退款完成'
          break;
          case 16:
          val = '完成'
          break;
        default:
          val = '--'
      }
      return val;
    }
  },{
    // 退款原因
    name:'filterReturnReson',
    fn:function(val){
      switch (parseInt(val)) {
        case 1:
          val = '我不想买了'
          break;
        case 2:
          val = '信息填写错误,重新拍'
          break;
        case 3:
          val = '一直没有发货'
          break;
        case 21:
          val = '收到商品破损'
          break;
        case 22:
          val = '商品发错'
          break;
        case 23:
          val = '收到商品与描述不符合'
          break;
        case 24:
          val = '商品质量有问题'
          break;
        case 25:
          val = '7天无理由'
          break;
        case 26:
          val = '一直未收到货'
          break;
        case 40:
          val = '其他原因'
          break;
        default:
          val = '--'
          break
      }
      return val
    }
  },{
    // 售后类型
    name:'filterAfterType',
    fn:function(val){
      switch (parseInt(val)) {
        case 1:
          val = '申请退款'
          break;
        case 2:
          val = '售后仅退款'
          break;
        case 3:
          val = '售后退货退款'
          break;
        case 4:
          val = '售后换货'
          break;
        case 5:
          val = '售后补发货'
          break;
        default:
          val = '--'
      }
      return val;
    }
  },{
    // 售后申请类型
    name:'filterApplyType',
    fn:function(val){
      switch (parseInt(val)) {
        case 1:
          val = '用户申请'
          break;
        case 2:
          val = '客服申请'
          break;
        default:
          val = '--'
      }
      return val;
    }
  },{
  // 补偿类型
  name:'formOfCompensation',
  fn:function(val){
    switch (parseInt(val)) {
      case 1:
        val = '现金补偿'
        break;
      case 2:
        val = '红包补偿'
        break;
      default:
        val = '-'
    }
    return val;
  }
},{
  // 补偿支付类型
  name:'compensationPayType',
  fn:function(val){
    switch (parseInt(val)) {
      case 0:
        val = '支付宝'
        break;
      case 1:
        val = '银行'
        break;
      default:
        val = '-'
    }
    return val;
  }
},{
  // 补偿审核状态
  name:'compensationAudit',
  fn:function(val){
    switch(val) {
      case 10:
        return '客服新建'
        break;
      case 11:
        return '待客服经理审核'
        break;
      case 12:
        return '客户经理审核驳回'
        break;
      case 13:
        return '待运营经理审核'
        break;
      case 14:
        return '运营经理审核驳回'
        break;
      case 15:
        return '待财务审核'
        break;
      case 16:
        return '财务审核驳回'
        break;
      case 17:
        return '财务审核通过'
        break;
      default:
        return '-'
        break;
    }
  }
}]
