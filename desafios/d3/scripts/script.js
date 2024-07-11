function contar() {
    var cont = document.getElementById('cont')
    var ini = Number(document.getElementById('iini').value)
    var fim = Number(document.getElementById('ifim').value)
    var pas = Number(document.getElementById('ipas').value)

    if(ini == 0|| fim == 0|| pas == 0) {
        alert('FALTAM DADOS!')
        cont.innerHTML = 'Impossível contar...'
    //CONTAGEM REGRESSIVA
    }else if(ini > fim) {
        for(let c=ini ; c>=fim ; c -= pas) {
            cont.innerHTML += `${c} \u{1F449}`
        }
        cont.innerHTML += `\u{1F3C1}`
    //CONTAGEM CRESCENTE
    }else {
        cont.innerHTML = 'Contando: '

        for(let c=ini ; c <= fim ; c= c + pas) {
            cont.innerHTML += `${c} \u{1F449}`
        }
        cont.innerHTML += `\u{1F3C1}`
    }

}