
/*entrada do clube*/

/* let idade = Number(prompt("digite sua idade"));

if(idade >= 60){
    alert("Entrada gratuita"); 
}
else if( idade >0 && idade <= 12){
    alert("Entrada  R$10,00");
}
else if(idade >=13 && idade <=17){
    alert("entrada R$15,00");
}

else if(idade >=18 && idade <=59){
    let resposta = window.confirm("você é estudante ?")
    if(resposta){
        alert("entrada R$ 17,50")

    }
    else {
        alert("entrada R$ 35,00")
    }
}*/

/*calendario*/

let dia = Number(prompt("digite um numero 1 a 7."));

if(dia == 1){
    alert("Hoje é Domingo!")
}

else if(dia == 2){
    alert("Hoje é Segunda!")  
}

else if(dia == 3){
    alert("Hoje é Terça!")
}

else if(dia == 4){
    alert("Hoje é Quarta!")
}

else if (dia == 5){
    alert("Hoje é Quinta!")
}

else if( dia == 6){
    alert("Hoje é Sexta!")
}

else if( dia == 7){
    alert("Hoje é Sabado!")
}

else {
    alert("Não é Um Numero Valido! ")
}