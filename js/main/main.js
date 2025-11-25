// Modal
const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("modal-img");
const close = document.getElementsByClassName("close")[0];

// Seleciona todas as imagens do carrossel
const track = document.querySelector('.carousel-track');
const trackImgs = document.querySelectorAll('.carousel-track img');

// Zoom + pausa + modal
trackImgs.forEach(img => {
  // Zoom + pausa do carrossel
  img.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
    img.classList.add('zoomed');
  });

  img.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
    img.classList.remove('zoomed');
  });

  // Modal
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

// Fecha modal
close.onclick = () => modal.style.display = 'none';
modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

