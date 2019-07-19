

let idade = Number(prompt("digite sua idade"));

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
}