const formulario = document.getElementById('meuFormulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const termos = document.getElementById('termos').checked;

    let mensagensErro = '';
    let isValid = true;

    if (nome === '') {
        mensagensErro += 'O nome é obrigatório.<br>';
        isValid = false;
    }

    if (email === '') {
        mensagensErro += 'O e-mail é obrigatório.<br>';
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        mensagensErro += 'Por favor, insira um e-mail válido.<br>';
        isValid = false;
    }

    if (senha.length < 6) {
        mensagensErro += 'A senha deve ter no mínimo 6 caracteres.<br>';
        isValid = false;
    }

    if (senha !== confirmarSenha) {
        mensagensErro += 'As senhas não coincidem.<br>';
        isValid = false;
    }

    if (!termos) {
        mensagensErro += 'Você deve aceitar os termos de uso.<br>';
        isValid = false;
    }

    if (isValid) {
        resultado.innerHTML = 'Tudo OK!';
        resultado.classList.remove('erro');
        resultado.classList.add('sucesso');
    } else {
        resultado.innerHTML = mensagensErro;
        resultado.classList.remove('sucesso');
        resultado.classList.add('erro');
    }
});