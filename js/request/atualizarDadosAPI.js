function atualizar(id) {
    window.location.href = `atualizar.html?id=${id}`
}
function bucarID() {
    const url = new URL(window.location);
    const parametros = new URLSearchParams(url.search);
    fetch(`http://localhost:9090/v1/cliente/findOne/${parametros.get('id')}`, {
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
            $('#nome').val(data.nome)
            $('#idade').val(data.idade)
            $('#altura').val(data.altura)
        })
        .catch(error => {
            alert('ERROR IN REQUEST');
            console.error('Erro:', error);
        });
}