 // ===== LÓGICA DO MODAL =====
    const modal = document.getElementById('modal');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDescricao = document.getElementById('modalDescricao');
    const modalImagem = document.getElementById('modalImagem')

    function abrirModal(titulo, descricao, imagem) {
      modalTitulo.textContent = titulo;
      modalDescricao.textContent = descricao;
      if (imagem) modalImagem.src = imagem;
      modal.style.display = 'flex';
    }

    function fecharModal() {
      modal.style.display = 'none';
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) fecharModal();
    })