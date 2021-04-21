
let num = document.getElementById('num')
let numb = document.getElementById('numb')
let res = document.getElementById('txt')
let n = []

function add() {
  

  if (num.value == 0 || num.value > 100) {
    window.alert('Está faltando colocar o número ou foi maior que 100')
  } else

  {numb.setAttribute("size", "10")
  let item = document.createElement('option')
  numb.appendChild(item)
  item.text = `Valor ${num.value} adicionado.`
  n.push(Number(num.value))}
  num.value = ''
  num.focus()
  

}

function fim() {
  
  if (n.length == 0) {
    window.alert('adicionar valor')
  } else {
    let tot = n
    let vMax = Math.max(...tot)
    let vMin = Math.min(...tot)
    let vTot = tot.reduce((vTot, currentElement) => vTot + currentElement)
    let vMed = vTot/tot.length

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot.length} números cadastrados.</p>`

    res.innerHTML += `<p> O maior valor informado foi ${vMax}.</p>`

    res.innerHTML += `<p> O menor valor informado foi ${vMin}.</p>`

    res.innerHTML += `<p>Somando todos os valores, temos um total de ${vTot}.</p>`

    res.innerHTML += `<p>A média de todos os valores, temos um total de ${vMed}.</p>`
    
  }
  

}



