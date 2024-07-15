let tab = document.getElementById('isel')
let numAdd = document.getElementById('inum')
let calc = document.getElementById('calc')
let local = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
}
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function add() {
    if(isNum(numAdd.value) && !inList(numAdd.value, local)) {
        calc.innerHTML = ''
        local.push(numAdd)
        let item = document.createElement('option')
        item.text = `Valor ${numAdd.value} adicionado.`
        tab.appendChild(item)
    }else {
        alert('Valor invalido ou não encontrado na lista!')
    }
    numAdd.value = ''
    numAdd.focus()
}
function final() {
    if (local.find((Element) => Element > 0)) {
        calc.innerHTML = ''
        local.sort()
        let item = document.createElement('p')
        item.innerHTML = `Ao todo, temos ${local.length} números cadastrados.`
        calc.appendChild(item)
    }else {
        alert('Digite um número para continuar')
    }
}