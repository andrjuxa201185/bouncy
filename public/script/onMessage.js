window.addEventListener('load', () => {
  window.isLogin = true;
  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(e) {
    console.log(e.data);
    console.log(e);
    window.parent.isLog = window.isLogin;
    // console.log(window.localStorage);
    event.source.postMessage({
      "action": "returnData",
      isLogin: window.isLogin,
    }, '*');
  }
});