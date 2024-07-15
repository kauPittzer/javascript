//recursividade
function fatorial(n) {
    if(n==1) {
        return 1
    }else {
        return n * fatorial(n-1)
    }
}
let pos = 6
console.log(fatorial(pos))