'use strict';

function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

document.getElementById('green').onclick = clickHandler('green');
document.getElementById('blue').onclick = clickHandler('blue');
