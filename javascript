//Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

let amigos = [];

//Implementando uma função para agregar amigos a lista  
function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    //Validar a entrada:
    if (nomeAmigo == "" || nomeAmigo == " ") {
        alert('Espaço vazio! Por favor, insira um nome.');
        limparCampo();
    }
    //Atualizar o array de amigos:
    if (amigos.includes(nomeAmigo)) {
        alert('Esse nome já foi incluído! Digite o nome de outro amigo se desejar.');
        limparCampo();
    } else {
        amigos.push(nomeAmigo);
        exibirLista(amigos);
    }
    limparCampo();
}

//Função para limpar campo para adição de novos nomes.
let campo = document.querySelector('input');
    campo.value = "";
    function limparCampo() {
}

//Função para exibir lista de amigos.
function exibirLista(listaNomes) {
    //Esvazia a <ul> antes de adicionar os novos elementos para evitar duplicações. 
    let listaAmigosAdicionados = document.querySelector('ul');
    listaAmigosAdicionados.innerHTML = "";
    // Exibir cada elemento da lista como um item <li>
    for (let nome of listaNomes) {
        let item = document.createElement('li'); // Criando um <li>
        item.textContent = nome; // Definindo o texto do <li>
        listaAmigosAdicionados.appendChild(item); // Adicionando <li> à <ul>
    }
}

//Função pars sortear um amigo aleatorio da lista.
function sortearAmigo() {
    //Validar que há amigos disponíveis
    if (amigos.length == 0) {
        alert('Você precisa inserir um nome antes de sortear!');
    } else {
        //Gerar um índice aleatório, que vai de 0 ate a quantidade de elementos presentes na lista de amigos  
        let quntDeElemLista = amigos.length;
        let indiceAleatorio = Math.floor(Math.random() * quntDeElemLista);
        let nomeSorteado = amigos[indiceAleatorio];
        let campoSorteio = document.querySelector('h2');
        campoSorteio.innerHTML = 'Seu amigo secreto sorteado é: ' + nomeSorteado;
    }
}
