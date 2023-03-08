//  seleção de elemento

const form = document.getElementById("novoItem");
const list = document.getElementById("lista");
const itens = [];


// eventos 
form.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    
    let item =evento.target.elements['nome'];
    let quantidade =evento.target.elements['quantidade'];
    
    criarElemento(item.value, quantidade.value);
    item.value = "";
    quantidade.value = "";
})

// funções

const criarElemento = (item,  quantidade)=>{
    console.log(item,quantidade);

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const quantidadeItem = document.createElement('strong');
    quantidadeItem.innerHTML = quantidade

    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += item;

    console.log(novoItem)
    list.appendChild(novoItem);

    const itemAtual = {
        'nome' : item,
        "quantidade" : quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem("item", JSON.stringify(itens));
}