const textarea = document.querySelector('#input__text');

// Ajustar automaticamente o texto
textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = `${this.scrollHeight}px`
});

// Botões
const btns = document.querySelectorAll('.btn');
let containerBtn = document.querySelector('#main__bnts');

btns.forEach(element => {
    element.addEventListener('click', function () {
        if (textarea.value == '') {
            alert('Seu texto está vazio, digite novamente:')
        } else {
            console.log(this);
            console.log(textarea.value);
            console.log(containerBtn.children);
            let textoModificado;


            let acao = this.innerHTML;
            console.log(acao);

            switch (acao) {
                case 'Maiúscula':
                    alert('Maiúscula');
                    textoModificado = textarea.value.toUpperCase();
                    textarea.value = ''
                    textarea.value = textoModificado;
                    break;
                case 'Minúscula':
                    alert('Minúscula');
                    textoModificado = textarea.value.toLowerCase();
                    textarea.value = ''
                    textarea.value = textoModificado;
                    break;

                case 'Capitalizado':
                    alert('Capitalizado');

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
                    alert('Copiar Texto');
                    
                    break;

                case 'Limpar':
                    alert('Limpar');
                    textarea.value = ''
                    break;
                default:
                    alert('Erro ao modificar o texto!')
            }

        }

    })
});