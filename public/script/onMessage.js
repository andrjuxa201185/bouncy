window.addEventListener('load', () => {

  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(e) {
    console.log(e.data);
    console.log(e);
    console.log(window.localStorage);
    event.source.postMessage({
      "action": "returnData",
    }, '*');
  }
});