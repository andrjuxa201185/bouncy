window.addEventListener('load', () => {
  // window.isLogin = true;

  window.addEventListener("message", receiveMessage, false);
  function receiveMessage(e) {
    console.log(e);

    event.source.postMessage({
      "action": "returnData",
      isLogin: window.isLogin,
    }, '*');
  }
});