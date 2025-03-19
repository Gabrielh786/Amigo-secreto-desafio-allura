# Amigo-secreto-desafio-allura
Este é um projeto de um jogo de Amigo Secreto desenvolvido em JavaScript, HTML e CSS. Os usuários podem adicionar nomes de amigos a uma lista e sortear um amigo secreto aleatoriamente.

Estrutura do Projeto
O projeto possui a seguinte estrutura de arquivos:

index.html
Este arquivo contém a estrutura HTML da aplicação. Ele inclui um campo de entrada para adicionar nomes, uma lista para exibir os nomes adicionados e um botão para sortear um amigo secreto.

style.css
Este arquivo contém os estilos CSS para a aplicação, incluindo a estilização do layout, cores e fontes.

app.js
Este arquivo contém a lógica JavaScript da aplicação. Ele inclui funções para adicionar amigos à lista, exibir a lista de amigos e sortear um amigo secreto.

Funcionalidades
Adicionar nomes de amigos a uma lista visível.
Validar a entrada para evitar nomes duplicados ou campos vazios.
Sortear um amigo secreto aleatoriamente da lista de amigos adicionados.
Como Usar
Abra o arquivo index.html em um navegador web.
Digite o nome de um amigo no campo de entrada e clique no botão "Adicionar".
Repita o passo 2 para adicionar mais amigos à lista.
Clique no botão "Sortear amigo" para sortear um amigo secreto aleatoriamente da lista.
Exemplo de Código
Aqui está um trecho do código JavaScript que implementa a funcionalidade de adicionar amigos e sortear um amigo secreto:

let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == "" || nomeAmigo == " ") {
        alert('Espaço vazio! Por favor, insira um nome.');
        limparCampo();
    }
    if (amigos.includes(nomeAmigo)) {
        alert('Esse nome já foi incluído! Digite o nome de outro amigo se desejar.');
        limparCampo();
    } else {
        amigos.push(nomeAmigo);
        exibirLista(amigos);
    }
    limparCampo();
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = "";
}

function exibirLista(listaNomes) {
    let listaAmigosAdicionados = document.querySelector('ul');
    listaAmigosAdicionados.innerHTML = "";
    for (let nome of listaNomes) {
        let item = document.createElement('li');
        item.textContent = nome;
        listaAmigosAdicionados.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Você precisa inserir um nome antes de sortear!');
    } else {
        let quntDeElemLista = amigos.length;
        let indiceAleatorio = Math.floor(Math.random() * quntDeElemLista);
        let nomeSorteado = amigos[indiceAleatorio];
        let campoSorteio = document.querySelector('h2');
        campoSorteio.innerHTML = 'Seu amigo secreto sorteado é: ' + nomeSorteado;
    }
}
