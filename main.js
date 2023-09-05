// Função que é executada quando a página é carregada
window.onload = initAll;

// Função que inicializa todas as variáveis e chama a função newCard()
function initAll() 
{
    // Atribui a função anotherCard() ao evento onclick do elemento com o id "reload"
    document.getElementById("reload").onclick = anotherCard;

    // Chama a função newCard()
    newCard();
}

// Função que cria um novo baralho de cartas
function newCard() 
{
    // Para cada número de 0 a 23, chama a função setSquare()
    for (var i = 0; i < 24; i++) {
        setSquare(i);
    }
}

// Array que armazena os valores dos números nas colunas
var colPlace = new Array(0, 0, 0, 0, 0,  // B
                         1, 1, 1, 1, 1,  // I
                         2, 2, 2, 2,     // N
                         3, 3, 3, 3, 3,  // G
                         4, 4, 4, 4, 4); // O

// Array que armazena os números que já foram usados
var usedNums = new Array(76);

// Função que atribui um número aleatório a um quadrado
function setSquare(thisSquare) 
{
    // Obtém o id do quadrado
    var currSquare = "square" + thisSquare;

    // Obtém o número da coluna do quadrado
    var colBasis = colPlace[thisSquare]*15;

    // Variável que armazena o novo número do quadrado
    var newNum;

    // Loop que gera um número aleatório até que um número que não foi usado ainda seja encontrado
    do {
        newNum = colBasis + getNewNum() + 1;
    } while (usedNums[newNum]);

    // Marca o número como usado
    usedNums[newNum] = true;

    // Atribui o número ao quadrado
    document.getElementById(currSquare).innerHTML = newNum;

    // Remove a classe "pickedBG" do quadrado
    document.getElementById(currSquare).className = "";

    // Atribui a função toggleColor() ao evento onclick do quadrado
    document.getElementById(currSquare).onmousedown = toggleColor;
}

// Função que gera um número aleatório de 0 a 14
function getNewNum() 
{
    return Math.floor(Math.random()*15);
}

// Função que reinicia o baralho de cartas
function anotherCard() 
{
    // Para cada número de 1 a 76, marca o número como não usado
    for (var i = 1; i < usedNums.length; i++) {
        usedNums[i] = false;
    }

    // Chama a função newCard()
    newCard();

    // Retorna false para impedir que o evento onclick do elemento com o id "reload" seja propagado
    return false;
}

// Função que altera a cor do quadrado quando ele é clicado
function toggleColor(evt) 
{
    // Se o evento não for nulo, obtém o elemento que foi clicado
    if (evt) {
        var thisSquare = evt.target;
    }
    else {
        var thisSquare = window.event.srcElement;
    }

    // Se a classe do quadrado for "", atribui a classe "pickedBG" a ele
    if (thisSquare.className == "") {
        thisSquare.className = "pickedBG";
    }
    else {
        thisSquare.className = "";
    }
}
