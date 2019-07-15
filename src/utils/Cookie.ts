const Cookie = {
  setCookie: (name: string, value: any) => {
    const Days = 30;
    const exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + escape(value) + ';expires=' + exp.toUTCString();
  },

  getCookie: (name: string) => {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    const arr = document.cookie.match(reg);
    if (arr != null) return unescape(arr[2]);
    else return null;
  }
};

export default Cookie;
