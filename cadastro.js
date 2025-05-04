document.getElementById('form-anime').addEventListener('submit', function(e) {
    e.preventDefault();
    let formValido = true;


    document.querySelectorAll('.error').forEach(el => el.remove());

  
    const titulo = document.getElementById('titulo').value.trim();
    if (!titulo) {
        mostrarErro('titulo', 'Título é obrigatório!');
        formValido = false;
    }


    const ano = document.getElementById('ano').value;
    const anoAtual = new Date().getFullYear();
    if (!ano || ano < 1900 || ano > anoAtual) {
        mostrarErro('ano', `Ano deve ser entre 1900 e ${anoAtual}`);
        formValido = false;
    }


    const sinopse = document.getElementById('sinopse').value.trim();
    if (!sinopse || sinopse.length < 20) {
        mostrarErro('sinopse', 'Sinopse deve ter pelo menos 20 caracteres');
        formValido = false;
    }

    const imagem = document.getElementById('imagem').value.trim();
    if (!imagem || !validarURL(imagem)) {
        mostrarErro('imagem', 'URL da imagem inválida!');
        formValido = false;
    }


    const avaliacao = parseFloat(document.getElementById('avaliacao').value);
    if (isNaN(avaliacao) || avaliacao < 0 || avaliacao > 5) {
        mostrarErro('avaliacao', 'Avaliação deve ser entre 0 e 5');
        formValido = false;
    }


    if (formValido) {
        const novoAnime = {
            titulo,
            ano,
            sinopse,
            imagem,
            avaliacao
        };

        let animes = JSON.parse(localStorage.getItem('animes')) || [];
        animes.push(novoAnime);
        localStorage.setItem('animes', JSON.stringify(animes));
        

        window.location.href = 'catalogo.html';
    }
});


function mostrarErro(campoId, mensagem) {
    const campo = document.getElementById(campoId);
    campo.style.border = '1px solid red';
    
    const divErro = document.createElement('div');
    divErro.className = 'error';
    divErro.textContent = mensagem;
    divErro.style.color = 'red';
    divErro.style.fontSize = '12px';
    campo.insertAdjacentElement('afterend', divErro);
}

function validarURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}