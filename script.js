let op = 0;

function insert(x) {
    let resultado = document.getElementById('operacao').innerHTML
    document.getElementById('operacao').innerHTML = resultado + x
}

function operacao(x) {
    if(op == 0){
    let resultado = document.getElementById('operacao').innerHTML
    document.getElementById('operacao').innerHTML = resultado + x
    }
    op = 1;
}

function clean() {
    let tela = document.getElementById('operacao').innerHTML = ''
    op = 0;
}

function apagar() {
    let tela = document.getElementById('operacao').innerHTML
    document.getElementById('operacao').innerHTML = tela.substring(0, tela.length - 1)
}

function calcular() {
    var resultado = document.getElementById('operacao').innerHTML
    if (resultado) {
        document.getElementById('operacao').innerHTML = eval(resultado)
    }
    op = 0;
}