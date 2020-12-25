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
  'COMMODITY_LISTLIKE':'/Listlike',//模糊查询
  
  
  'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
    return this.SERVER + this[k];
  }
}
