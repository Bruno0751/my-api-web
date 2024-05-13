fetch("http://localhost:8080/v1/cliente/find", {
    method: 'GET',
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao deletar recurso');
        }
        return response.json();
    })
    .then(data => {
        console.log('Resposta da API:', data);
        if (data.length === 0) {
            window.document.getElementById("table").innerHTML = "<h2 style='text-align: center; font-size: 7vh;'>Lista Vazia</h2>"
        } else {
            montarTable(data, true)
        }
    })
    .catch(error => {
        alert('ERROR IN REQUEST');
        console.error('Erro:', error);
    });