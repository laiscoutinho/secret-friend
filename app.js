//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nome);
  input.value = ''; 
  atualizarLista();
}

// Atualiza a lista de nomes na tela
function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Nenhum nome para sortear. Adicione pelo menos um amigo.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>🎉 Amigo secreto sorteado: <strong>${nomeSorteado}</strong></li>`;
}
