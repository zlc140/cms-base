import goodsImg from './goodsImg';
import orderStatus from './orderStatus'
import payType from './payType'
import fixedNum from './fixedUril'
import active from './active'
import defaultData from './defaultData'
export default [
  goodsImg,
  fixedNum,
  ...active,
  ...orderStatus,
  ...payType,
  defaultData,
]
