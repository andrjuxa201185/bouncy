window.addEventListener('load', () => {
  window.localStorage.setItem("helllo", "world");
  const frameTest = document.getElementById('frameTest');

  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(e) {
    console.log(e.data);
    console.log(e);
    console.log(window.localStorage);
  }
});