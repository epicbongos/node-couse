// @prefix catatan
// @description
/* eslint-disable */

/* Simple Hello World in Node.js */

// Variable Scoping
function foo() {
  let ini_let = 50

  if (true) {
    let ini_dalam_scope = 60

    console.log('Dipanggil dari dalam if :' + ini_let)
    console.log('Dipanggil dari dalam if :' + ini_dalam_scope)
  }
}

// Destructuring
function des(data) {
  let { nama } = data
  console.log(nama)
}

let data = {
  nama: 'Benda',
}

// Callback
function cb(fn) {
  fn()
}

function ini_fn() {
  console.log('dari ini_fn')
}

cb(ini_fn)
