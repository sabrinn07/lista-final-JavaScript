function AntSuc(){
    var num = Number(window.prompt('Digite um número para aparecer o sucessor e antecessor desse número'))
    var valorFinal = window.document.getElementById('resultado');
    valorFinal.innerHTML = '<p>O sucessor desse número é '+ (num + 1) + ' e o seu antecessor é '+(num - 1);
}