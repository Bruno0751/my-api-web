var form = "<div>\n\
                <form id='form'>\n\
                    <div class='dv-input'>\n\
                        <label>Nome: </label><input type='text' placehoder='' id='nome' name='nome' class='int-entrada'>\n\
                    </div>\n\
                    <div class='dv-input'>\n\
                        <label>Idade: </label><input type='number' placeholder='' id='idade' name='idade' class='int-entrada'>\n\
                    </div>\n\
                    <div class='dv-input'>\n\
                        <label>Altura: </label><input type='text' placeholder='' id='altura' name='altura' class='int-entrada'>\n\
                    </div>\n\
                    <div>\n\
                        <input type='reset' value='Limpar'>\n\
                        <input type='button' value='Salvar' onclick='salvarDados()'>\n\
                    </div>\n\
                </form>\n\
            </div>";
document.write(form);