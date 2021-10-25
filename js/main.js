const textarea = document.querySelector('#input__text');
const carateres = document.querySelector('#totalCarater');

// Ajustar automaticamente o texto
textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = `${this.scrollHeight}px`
    carateres.innerHTML = + `${textarea.value.length}`;
});

// Botões
const btns = document.querySelectorAll('.btn');
let containerBtn = document.querySelector('#main__bnts');

btns.forEach(element => {
    element.addEventListener('click', function () {
        if (textarea.value == '') {
            alert('Seu texto está vazio, digite novamente:')
        } else {
            let textoModificado;
            let acao = this.innerHTML;

            switch (acao) {
                case 'Maiúscula':
                    textoModificado = textarea.value.toUpperCase();
                    textarea.value = ''
                    textarea.value = textoModificado;
                    break;
                case 'Minúscula':
                    textoModificado = textarea.value.toLowerCase();
                    textarea.value = ''
                    textarea.value = textoModificado;
                    break;
                case 'Capitalizado':
                    // Transforme em array
                    textoModificado = textarea.value.split(' ');

                    for (var i = 0; i < textoModificado.length; i++) {
                        // Pegue a primeira letra de cada array e coloque em Maiúscula e junte com o resto
                        textoModificado[i] = textoModificado[i].charAt(0).toUpperCase() + textoModificado[i].slice(1);
                    }
                    textoModificado = textoModificado.join(" ");

                    textarea.value = ''
                    textarea.value = textoModificado;
                    break;
                case 'Copiar Texto':
                    textarea.select();
                    document.execCommand("copy");
                    break;
                case 'Limpar':
                    textarea.value = ''
                    carateres.innerHTML = + `0`;
                    textarea.style.height = 'auto';
                    textarea.style.height = `${this.scrollHeight}px`
                    break;
                default:
                    alert('Erro ao modificar o texto!')
            }

        }

    })
});