//  seleção de elemento

const form = document.getElementById("novoItem");
const list = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) =>{
    criarElemento(elemento);
})


// eventos 
form.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    
    let item =evento.target.elements['nome'];
    let quantidade =evento.target.elements['quantidade'];


    const itemAtual = setLocalStorage(item, quantidade);
    criarElemento(itemAtual);

    item.value = "";
    quantidade.value = "";
})

// funções

function criarElemento(item){

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const quantidadeItem = document.createElement('strong');
    quantidadeItem.innerHTML = item.quantidade

    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += item.nome;

    list.appendChild(novoItem);

    
}

const setLocalStorage = (item, quantidade) =>{
    const itemAtual = {
        'nome' : item.value,
        "quantidade" : quantidade.value
    }

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens));
    return itemAtual;
}

