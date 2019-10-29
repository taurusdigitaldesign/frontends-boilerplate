// 用户模块
const User = {
  'user.name.title': '姓名',
  'user.mobile.title': '联系电话'
};

// 登录模块
const Login = {
  'login.mobile.placeholder': '请输入手机号',
  'login.name.placeholder': '请输入账号',
  'login.validate.placeholder': '请输入验证码',
  'login.btn': '登录',
  'login.btn.doing': '登录中'
};

const zh_CN = {
  ...User,
  ...Login
};

export default zh_CN;
