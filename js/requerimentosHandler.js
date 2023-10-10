// Puxando dados do servidor express
fetch(`http://localhost:3000/requerimentos`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            console.log(element);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar dados:', error);
    });