function contar() {

  let inicio = window.document.getElementById('inicio')
  let fim = window.document.getElementById('fim')
  let passo = window.document.getElementById('passo')

  let res = window.document.getElementById('res')


  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('ERRO, falta algo')
  } else {
    res.innerHTML = 'contando: '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)


    for (let index = i; index <= f; index += p) {

      res.innerHTML += ` ${index}`

    }

  }



}