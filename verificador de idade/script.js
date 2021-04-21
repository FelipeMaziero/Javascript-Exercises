function verificar() {

  var data = new Date()
  var anoAtual = data.getFullYear()

  var anoN = document.getElementById('date')
  var res = document.getElementById('res')
  var idade = anoAtual - Number(anoN.value)

  var img = document.createElement('img')
  img.setAttribute('id', 'foto')


  if (anoN.value == 0 || anoN.value > anoAtual || idade > 100) {
    window.alert('Preencha o campo novamente, esta errado')

  } else {
    var fsex = document.getElementsByName('radsex')
    var genero = ''

    if (fsex[0].checked) {
      genero = 'um Homem'
      res.innerHTML = `É ${genero} com ${idade} anos`
      img.setAttribute('src', 'img/homem.png')
      res.appendChild(img) //inserir a imagem depois do innerhtml

    } else if (fsex[1].checked) {
      genero = 'uma Mulher'
      res.innerHTML = `É ${genero} com ${idade} anos`
      img.setAttribute('src', 'img/mulher.png')
      res.appendChild(img)

    } else {
      window.alert('falta selecionar o sexo')
    }



  }


  // if (idade >= 18 && idade <= 50) {
  //   res.innerHTML = `É ${genero} com ${idade} anos`
  // } else {
  //   res.innerHTML = `É ${genero} com ${idade} anos`
  // }


  // res.style.textAlign = 'center'
  // res.innerHTML = `É ${genero} com ${idade} anos`




}