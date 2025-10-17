<script>
    const imgs = document.querySelectorAll('.static');
    imgs.forEach(img => img.style.display = 'none');

    // Bloquear uma imagem específica pelo src
    const imgEspecifica = document.querySelector('img[src="img5.png"]');
    if (imgEspecifica) imgEspecifica.style.display = 'none';
</script>
