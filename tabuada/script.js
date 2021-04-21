function contar() {

  let num = document.getElementById('num')
  let tab = document.getElementById('tab')


  if (num.value.length == 0) {
    window.alert('Digite um número')
  } else {
    // tab.innerHTML = ''
    for (let m = 0; m <= 10; m++) {
      let n = Number(num.value)
      tab.setAttribute("size", "10")
      let item = document.createElement('option')

      item.text = `${n} x ${m} = ${n*m}`
      tab.appendChild(item) //esta pegando o filho do elemento tab que no caso é o select la do html. Criamos um element option aqui no js dentro desse select

    }

  }




}