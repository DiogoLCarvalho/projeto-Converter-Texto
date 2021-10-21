const textarea = document.querySelector('#input__text');

// Ajustar automaticamente o texto
textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = `${this.scrollHeight}px`
});