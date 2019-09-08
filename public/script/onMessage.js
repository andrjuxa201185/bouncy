window.addEventListener('load', () => {
  const frameTest = document.getElementById('frameTest');

  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(e) {
    console.log(e.data);
    alert(e.data.password);

    frameTest.onload = () => {
      console.log('send resp');
      frameTest.contentWindow.postMessage(`${e.data.password}!!!!!`, '*');
    }
  }
});