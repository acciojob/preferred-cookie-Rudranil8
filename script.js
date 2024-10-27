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

// let form = document.querySelector('form');
// let fontSize = document.querySelector('#fontsize');
// let fontColor = document.querySelector('#fontcolor');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   document.cookie = 'fontSize=' + fontSize.value + '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
//   document.cookie = 'fontColor=' + fontColor.value + '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
//   applyPreferences();
// });

// function applyPreferences() {
//   for (let c of document.cookie.split('; ')) {
//     let [key, val] = c.split('=');
//     if (key === 'fontSize') {
//       document.documentElement.style.setProperty('--fontsize', val + 'px');
//     } else if (key === 'fontColor') {
//       document.documentElement.style.setProperty('--fontcolor', val);
//     }
//   }
// }

// window.onload = applyPreferences;

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

// Function to apply saved preferences
function applyPreferences() {
  const fontSize = getCookie('fontsize');
  const fontColor = getCookie('fontcolor');

  if (fontSize) {
    document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
    document.getElementById('fontsize').value = fontSize;
  }

  if (fontColor) {
    document.documentElement.style.setProperty('--fontcolor', fontColor);
    document.getElementById('fontcolor').value = fontColor;
  }
}

// Event listener for form submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  // Set CSS variables and save preferences in cookies
  document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
  document.documentElement.style.setProperty('--fontcolor', fontColor);
  setCookie('fontsize', fontSize, 30);
  setCookie('fontcolor', fontColor, 30);
});

// Apply preferences on page load
applyPreferences();