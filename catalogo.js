document.addEventListener('DOMContentLoaded', () => {
    const animes = JSON.parse(localStorage.getItem('animes')) || [];
    const listaAnimes = document.getElementById('film-list'); 

    animes.forEach(anime => {
        const card = `
            <article class="film">
                <img src="${anime.imagem}" alt="${anime.titulo}" class="film-img" onerror="this.src='imagem-padrao.jpg'">
                <div class="film-info">
                    <h2 class="film-title">${anime.titulo}</h2>
                    <p class="film-year">${anime.ano}</p>
                    <p class="film-synopsis">${anime.sinopse}</p>
                    <p class="film-rating">Avaliação: ${'⭐'.repeat(Math.floor(anime.avaliacao))}${anime.avaliacao % 1 ? '½' : ''}</p>
                </div>
            </article>
        `;
        listaAnimes.insertAdjacentHTML('beforeend', card);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const animes = JSON.parse(localStorage.getItem('animes')) || [];
    const container = document.getElementById('novos-animes');

    
    container.innerHTML = '';

    animes.forEach(anime => {
        const card = `
            <article class="film">
                <img src="${anime.imagem}" alt="${anime.titulo}" class="film-img" onerror="this.src='imagem-padrao.jpg'">
                <div class="film-info">
                    <h2 class="film-title">${anime.titulo}</h2>
                    <p class="film-year">${anime.ano}</p>
                    <p class="film-synopsis">${anime.sinopse}</p>
                    <p class="film-rating">Avaliação: ${'⭐'.repeat(Math.floor(anime.avaliacao))}${anime.avaliacao % 1 ? '½' : ''}</p>
                </div>
            </article>
        `;
        container.insertAdjacentHTML('beforeend', card);
    });
});