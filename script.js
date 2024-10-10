document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.getElementById('modal-container');
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
      card.addEventListener('click', () => {
          // Carregar o modal dinamicamente
          fetch('componentes/MODAL/modal.html')
              .then(response => response.text())
              .then(data => {
                  modalContainer.innerHTML = data;
                  const modal = document.querySelector('.modal');
                  modal.style.display = 'flex';

                  // Fechar o modal
                  document.querySelector('.close').addEventListener('click', () => {
                      modal.style.display = 'none';
                  });
              })
              .catch(error => console.error('Erro ao carregar o modal:', error));
      });
  });
});
