var cartas1 = {
    nome:"Batman",
    imagem: "https://c.tenor.com/hTpKX0x7qBgAAAAC/ben-affleck-batman.gif",
    atributos:{
      Ataque: 78,
      Defesa: 75,
      Poder: 0
    }
  }
  var cartas2 = {
    nome:"Superman",
    imagem: "https://64.media.tumblr.com/197c4639c4252165e10bc44e4739a813/7ba3a56365ed4ceb-95/s540x810/c92500c2599ed4f2ffa7eaf2ca6b74ff8cd5cef2.gifv",
    atributos:{
      Ataque: 80,
      Defesa: 90,
      Poder: 10
    }
  }
  var cartas3 = {
    nome:"Mulher-maravilha",
    imagem: "https://i.pinimg.com/originals/42/13/1a/42131a51c770cd2b15ea4de486631b7f.gif",
    atributos:{
      Ataque: 75,
      Defesa: 85,
      Poder: 4
    }
  }
  var cartas4 = {
    nome:"Flash",
    imagem:"https://pa1.narvii.com/6420/d71b9110d66b5c1db54fd8ae54f0c6df59adb93c_hq.gif",
    atributos:{
      Ataque: 70,
      Defesa: 50,
      Poder: 7
    }
  }
  var cartas5 = {
    nome: "Ciborgue",
    imagem: "https://c.tenor.com/IM2UtA6pfEIAAAAC/cyborg-ray-fisher.gif",
    atributos:{
      Ataque: 80,
      Defesa: 70,
      Poder: 4
    }
  }
  var cartas6 = {
    nome: "Coringa",
    imagem: "https://i.pinimg.com/originals/d4/ff/2d/d4ff2d949e3a195741f1026fbd3ecf9c.gif",
    atributos:{
      Ataque: 50,
      Defesa: 50,
      Poder: 0
    }
  }
  var cartas7 = {
    nome: "Lex Luthor",
    imagem: "https://64.media.tumblr.com/f65c64f4340b9f5ca1a1a7e9c6ab91be/489a35dab0a43c72-d4/s540x810/1f2a4915a5747c69cc882d16787e5fb129d84bb7.gifv",
    atributos:{
      Ataque: 65,
      Defesa: 70,
      Poder: 0
    }
  }
  var cartas8 = {
    nome: "Cheetah",
    imagem: "https://64.media.tumblr.com/6f2290fdbd786e06bb2bb25af95f5c42/7249bcc48cd76e81-c6/s540x810/d6374836ca8a6110c0898ea6782c4a347b776028.gifv",
    atributos:{
      Ataque: 75,
      Defesa: 50,
      Poder: 3,
    }
  }
  var cartas9 = {
    nome: "Flash Reverso",
    imagem: "https://pa1.narvii.com/6638/abaa08750a9bae31c9bbe0339b92ce9c1dc3f759_hq.gif",
    atributos:{
      Ataque: 90,
      Defesa: 75,
      Poder: 6,
    }
  }
  var cartas10 = {
    nome: "Darkseid",
    imagem: "https://c.tenor.com/FV9zs4Tl9AkAAAAM/darkseid-zack-snyder.gif",
    atributos: {
      Ataque: 80,
      Defesa: 50,
      Poder: 5
    }
  }
  
  var cartaMaq
  var cartaJogador
  var cartasJogo = [cartas1, cartas2, cartas3, cartas4, cartas5, cartas6, cartas7, cartas8, cartas9, cartas10]
  
  var pontosJogador = 0
  var pontosMaq = 0
  
  updatePlacar()
  updateCartas()
  
function updatePlacar() {
    var divPlacar = document.getElementById("placar")
    var html = "Jogador= " + pontosJogador + "/" + "Máquina= " + pontosMaq
  
    divPlacar.innerHTML = html
}
  
function updateCartas(){
    var divQuantCartas = document.getElementById("quantidade-cartas")
    var html = "Quantidade de Cartas no jogo: " + cartasJogo.length
  
    divQuantCartas.innerHTML = html
}
  
function sortearCarta(){
    var numCartaMaq = parseInt(Math.random() * cartasJogo.length)
    cartaMaq = cartasJogo[numCartaMaq]
    cartasJogo.splice(numCartaMaq, 1)
  
    var numCartaJogador = parseInt(Math.random() * cartasJogo.length)
    cartaJogador = cartasJogo[numCartaJogador]
    cartasJogo.splice(numCartaJogador, 1)
   
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    exibeCartaJogador()
}
  
function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "- " + cartaJogador.atributos[atributo] + "<br>"
    }
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaJogador.innerHTML =moldura + nome + html + opcoesTexto + '</div>'
}
  
function obtemAtributoSelecionado(){
    var radioAtri = document.getElementsByName('atributo')
    for (i = 0; i < radioAtri.length; i++){
        if (radioAtri[i].checked){     
            return radioAtri[i].value
        }
    }
}
  
function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    if (atributoSelecionado != undefined){
        if (cartaJogador.atributos[atributoSelecionado] > cartaMaq.atributos[atributoSelecionado]){
            htmlResultado = '<p class="resultado-final">Você ganhou, parabéns</p>'
            pontosJogador++
        }
        else if (cartaJogador.atributos[atributoSelecionado] < cartaMaq.atributos[atributoSelecionado]) {
            htmlResultado = '<p class="resultado-final">Você perdeu, dê o seu PLUS ULTRA na próxima vez</p>'
            pontosMaq++
        }else htmlResultado = '<p class="resultado-final">Empatou</p>'

        divResultado.innerHTML = htmlResultado
        exibeCartaMaquina()
        document.getElementById("btnJogar").disabled = true
        updatePlacar()
        updateCartas()

        if (cartasJogo.length == 0){
            alert ('Fim de jogo')
            if (pontosJogador > pontosMaq){
                htmlResultado = '<p class="resultado-final">Você ganhou da máquina, parabéns</p>'
                divResultado.innerHTML = htmlResultado
            }else if (pontosJogador < pontosMaq) {
                htmlResultado = '<p class="resultado-final">Você perdeu, dê o seu PLUS ULTRA na próxima vez</p>'
                divResultado.innerHTML = htmlResultado
            }else {
                htmlResultado = '<p class="resultado-final">Você empatou com a máquina</p>'
                divResultado.innerHTML = htmlResultado
            }
        }else document.getElementById('btnProximaRodada').disabled = false
    }
    else alert('Selecione um atributo')
}
  
function exibeCartaMaquina() {
    var divCartaMaq = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaq.style.backgroundImage = `url(${cartaMaq.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaq.nome}</p>`
    var opcoesTexto = ""
    for (var atributo in cartaMaq.atributos) {
      console.log(atributo)
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + "- " + cartaMaq.atributos[atributo] + "<br>"
    }
  
    var html = "<div id='opcoes' class='carta-status --spacing'>"
    divCartaMaq.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}
  
function proximaRodada(){
    var divCartas = document.getElementById('cartas')
  
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true
  
    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}