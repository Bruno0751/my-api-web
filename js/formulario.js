var url = new URL(window.location);
var parametros = new URLSearchParams(url.search);
var req = ''
if (parametros.get('id') === null) {
    req = "insert"
} else {
    req = 'update'
}
var form = `<div>\n\
                <form id='form'>\n\
                    <div class='dv-input'>\n\
                        <label>Nome: </label><input type='text' placeholder='Obrigatório' id='nome' name='nome' class='int-entrada'>\n\
                    </div>\n\
                    <div class='dv-input'>\n\
                        <label>Idade: </label><input type='number' placeholder='...' id='idade' name='idade' class='int-entrada'>\n\
                    </div>\n\
                    <div class='dv-input'>\n\
                        <label>Altura: </label><input type='text' placeholder='...' id='altura' name='altura' class='int-entrada'>\n\
                    </div>\n\
                    <div>\n\
                        <input type='reset' value='Limpar'>\n\
                        <input type='button' value='Salvar' onclick='salvarDados("${req}")'></input>\n\
                    </div>\n\
                </form>\n\
            </div>`;
document.write(form);
function salvarDados(req) {
    // console.log($('#nome').val())
    // console.log($('#idade').val())
    // console.log($('#altura').val())
    if ($('#nome').val() === '') {
        toast(`Nome obrigatorio`, 'ERRO', 'error')
    } else {

        if (req !== undefined) {
            const data = {
                nome: $('#nome').val(),
                idade: parseInt($('#idade').val()),
                altura: parseFloat($('#altura').val())
            };

            let mt, text
            if (req === "insert") {
                mt = 'POST'
                req = 'http://localhost:9090/v1/cliente/insert'
                text = "Cadastrado"
            } else if (req === "update") {
                mt = 'PUT'
                req = `http://localhost:9090/v1/cliente/update/${parametros.get('id')}`
                text = "Atualizado"
            }
            $.blockUI({ message: "<h3 style='font-style: italic;'>Loading...</h3>" });
            setTimeout(() => {
                fetch(req, {
                    method: mt,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then(response => {
                        if (!response.ok) {
                            alert('ERRO AO CADASTRAR');
                            throw new Error('Erro ao enviar requisição.');
                        }
                        return response.json();
                    })
                    .then(data => {
                        toast(`Cliente ${text}`, 'OK', 'success')
                        if (text === "Cadatrado") {
                            console.log('Resposta da API:', data);
                        } else {
                            setTimeout(() => {
                                window.location.href = "buscar.html";
                            }, 3000);
                        }
                    })
                    .catch(error => {
                        alert('ERROR IN REQUEST');
                        console.error('Erro:', error);
                    });
                // fetch('http://localhost:8080/end-point/Serv?opcao=insertDadosAPI', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(data),
                // })
                //     .then(response => {
                //         if (!response.ok) {
                //             alert('ERRO AO CADASTRAR');
                //             throw new Error('Erro ao enviar requisição.');
                //         }
                //         return response.json();
                //     })
                //     .then(data => {
                //         toast('Cliente Cadastrado', 'OK', 'success')
                //         console.log('Resposta da API:', data);
                //     })
                //     .catch(error => {
                //         alert('ERROR IN REQUEST');
                //         console.error('Erro:', error);
                //     });
                $('#nome').val("")
                $('#idade').val("")
                $('#altura').val("")
                $.unblockUI();
            }, 2000);
        }
    }
}