function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    //traz o valor digitado no input "num" para a variável
    var resposta = document.getElementById('resposta'); // Traz a div chamada resposta
    var tabuada ='';

    for(var c=1; c<=10; c++) //laço de 1 a 10
    tabuada += num + "x" +c+ "=" +
    num * c+ "<br/>"; //monta expressão a ser apresentada ex: 5 x 2 = 10

    resposta.innerHTML = tabuada; //insere no div chamado resposta o resultado da operação
}