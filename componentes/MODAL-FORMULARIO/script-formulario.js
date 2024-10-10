// Abrir e fechar o modal
const modalFormulario = document.getElementById('modal-formulario');
const btn = document.getElementById('btnOrcamento');
const close = document.querySelector('.close-formulario');

btn.onclick = function() {
    modalFormulario.style.display = 'block';
}

close.onclick = function() {
    modalFormulario.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modalFormulario) {
        modalFormulario.style.display = 'none';
    }
}
