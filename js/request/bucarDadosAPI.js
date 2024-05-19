function buscarDados() {
    fetch("http://localhost:9090/v1/cliente/find", {
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
}
function montarTable(data, bl) {
    if (bl !== undefined) {
        let div = window.document.getElementById("table")
        let tableHTML = "<table class='tabela'>\n\
                            <thead>\n\
                                <tr>\n\
                                    <th class='tabela'>Nome</th>\n\
                                    <th class='tabela'>Idade</th>\n\
                                    <th class='tabela'>Altura</th>\n\
                                    <th class='tabela'>Hora</th>\n\
                                    <th class='tabela'>Data</th>\n\
                                    <th class='tabela'>DELETAR</th>\n\
                                    <th class='tabela'>ATUALIZAR</th>\n\
                                </tr>\n\
                            </thead>\n\
                        <tbody>\n";
        for (let i = 0; i < data.length; i++) {
            tableHTML += `<tr>\n\
                            <td class='tabela'>${data[i].nome}</td>\n\
                            <td class='tabela'>${data[i].idade}</td>\n\
                            <td class='tabela'>${data[i].altura}</td>\n\
                            <td class='tabela'>${data[i].hora}</td>\n\
                            <td class='tabela'>${data[i].data}</td>\n\
                            <td class='tabela'><button type='button' onClick='deletar("${data[i].idCliente}")'>DELETAR</button></td>\n\
                            <td class='tabela'><button type='button' onClick='atualizar("${data[i].idCliente}")'>ATUALIZAR</button></td>\n\
                        </tr>\n`;
        }
        tableHTML += "</tbody>\n\
                        <tfoot>\n\
                            <tr class='tabela'>\n\
                                <th class='tabela'>Nome</th>\n\
                                <th class='tabela'>Idade</th>\n\
                                <th class='tabela'>Altura</th>\n\
                                <th class='tabela'>Hora</th>\n\
                                <th class='tabela'>Data</th>\n\
                                <th class='tabela'>DELETAR</th>\n\
                                <th class='tabela'>ATUALIZAR</th>\n\
                            </tr>\n\
                        </tfoot>\n\
                    </table>";
        div.innerHTML = tableHTML
    }
}