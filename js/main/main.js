// Modal de imagem
const modal = document.getElementById("img-modal");
const img = document.getElementById("art-img");
const modalImg = document.getElementById("modal-img");
const close = document.getElementsByClassName("close")[0];

img.onclick = () => {
    modal.style.display = "block";
    modalImg.src = img.src;
};

close.onclick = () => {
    modal.style.display = "none";
};

modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};