let num = document.querySelector('input#inum')
let tab = document.querySelector('select#isel')
let res = document.getElementById('calc')
let valores = []

//Funções de Verificação
function isNumero(n) {
    if(Number(n)>=1 && Number(n)<=100) {
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

//Função de Adicionar
function add() {
    if(isNumero(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        tab.appendChild(item)
        res.innerText = ''
    }else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

//Função de Resultado
function final() {
    if(valores.length == 0) {
        alert('Digite um valor para continuar!')
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            media = soma/total
            if( valores[pos] > maior) 
                maior = valores[pos]
            if ( valores[pos] < menor) 
                menor = valores[pos]
        } 

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, Temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${menor}.</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${maior}.</p>`
        res.innerHTML += `<p>A soma de todos os números é igual a ${soma}.</p>`
        res.innerHTML += `<p>A média dos números é igual a ${media}.</p>`
    }
}