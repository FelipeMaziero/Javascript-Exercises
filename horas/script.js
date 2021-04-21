function carregar() {

  var hora = new Date()
  var horaAtual = hora.getHours()

  var txtH = window.document.getElementById('txthoras')
  var img = window.document.getElementById('img')
  var horaAtual = 20

  txtH.innerHTML = `São exatamente ${horaAtual} hrs`

  if (horaAtual >= 0 && horaAtual <= 12) {
    img.src = "img/manha.jpg"
    txtH.innerHTML = `São exatamente ${horaAtual} hrs, esta de manhã`
    document.body.style.backgroundColor = 'dodgerblue'
  } else if (horaAtual > 12 && horaAtual <= 18){
    img.src = "img/tarde.jpg"
    txtH.innerHTML = `São exatamente ${horaAtual} hrs, esta de tarde`
    document.body.style.backgroundColor = 'yellow'
  } else {
    img.src = "img/noite.jpg"
    txtH.innerHTML = `São exatamente ${horaAtual} hrs, esta de noite`
    document.body.style.backgroundColor = 'grey'
  }
}