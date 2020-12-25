/**
 * 对后台请求的地址的封装，URL格式如下：
 * 模块名_实体名_操作
 */
export default {
  // 'SERVER': 'http://www.zking.com/api/ssh2', //服务器
  'SERVER': 'http://localhost:8080/ssmht/', //服务器
  'SYS_USER_LOGIN':'/login',//登录
  'SYS_USER_RS_AD':'/RsAndAd',//新增and修改

  'SYS_ACCOUONT_PHONE':'/listByAccountAndPhone',

  'COMMODITY_ADD_UP':'/AddAndUp',//新增和修改
  'COMMODITY_DEL':'/Del',//删除
  'COMMODITY_LIST':'/List',//查询




  'SYS_ACCOUONT_PHONE':'/listByAccountAndPhone',//通过账号or手机号查

  'SYS_ADDRESS_ADD':'/Addaddress',//增加收获地址
  'SYS_ADDRESS_LIST_USERID':'/listByuserid',//通过用户id查询收获地址
  'SYS_ADDRESS_DEL_ID':'/delid',//通过用户地址表id删除
  'SYS_ADDRESS_UPD_ID':'/updaddress',//通过收货地址id修改
  'Admin_Login':'/admin/login',//管理员登录
  'Admin_Log':'/admin/getLog',//查询日志
  'Admin_Shop':'/admin/getShop',//查询店铺
  'Admin_ShopDudit':'/admin/ShopDudit',//查询店铺
  'AddShop':'/shop/add',//添加店铺
  'Shop':'/shop/index',//店铺首页
  'ShopCommodity':'/shop/commodity',//店铺商品
  'commodity':'/commodity/get',//商品详情
  'addCar':'/shoping/add',//加入购物车


  'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
    return this.SERVER + this[k];
  }
}
