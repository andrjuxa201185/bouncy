window.addEventListener('load', () => {
  window.addEventListener("message", receiveMessage, false);
  function receiveMessage(e) {
    console.log(e);
    let clone = Object.assign({}, window);
   
    event.source.postMessage({
      "action": "returnData",
      isLogin: window.isLogin,
      win: clone,
    }, '*');
  }
});