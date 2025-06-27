function soma(){
    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);
    let soma_numero = numero_um + numero_dois;

    document.getElementById('resultado').textContent = 'Resultado: ' + soma_numero;
}

function subtrai(){
    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);
    let subtrai_numero = numero_um - numero_dois;

    document.getElementById('resultado').textContent = 'Resultado: ' + subtrai_numero;
}

function multiplica(){
    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);
    let multiplica_numero = numero_um * numero_dois;

    document.getElementById('resultado').textContent = 'Resultado: ' + multiplica_numero;
}

function dividir(){
    let numero_um = parseFloat(document.getElementById('primeiro_numero').value);
    let numero_dois = parseFloat(document.getElementById('segundo_numero').value);

    if(numero_dois == 0){
        alert("ERRO!! Não é possível dividir números por zero.");
        return;
    }

    let dividir_numero = numero_um / numero_dois;

    document.getElementById('resultado').textContent = 'Resultado: ' + dividir_numero;
}

function comparacao(){
    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);

    if(numero_um > numero_dois){
        document.getElementById('resultado').textContent = "O Maior é " + numero_um;
    }else if(numero_um < numero_dois){
        document.getElementById('resultado').textContent = "O Maior é " + numero_dois;
    }else{
        document.getElementById('resultado').textContent = "Os números são iguais";
    }
}
