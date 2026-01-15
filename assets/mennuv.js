const categoriasData = [
    {
        id: 'todos',
        nome: 'Cardápio Completo',
        icone: 'cookie',
        descricao: 'A autêntica confeitaria artesanal de Pelotas'
    },
    {
        id: 'tradicionais',
        nome: 'Doces Tradicionais',
        icone: 'cookie',
        descricao: 'A autêntica confeitaria artesanal de Pelotas'
    },
    {
        id: 'salgados',
        nome: 'Salgados Artesanais',
        icone: 'cookie',
        descricao: 'Salgados fresquinhos feitos com ingredientes selecionados'
    },
    {
        id: 'tortas',
        nome: 'Tortas Finas',
        icone: 'cake',
        descricao: 'Tortas deliciosas para momentos especiais'
    },
    {
        id: 'cafes',
        nome: 'Cafés Especiais',
        icone: 'coffee',
        descricao: 'Grãos selecionados e preparo perfeito'
    },
    {
        id: 'sazonais',
        nome: 'Sazonais',
        icone: 'star',
        descricao: 'Sabores únicos para esta época do ano'
    }
];

const produtosData = [
    {
        categoria: 'tradicionais',
        nome: 'Quindim Tradicional',
        preco: 'R$ 12,00',
        descricao: 'Clássico doce conventual à base de gemas, açúcar e coco fresco ralado, com textura cremosa e brilho inconfundível.',
    },
    {
        categoria: 'sazonais',
        nome: 'Bruschetta ',
        preco: 'R$ 25,00',
        descricao: 'Clássica bruschetta com tomates e manjericão fresco.',
        src: '../assets/videos/bruchet.mp4',
    },
    {
        categoria: 'sazonais',
        nome: 'Torrada Italiana',
        preco: 'R$ 20,00',
        descricao: 'Torrada italiana com tomates e manjericão fresco.',
        imagem: '../assets/images/torrada.png',
    },
    {
        categoria: 'tortas',
        nome: 'Torta de Noz Pecan',
        preco: 'R$ 180,00',
        descricao: 'Base crocante, recheio cremoso de doce de leite e cobertura generosa de nozes pecan.',
    },
    {
        categoria: 'cafes',
        nome: 'Cappuccino Italiano',
        preco: 'R$ 14,00',
        descricao: 'Espresso, leite vaporizado e espuma de leite, finalizado com cacau em pó.',
    },
    {
        categoria: 'sazonais',
        nome: 'Panetone Trufado',
        preco: 'R$ 85,00',
        descricao: 'Massa de fermentação natural com gotas de chocolate belga e recheio de trufa.',
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const navCategorias = document.getElementById('navCategorias');
    const listaProdutos = document.getElementById('listaProdutos');

    function renderCategorias() {
        navCategorias.innerHTML = '';
        categoriasData.forEach((cat) => {
            if (cat.id === 'todos') return;

            const link = document.createElement('a');
            link.href = '#';
            link.className = 'flex items-center gap-4 p-4 rounded-xl hover:bg-brand-green/5 text-brand-green/70 hover:text-brand-green transition-all font-functional font-bold';
            link.dataset.id = cat.id;
            link.innerHTML = `<span class="material-symbols-outlined">${cat.icone}</span>${cat.nome}`;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                ativarCategoria(cat.id);
            });
            navCategorias.appendChild(link);
        });
    }

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play().catch(() => { });
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.5 });

    function ativarCategoria(id) {
        const links = navCategorias.querySelectorAll('a');
        links.forEach(link => {
            if (link.dataset.id === id) {
                link.className = 'flex items-center gap-4 p-4 rounded-xl bg-brand-green text-white font-functional font-bold shadow-md transition-all';
            } else {
                link.className = 'flex items-center gap-4 p-4 rounded-xl hover:bg-brand-green/5 text-brand-green/70 hover:text-brand-green transition-all font-functional font-bold';
            }
        });
        renderProdutos(id);
    }

    function renderProdutos(categoriaId) {
        videoObserver.disconnect();
        listaProdutos.innerHTML = '';

        const cat = categoriasData.find(c => c.id === categoriaId);
        if (!cat) return;

        const header = document.createElement('div');
        header.className = 'mb-10 flex items-end justify-between border-b border-brand-green/10 pb-6';
        header.innerHTML = `
            <div>
                <h2 class="font-display text-4xl text-brand-green">${cat.nome}</h2>
                <p class="text-brand-green/60 font-body mt-2 italic">${cat.descricao}</p>
            </div>
        `;
        listaProdutos.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 lg:grid-cols-2 gap-10';
        listaProdutos.appendChild(grid);

        const produtosDaCategoria = produtosData.filter(p => p.categoria === categoriaId);

        produtosDaCategoria.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-brand-green/5';

            let mediaHtml = prod.src
                ? `<video class="dish-video w-full h-full object-cover" src="${prod.src}" muted playsinline loop preload="none"></video>`
                : `<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style='background-image: url("${prod.imagem}");'></div>`;

            card.innerHTML = `
                <div class="relative aspect-video w-full overflow-hidden bg-stone-100">${mediaHtml}</div>
                <div class="p-8 flex flex-col">
                    <h4 class="font-display text-xl text-brand-green uppercase tracking-tight mb-2">${prod.nome}</h4>
                    <p class="font-functional font-black text-3xl text-brand-green/80 mb-6 tracking-tight">${prod.preco}</p>
                    <p class="font-body text-brand-green/70 leading-relaxed mb-6">${prod.descricao}</p>
                </div>
            `;
            grid.appendChild(card);

            if (prod.src) videoObserver.observe(card.querySelector('video'));
        });
    }

    if (navCategorias && listaProdutos) {
        renderCategorias();
        const firstCat = categoriasData.find(c => c.id !== 'todos');
        if (firstCat) ativarCategoria(firstCat.id);
    }
});