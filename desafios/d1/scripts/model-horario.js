function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dateAtual = new Date()
    var data = dateAtual.getHours()
    msg.innerHTML = `Agora são ${data} horas.`

    if(data<12 && data>= 6) {
        //BOM DIA
        img.src = 'media/manha.png'
        document.body.style.background = '#ac8d9b'
    } else if(data>=12 && data<18) {
        //BOA TARDE
        img.src = 'media/tarde.png'
        document.body.style.background = '#e5944d'
    } else {
        //BOA NOITE
        img.src = 'media/noite.png'
        document.body.style.background = '#1f2a37'
    }
}