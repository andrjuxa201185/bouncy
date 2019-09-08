window.addEventListener('load', () => {
  const frameTest = document.getElementById('frameTest');
  console.log(frameTest);

  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(e) {
    console.log(e.data);
    console.log(e);

    frameTest.onload = () => {
      console.log('send resp');
      frameTest.contentWindow.postMessage(`${e.data.password}!!!!!`, '*');
    }
  }
});