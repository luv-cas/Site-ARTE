 fetch("topbar.html")
        .then(response => response.text())
        .then(data => {
          document.getElementById("topbar").innerHTML = data;
        })
        .catch(err => console.error("Erro ao carregar a topbar:", err));