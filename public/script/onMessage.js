window.addEventListener('load', () => {
  window.localStorage.setItem("helllo", "world");
  // const frameTest = document.getElementById('frameTest');

  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(e) {
    console.log(e.data);
    console.log(e);
    event.source.postMessage({
      "action": "returnData",
    }, '*');
    // console.log(window.localStorage);
  }
});