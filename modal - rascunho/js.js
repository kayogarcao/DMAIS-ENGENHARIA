// Seleciona os elementos do DOM
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');

// Adiciona um evento de clique para cada card
cards.forEach(card => {
  card.addEventListener('click', function() {
    // Obtém os dados do card (imagem, título e descrição)
    const imageSrc = card.getAttribute('data-image');
    const title = card.getAttribute('data-title');
    const description = card.getAttribute('data-description');

    // Atualiza o conteúdo do modal
    modalImage.src = imageSrc; // Atualiza a imagem
    modalTitle.textContent = title; // Atualiza o título
    modalDescription.textContent = description; // Atualiza a descrição

    // Exibe o modal
    modal.style.display = 'block';
  });
});

// Fecha o modal quando o botão "x" é clicado
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Fecha o modal quando o usuário clica fora do modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
