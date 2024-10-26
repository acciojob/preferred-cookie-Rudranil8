// let form = document.querySelector('form');
// let fontSize = document.querySelector('#fontsize');
// let fontColor = document.querySelector('#fontcolor');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   document.cookie = 'fontSize=' + fontSize.value + '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
//   document.cookie = 'fontColor=' + fontColor.value + '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
//   applyPreferences();
// });
// // function applyPreferences() {
// //   for (let c of document.cookie.split('; ')) {
// //     let [key, val] = c.split('=');
// //     if (key === 'fontSize') {
// //       document.documentElement.style.setProperty('--fontsize', val + 'px');
// //     } else if (key === 'fontColor') {
// //       document.documentElement.style.setProperty('--fontcolor', val);
// //     }
// //   }
// // }
// function applyPreferences() {
//   return new Promise(resolve => {
//     for (let c of document.cookie.split('; ')) {
//       let [key, val] = c.split('=');
//       if (key === 'fontSize') {
//         document.documentElement.style.setProperty('--fontsize', val + 'px');
//       } else if (key === 'fontColor') {
//         document.documentElement.style.setProperty('--fontcolor', val);
//       }
//     }
//     resolve();
//   });
// }

// window.onload = () => applyPreferences();

// // window.onload = applyPreferences;
// cy.window().then(win => win.applyPreferences()).then(() => {
//   cy.get("body").should("have.css", "font-size", "18px");
//   cy.get("body").should("have.css", "color", "rgb(255, 0, 0)");
// });

let form = document.querySelector('form');
let fontSize = document.querySelector('#fontsize');
let fontColor = document.querySelector('#fontcolor');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  document.cookie = 'fontSize=' + fontSize.value + '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
  document.cookie = 'fontColor=' + fontColor.value + '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
  applyPreferences();
});

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