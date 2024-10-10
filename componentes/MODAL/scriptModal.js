// Pegando os elementos HTML
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");
const closeModal = document.querySelector(".close");

// Função para abrir o modal com os dados corretos
function openModal(service) {
    modal.style.display = "block";

    if (service === 'energia') {
        modalImage.src = "caminho_da_imagem_energia.jpg"; // Adicione a URL da imagem de energia solar
        modalText.innerHTML = `
            <h2>Energia Solar</h2>
            <p>A energia solar é uma alternativa sustentável...</p>
        `;
    } else if (service === 'seguranca') {
        modalImage.src = "caminho_da_imagem_seguranca.jpg"; // Adicione a URL da imagem de segurança do trabalho
        modalText.innerHTML = `
            <h2>Segurança do Trabalho</h2>
            <p>A segurança do trabalho é fundamental para...</p>
        `;
    } else if (service === 'eletrica') {
        modalImage.src = "caminho_da_imagem_eletrica.jpg"; // Adicione a URL da imagem de instalação elétrica
        modalText.innerHTML = `
            <h2>Instalação Elétrica</h2>
            <p>A instalação elétrica segura e eficiente é...</p>
        `;
    }
}

// Fechar o modal
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Fechar o modal ao clicar fora da área de conteúdo
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Adicionar eventos de clique para cada card
document.getElementById("card1").addEventListener("click", function() {
    openModal('energia');
});

document.getElementById("card2").addEventListener("click", function() {
    openModal('seguranca');
});

document.getElementById("card3").addEventListener("click", function() {
    openModal('eletrica');
});
