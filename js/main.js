//  seleção de elemento

const form = document.getElementById("novoItem");
const list = document.getElementById("lista");


// eventos 
form.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    
    let item =evento.target.elements['nome'].value;
    let quantidade =evento.target.elements['quantidade'].value;
    
    criarElemento(item, quantidade);
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
}