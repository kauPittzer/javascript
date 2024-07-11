function gerar() {
    let num = document.getElementById('itab')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0) {
        alert('[ERRO] Digite um número!')
    }else {
        let n = Number(num.value)
        let calc = 1
        tab.innerHTML = ''
        while(calc <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${calc} = ${n*calc}`
            item.value = `tab${calc}`
            tab.appendChild(item)
            calc++
        }
    }

}