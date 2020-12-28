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
  'SYS_SHOPPING_LIST':'/getcar',//通过用户id查询购物车商品
  'SYS_SHOPPING_DEL':'/delshop',//通过购物车id删除商品
  'SYS_SHOPPING_JS':'/alipaySum',//结算

  'COMMODITY_ADD_UP':'/commodity/AddAndUp',//新增和修改
  'COMMODITY_DEL':'/commodity/Del',//删除
  'COMMODITY_LIST':'/commodity/List',//查询
  'COMMODITY_SELECT':'/commodity/spxq',//查询单个





  'SYS_ACCOUONT_PHONE':'/listByAccountAndPhone',//通过账号or手机号查
  'SYS_USER_PHONE':'/codelogin',//手机验证码登录
  'SYS_USER_GETCODE':'/getcode',//获取验证码
  'SYS_AREA_LISTBYCODE':'listbyzipcode',//获取地域名

  'SYS_ADDRESS_ADD':'/Addaddress',//增加收获地址
  'SYS_ADDRESS_LIST_USERID':'/listByuserid',//通过用户id查询收获地址
  'SYS_ADDRESS_DEL_ID':'/delid',//通过用户地址表id删除
  'SYS_ADDRESS_UPD_ID':'/updaddress',//通过收货地址id修改
  'Admin_Login':'/admin/login',//管理员登录
  'Admin_Log':'/admin/getLog',//查询日志
  'Admin_Shop':'/admin/getShop',//查询店铺
  'Admin_ShopDudit':'/admin/ShopDudit',//查询店铺
  'Admin_User':'/admin/user',//查询用户
  'Admin_updateUser':'/admin/updateUser',//操作用户
  'AddShop':'/shop/add',//添加店铺
  'Shop':'/shop/index',//店铺首页
  'ShopCommodity':'/shop/commodity',//店铺商品
  'commodity':'/commodity/get',//商品详情
  'addCar':'/shoping/add',//加入购物车
  'Comorder_tj':'/comorder/ddtj',//订单提交

   'COMMDI_CHASYOU':'/comorder/sele',//查询
   'COMMDI_SHANCHU':'/comorder/dele',//删除


  'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
    return this.SERVER + this[k];
  }
}
