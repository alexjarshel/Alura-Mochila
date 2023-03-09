//  seleção de elemento

const form = document.getElementById("novoItem")
const list = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((elemento) =>{
    criarElemento(elemento)
})


// eventos 
form.addEventListener("submit", (evento) =>{
    evento.preventDefault()
    
    const item =evento.target.elements['nome']
    const quantidade =evento.target.elements['quantidade']

    const existe = itens.find(elemento => elemento.nome === item.value)

    const itemAtual = {
        'nome' : item.value,
        "quantidade" : quantidade.value
    };
    

    if(existe){
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)
        itens[existe.id] = itemAtual
    }else{
        itemAtual.id = itens.length
        criarElemento(itemAtual)
        itens.push(itemAtual)
    }



    localStorage.setItem("itens", JSON.stringify(itens))
    item.value = ""
    quantidade.value = ""
})

// funções

function criarElemento(item){

    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const quantidadeItem = document.createElement('strong')
    quantidadeItem.innerHTML = item.quantidade
    quantidadeItem.dataset.id = item.id
    novoItem.appendChild(quantidadeItem)

    novoItem.innerHTML += item.nome

    list.appendChild(novoItem)

    
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}