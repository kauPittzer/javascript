function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var iano = window.document.getElementById('iano')
    var anoAtual = Number(iano.value)
    var res = document.getElementById('result')

    if(iano.value.length == 0 || iano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(iano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade>=111) {
                img.setAttribute('src', 'media/caveira.png')
            } else if(idade >=60) {
                img.setAttribute('src', 'media/idoso-m.png')
            }else if(idade>=21) {
                img.setAttribute('src', 'media/adulto-m.png')
            }else if(idade>=12) {
                img.setAttribute('src', 'media/jovem-m.png')
            }else {
                img.setAttribute('src', 'media/bebe-m.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade>=111) {
                img.setAttribute('src', 'media/caveira.png')
            } else if(idade >=60) {
                img.setAttribute('src', 'media/idosa-f.png')
            }else if(idade>=21) {
                img.setAttribute('src', 'media/adulto-f.png')
            }else if(idade>=12) {
                img.setAttribute('src', 'media/jovem-f.png')
            }else {
                img.setAttribute('src', 'media/bebe-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Indentificamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}