/* Carrossel */

// Índice que indica qual slide está visível 
let indexAtual=0;

function moverPara(direcao){
    const itens = document.querySelectorAll('.item');
    // querySelectorAll --> chama os itens da primeira classe definida no html, nesse caso a class="item". O All faz com que ele selecione todos os itens(slides) dentro da classe 

    /*  . --> indica que é uma classe
        # --> indica que é um id
        sem nada --> indica que é uma tag normal (como <p></p> por exemplo) 
    */

    const totalItens = itens.length;

    // Atualiza o índice conforme a direção 1 ou -1 (+= --> recebe)
    indexAtual += direcao;

    if(indexAtual >= totalItens){
        indexAtual = 0;
    }

    if(indexAtual < 0){
        indexAtual = totalItens - 1;
    }

    // Mostrar o slide correto
    const carrosselContainer = document.querySelector('.carrossel-container');
    carrosselContainer.style.transform = `translateX(-${indexAtual * 100}%)`;


}
