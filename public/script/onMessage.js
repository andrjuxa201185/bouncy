window.addEventListener('load', () => {
  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(e) {
    console.log(e.data);
  }
});