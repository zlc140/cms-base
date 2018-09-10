//活动类型

export default [{
  //保留两位数
  name: 'preferentialTypeType',
  fn: function (val) {
    switch (+val) {
      //1-满额直降 2-满件打折 3-满额赠送 4-满件赠送 5-限时特价)
      case 1:
        return '满额直降';
      case 2:
        return '满件打折';
      case 3:
        return '满额赠送';
      case 4:
        return '满件赠送';
      case 5:
        return '限时特价';
      case 6:
        return '乐砍价';
      case 7:
        return '乐拼团';
      case 8:
        return '买赠红包';
      default:
        return '--';
    }

  }
},
{
  name: 'advertisingType',
  fn: function (val) {
    switch (+val) {
      //1-满额直降 2-满件打折 3-满额赠送 4-满件赠送 5-限时特价)
      case 1:
        return '首页弹窗广告';
      case 2:
        return '购物车';
      case 3:
        return '登录注册';
      case 4:
        return '分类广告(banner)';
      case 5:
        return '砍价活动列表';
      case 6:
        return '砍价详情页';
      case 7:
        return '帮帮砍';
      default:
        return '--';
    }

  }
}, {
  //审核状态 0-待提交 1-待审核 2-审核通过 3-审核驳回
  name: 'calculateauditStatus',
  fn: function (status) {
    switch (parseInt(status)) {
      case 0:
        return "待提交";
        break;
      case 1:
        return "待审核";
        break;
      case 2:
        return "审核通过";
        break;
      case 3:
        return "审核驳回";
        break;
      default:
        return '--'
        break;
    }
  }
},
{
  //活动状态 -1-草稿 0-待生效 1-生效中 2-已失效  3-已下架
  name: 'calculateStatus',
  fn: function (status) {
    switch (parseInt(status)) {
      case -1:
        return "草稿";
        break;
      case 0:
        return "待生效";
        break;
      case 1:
        return "生效中";
        break;
      case 2:
        return "已失效";
        break;
      case 3:
        return "已下架";
        break;
      default:
        return '--'
        break;
    }
  }
}]
