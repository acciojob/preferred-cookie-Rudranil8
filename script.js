// let form = document.querySelector('form');
// let fontSize = document.querySelector('#fontsize');
// let fontColor = document.querySelector('#fontcolor');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   document.cookie = 'fontSize=' + fontSize.value;
//   document.cookie = 'fontColor=' + fontColor.value;
//   applyPreferences();
// });
// function applyPreferences() {
//   let cookies = document.cookie.split('; ');
//   for (let i = 0; i < cookies.length; i++) {
//     let cookie = cookies[i].split('=');
//     if (cookie[0] === 'fontSize') {
//       document.documentElement.style.setProperty('--fontsize', cookie[1] + 'px');
//     } else if (cookie[0] === 'fontColor') {
//       document.documentElement.style.setProperty('--fontcolor', cookie[1]);
//     }
//   }
// }
// window.onload = applyPreferences;

let form = document.querySelector('form');
let fontSize = document.querySelector('#fontsize');
let fontColor = document.querySelector('#fontcolor');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  document.cookie = 'fontSize=' + fontSize.value + '; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  document.cookie = 'fontColor=' + fontColor.value + '; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  applyPreferences();
});

// function applyPreferences() {
//   let cookies = document.cookie.split('; ');
//   for (let i = 0; i < cookies.length; i++) {
//     let cookie = cookies[i].split('=');
//     if (cookie[0] === 'fontSize') {
//       document.documentElement.style.setProperty('--fontsize', cookie[1] + 'px');
//     } else if (cookie[0] === 'fontColor') {
//       document.documentElement.style.setProperty('--fontcolor', cookie[1]);
//     }
//   }
// }
function applyPreferences() {
  for (let c of document.cookie.split('; ')) {
    let [key, val] = c.split('=');
    if (key === 'fontSize') {
      document.documentElement.style.setProperty('--fontsize', val + 'px');
    } else if (key === 'fontColor') {
      document.documentElement.style.setProperty('--fontcolor', val);
    }
  }
}

window.onload = applyPreferences;