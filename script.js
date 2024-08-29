let form = document.querySelector('form');
let fontSize = document.querySelector('#fontsize');
let fontColor = document.querySelector('#fontcolor');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  document.cookie = 'fontSize=' + fontSize.value;
  document.cookie = 'fontColor=' + fontColor.value;
  applyPreferences();
});
function applyPreferences() {
  let cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].split('=');
    if (cookie[0] === 'fontSize') {
      document.documentElement.style.setProperty('--fontsize', cookie[1] + 'px');
    } else if (cookie[0] === 'fontColor') {
      document.documentElement.style.setProperty('--fontcolor', cookie[1]);
    }
  }
}
window.onload = applyPreferences;