window.addEventListener('load', () => {
  console.log('bouncy ok load');
  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(e) {
    console.log(e.data);
  }
});