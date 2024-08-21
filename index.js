let b = document.getElementById("b");
let textoSpan = document.getElementById("textoAvulso");
let botao = document.getElementById("botão");

botao.addEventListener('click', function(){


    this.classList.add('active');

    b.innerHTML="VOCÊ CLICOOOU";
    textoSpan.innerHTML="É ISSO AI CARA";

    setTimeout(function(){
        b.innerHTML="Clique aqui"
        textoSpan.innerHTML=""
        botao.classList.remove('active')
    }, 5000 /*5 MILISEGUNDOS A CADA 1000 MILISEGUNDOS SE CONTA 1 SEGUNDO*/)

    
})



function pulaLinha(){
    document.write("<br>");
}

function mostra(frase){
    pulaLinha()
    document.write("*********************************")
    pulaLinha();
    document.write(frase)
    pulaLinha()
}

mostra("EU SEI");
mostra("ESSE CÓDIGO ESTÁ FUNCIONANDO");
mostra("ACHO QUE A PROEFICIÊNCIA EM JS SAI")

/*
let minhaIdade=15;
let idadeIrmao=28;

mostra("Nossa diferença de idade é:" + (minhaIdade-idadeIrmao))

function calculoImc(peso, altura){

    let imc=peso/(altura*altura);

    mostra("Seu imc é: " + Math.round(imc))

    if (imc < 18){
        mostra("Você está abaixo do peso")
    } else if(imc > 18 && imc < 24.9){
        mostra("Você está com o peso normal")
    } else if(imc > 25 && imc < 29.9){
        mostra("Você está com excesso de peso")
    }else if(imc > 30 && imc < 34.9){
        mostra("Você está obeso")
    }else{
        mostra("Você está com obesidade extrema")
    }
   
    return imc;
}

calculoImc(parseFloat(prompt("Digite seu peso aqui")), parseFloat(prompt("Digite sua altura aqui")))

mostra("IMC RAFAELA " + Math.round(calculoImc(60,1.6)))

function anoNascimento(anoAtual, idadeAtual){
    calculo = anoAtual- idadeAtual;
    return calculo
}



mostra(`O ano nascimento é: ${anoNascimento(2024, 25)}`)

anoNascimentoRafaela = anoNascimento(2024, 27)

mostra(`O ano nascimento da Rafaela é : ${anoNascimentoRafaela}`)


function a(numero1, numero2){
    return numero1 + numero2;
}

function be(numero3, numero4){
    let soma2 = numero3+numero4
    return  soma2
}

let resultado = a(20,10)+be(2,3);

mostra("O valor de a + b é: " + (resultado))


function aa(texto){
    return "(" + texto + ")"
}

function bb(texto){
    return "@" + texto + "@"
}

function ce(nome, sobrenome){
    return bb(nome + " " + aa(sobrenome))
}

let vamosver = ce("Deise", "Duarte");

mostra((vamosver));


let vitorias = parseFloat(prompt("Entre com o número de vitórias"))
let empates = parseFloat(prompt("Entre com o número de empates"))


var pontos = vitorias * 3 + empates;

mostra("Os pontos do time é: " + (pontos))


if (pontos <= 28 ){
    mostra("Seus pontos estão piores que ano passado")
}else{
    mostra("Seus pontos estão maiores que ano passado")
}

var numeroRecebido=parseInt(prompt("Adivinhe o númmero"))


function sorteia(n){
    return Math.round(Math.random() * n);
}

let numeroPensando = sorteia(100)

console.log(numeroPensando)

while(numeroPensando != numeroRecebido){

    if(numeroRecebido < numeroPensando){
        alert("O númmero é maior")
        numeroRecebido=parseInt(prompt("Adivinhe o númmero"))
    }
    
    
    if(numeroRecebido > numeroPensando){
        alert("O número é menor")
        numeroRecebido=parseInt(prompt("Adivinhe o númmero"))
    }
       
}

if(numeroRecebido == numeroPensando){
    alert("VOCÊ É UM MAGO")
}



let contador = 1;

if (numeroPensando == numeroRecebido){
    while(contador < 10){
        mostra("VOCÊ ACERTOU")
        contador++;
    }
    
}

function idadeAtual(anoN){
    return 2024-anoN;
}

let recebeIdade = prompt("Qual a sua idade?")

mostra("Você nasceu em: " + idadeAtual(recebeIdade));



var user = "Alura";
var password="Alura123"

var recebeUser=prompt("Qual seu user?");
var recebeSenha=prompt("Qual a sua senha?");

contador = 0;

while(contador<2){
    
    if(recebeSenha===password&&recebeUser===user){
        alert("Bem vindo!")
        break
    }else{
        alert("Senha ou usuário inválido")
        recebeUser=prompt("Qual seu user?");
        recebeSenha=prompt("Qual a sua senha?");
        contador++;
    }

    if(contador===2){
        alert("Usuário bloqueado")
        break
    }
}

for(i=0; i<11; i++){
    mostra((i))
}

var totalFamiliares = parseInt(prompt("Quantidade de familiares?"));

var numero = 1;

var totalIdades=0;

while(numero <= totalFamiliares) {

    var idade = parseInt(prompt("Informe idade do familiar"));

    totalIdades = totalIdades+idade

    numero++
}

let mediaTotalIdades = totalIdades/totalFamiliares


mostra("A média de idades é :" + mediaTotalIdades)

*/

function sorteio(){
    return Math.round(Math.random() * 10)
}

function numerosSorteados(quantidade){

   let contador=1;
   
   let segredos=[];

   while(contador <= quantidade){

    let numeroAleatorio = sorteio()
    var achou = false;

    if(numeroAleatorio!==0){
    
        for(var posicao =0; posicao< segredos.length;posicao++){
            if(segredos[posicao]==numeroAleatorio){
                achou=true;
                break
            }
        }
        
        if(achou==false){
            segredos.push(numeroAleatorio);
            contador++
        }
       
    
       }
    }

   return segredos
}

var segredos = numerosSorteados(10);

console.log(segredos)

/*var segredo = Math.round(Math.random() * 10);*/

    var input = document.querySelector("input");
    input.focus()

    let enviar = document.querySelector(".botao-jogo");
    
    enviar.addEventListener("click", verifica)

    function verifica() {

        for(var posicao = 0; posicao < segredos.length; posicao++)

        if(input.value == segredos[posicao]) {
            alert("Você ACERTOU!");
            break
        } 

        if(input.value!=segredos[posicao]){
            alert("Você errouuuuuu!!!!")
        }

        input.value=""
        input.focus()

        console.log(segredos)
    }

   

    