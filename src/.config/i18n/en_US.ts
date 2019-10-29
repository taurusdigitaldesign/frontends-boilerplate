// 用户模块
const User = {
    'user.name.title': 'Your Name',
    'user.mobile.title': 'Your Mobile Number'
  };
  
  // 登录模块
  const Login = {
    'login.mobile.placeholder': 'Please enter your mobile number',
    'login.name.placeholder': 'Please enter your account',
    'login.validate.placeholder': 'Please enter the validate code',
    'login.btn': 'Login',
    'login.btn.doing': 'Logining'
  };
  
  const en_US = {
    ...User,
    ...Login
  };
  
  export default en_US;
  