const addBtn = document.getElementById('addBtn');
const itemInput = document.getElementById('itemInput');
const lista = document.getElementById('lista');

// Função para adicionar item
addBtn.addEventListener('click', () => {
  const itemTexto = itemInput.value.trim();

  if (itemTexto === '') {
    alert('Digite o nome de um item antes de adicionar!');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `${itemTexto} <button class="remove-btn">×</button>`;
  
  // Botão de remover
  li.querySelector('.remove-btn').addEventListener('click', () => {
    li.remove();
  });

  lista.appendChild(li);
  itemInput.value = '';
  itemInput.focus();
});

// Permite adicionar com Enter
itemInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addBtn.click();
});
