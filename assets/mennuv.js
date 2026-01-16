const categoriasData = [
    {
        id: 'tradicionais',
        nome: 'Doces Finos de Pelotas',
        icone: 'editor_choice',
        descricao: 'A nobreza da autêntica tradição doceira, feita com receitas centenárias.'
    },
    {
        id: 'salgados',
        nome: 'Salgados, Lanches, Pizzas, Sopas e Saladas',
        icone: 'bakery_dining',
        descricao: 'Gastronomia artesanal e ingredientes frescos, do lanche rápido ao jantar leve.'
    },
    {
        id: 'tortas',
        nome: 'Tortas, Bolos e Sobremesas',
        icone: 'cake',
        descricao: 'Confeitaria fina e sabores inesquecíveis para celebrar cada momento.'
    },
    {
        id: 'cafes',
        nome: 'Cafés, Cafés Gelados, Expressos e Elaborados',
        icone: 'coffee',
        descricao: 'Grãos premium e a arte do barista em extrações perfeitas.'
    },
    {
        id: 'bebidas',
        nome: 'Bebidas Quentes e de Verão',
        icone: 'local_bar',
        descricao: 'Do conforto dos chás aromáticos ao frescor dos drinks exclusivos.'
    }
];

const produtosData = [
    {
        categoria: 'tradicionais',
        nome: 'Bombom de Morango',
        preco: 'R$ 9,50',
        descricao: 'O frescor da fruta selecionada envolto em doce artesanal, criando um contraste perfeito de sabores.',
        src: './assets/videos/bombom.mp4',
    },
    {
        categoria: 'tradicionais',
        nome: 'Bombom de Morango',
        preco: 'R$ 9,50',
        descricao: 'O frescor da fruta selecionada envolto em doce artesanal, criando um contraste perfeito de sabores.',
        src: './assets/videos/bombom.mp4',
    },
    {
        categoria: 'tradicionais',
        nome: 'Camafeu',
        preco: 'R$ 9,50',
        descricao: 'Clássico nobre: massa aveludada de nozes com ovos, finalizada com a delicadeza do fondant branco.',
        imagem: 'https://static.saipos.com/saipos-estatico/img-items/63093/store_item/1cd0fa302670edfe7e8265ab92336d25.png'
    },
    {
        categoria: 'tradicionais',
        nome: 'Olho de Sogra',
        preco: 'R$ 9,50',
        descricao: 'A harmoniosa união da ameixa tenra com o autêntico doce de coco e gemas.',
        imagem: 'https://static.saipos.com/saipos-estatico/img-items/63093/store_item/04114f7408906a74689e81bb9485ae49.png'
    },
    {
        categoria: 'tradicionais',
        nome: 'Broa de Coco',
        preco: 'R$ 9,50',
        descricao: 'Textura úmida e sabor tropical, elaborada com coco natural fresco e a riqueza das gemas.',
        imagem: 'https://static.saipos.com/saipos-estatico/img-items/63093/store_item/3495ca7525dbd55e2081e5090d8478a2.png'
    },
    {
        categoria: 'tradicionais',
        nome: 'Ninho',
        preco: 'R$ 9,50',
        descricao: 'Obra de arte conventual: delicados fios de ovos abraçando um recheio cremoso de ovos moles.',
        imagem: 'https://static.saipos.com/saipos-estatico/img-items/63093/store_item/3495ca7525dbd55e2081e5090d8478a2.png'

    },
    {
        categoria: 'tradicionais',
        nome: 'Quindim Tradicional',
        preco: 'R$ 9,50',
        descricao: 'O ícone de Pelotas. Brilho espelhado, base de coco e interior cremoso de gemas frescas.',
        imagem: 'https://static.saipos.com/saipos-estatico/img-items/63093/store_item/3495ca7525dbd55e2081e5090d8478a2.png'

    },
    {
        categoria: 'tradicionais',
        nome: 'Quindim de Leite Condensado',
        preco: 'R$ 9,50',
        descricao: 'Uma variação suave e sedosa do clássico, com textura que remete ao mais fino pudim.',
        imagem: 'https://static.saipos.com/saipos-estatico/img-items/63093/store_item/3495ca7525dbd55e2081e5090d8478a2.png'

    },
    {
        categoria: 'tradicionais',
        nome: 'Quindim Recheado com Nozes',
        preco: 'R$ 9,50',
        descricao: 'A fusão perfeita: o quindim dourado revelando um coração surpreendente de doce de nozes.',
        imagem: 'https://static.saipos.com/saipos-estatico/img-items/63093/store_item/3495ca7525dbd55e2081e5090d8478a2.png'

    },
    {
        categoria: 'tradicionais',
        nome: 'Quindim ao Café',
        preco: 'R$ 9,50',
        descricao: 'Sofisticação para o paladar adulto. A doçura tradicional equilibrada com notas de café torrado.',
        imagem: 'https://static.saipos.com/saipos-estatico/img-items/63093/store_item/3495ca7525dbd55e2081e5090d8478a2.png'

    },
    {
        categoria: 'tradicionais',
        nome: 'Quindim de Nozes',
        preco: 'R$ 9,50',
        descricao: 'Massa especial enriquecida com nozes, conferindo textura única e sabor amendoado.',
        imagem: 'https://static.saipos.com/saipos-estatico/img-items/63093/store_item/3495ca7525dbd55e2081e5090d8478a2.png'

    },
    {
        categoria: 'tradicionais',
        nome: 'Trouxinha de Fios de Ovos',
        preco: 'R$ 9,50',
        descricao: 'Exuberantes fios de ovos dourados, levemente gratinados para realçar o sabor.',
        imagem: 'https://static.saipos.com/saipos-estatico/img-items/63093/store_item/3495ca7525dbd55e2081e5090d8478a2.png'

    },
    {
        categoria: 'tradicionais',
        nome: 'Trouxinha de Nozes',
        preco: 'R$ 9,50',
        descricao: 'A leveza dos fios de ovos envolvendo um recheio denso e saboroso de nozes nobres.',
        imagem: 'https://static.saipos.com/saipos-estatico/img-items/63093/store_item/3495ca7525dbd55e2081e5090d8478a2.png'

    },
    {
        categoria: 'tradicionais',
        nome: 'Ninho Glaceado',
        preco: 'R$ 9,50',
        descricao: 'A elegância do Ninho tradicional coberto por uma fina camada de glacê acetinado.',
        imagem: 'https://static.saipos.com/saipos-estatico/img-items/63093/store_item/3495ca7525dbd55e2081e5090d8478a2.png'

    },
    // Salgados, Lanches, Pizzas, Sopas e Saladas
    {
        categoria: 'salgados',
        nome: 'Bruschetta ',
        preco: 'R$ 25,00',
        descricao: 'Clássica bruschetta com tomates e manjericão fresco.',
        src: './assets/videos/bruchet.mp4',
    },
    {
        categoria: 'salgados',
        nome: 'Bruschetta ',
        preco: 'R$ 25,00',
        descricao: 'Clássica bruschetta com tomates e manjericão fresco.',
        src: './assets/videos/bruchet2.mp4',
    },
    {
        categoria: 'salgados',
        nome: 'Prato de Batata Frita',
        preco: 'R$ 13,90',
        descricao: 'Batata frita com molho especial.',
        src: './assets/videos/batata.mp4',
    },
    {
        categoria: 'salgados',
        nome: 'Hamburguer com Batata',
        preco: 'R$ 23,90',
        descricao: 'Batata frita com molho especial.',
        src: './assets/videos/hamburguer780p.mp4',
    },
    {
        categoria: 'salgados',
        nome: 'Hamburguer com Batata',
        preco: 'R$ 23,90',
        descricao: 'Batata frita com molho especial.',
        src: './assets/videos/5688.MOV',
    },
    {
        categoria: 'salgados',
        nome: 'Quiche de Milho com Bacon',
        preco: 'R$ 13,90',
        descricao: 'Quiche de milho com bacon.',
        imagem: 'https://static.saipos.com/saipos-estatico/img-items/63093/store_item/fc5907a56bab267f0a2002c280921b03.jpeg',
    },
    // Tortas, Bolos e Sobremesas
    {
        categoria: 'tortas',
        nome: 'Fatia de Torta de Limão com Chocolate Amargo',
        preco: 'R$ 17,00',
        descricao: 'Fatia de torta de limão com chocolate amargo.',
        src: './assets/videos/Vídeo_de_Torta_de_Limão_e_Chocolate.webm',
    },
    {
        categoria: 'tortas',
        nome: 'Fatia de Torta de Limão com Chocolate Amargo',
        preco: 'R$ 17,00',
        descricao: 'Fatia de torta de limão com chocolate amargo.',
        src: './assets/videos/Vídeo_de_Torta_de_Limão_e_Chocolate.webm',
    },
    {
        categoria: 'tortas',
        nome: 'Fatia de Torta de Limão com Chocolate Amargo',
        preco: 'R$ 17,00',
        descricao: 'Fatia de torta de limão com chocolate amargo.',
        src: './assets/videos/Vídeo_de_Torta_de_Limão_e_Chocolate.webm',
    },
    {
        categoria: 'tortas',
        nome: 'Fatia de Torta de Limão com Chocolate Amargo',
        preco: 'R$ 17,00',
        descricao: 'Fatia de torta de limão com chocolate amargo.',
        imagem: './assets/images/Imagem_de_Torta_de_Limão_e_Chocolate.png',
    },
    // Cafés, Cafés Gelados, Expressos e Elaborados
    {
        categoria: 'cafes',
        nome: 'Cappuccino Italiano',
        preco: 'R$ 14,00',
        descricao: 'Espresso, leite vaporizado e espuma de leite, finalizado com cacau em pó.',
        src: './assets/videos/capucino.mp4',
    },
    {
        categoria: 'cafes',
        nome: 'Cappuccino Italiano',
        preco: 'R$ 14,00',
        descricao: 'Espresso, leite vaporizado e espuma de leite, finalizado com cacau em pó.',
        src: './assets/videos/capucino.mp4',
    },
    {
        categoria: 'cafes',
        nome: 'Cappuccino Italiano',
        preco: 'R$ 14,00',
        descricao: 'Espresso, leite vaporizado e espuma de leite, finalizado com cacau em pó.',
        src: './assets/videos/capucino.mp4',
    },
    // Bebidas Quentes e de Verão
    {
        categoria: 'bebidas',
        nome: 'Drink de Amora',
        preco: 'R$ 15,00',
        descricao: 'Massa de fermentação natural com gotas de chocolate belga e recheio de trufa.',
        src: './assets/videos/drink.mp4',
    },
    {
        categoria: 'bebidas',
        nome: 'Drink de Amora',
        preco: 'R$ 15,00',
        descricao: 'Massa de fermentação natural com gotas de chocolate belga e recheio de trufa.',
        src: './assets/videos/drink.mp4',
    },
    {
        categoria: 'bebidas',
        nome: 'Drink de Amora',
        preco: 'R$ 15,00',
        descricao: 'Massa de fermentação natural com gotas de chocolate belga e recheio de trufa.',
        src: './assets/videos/drink.mp4',
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
            link.href = '#section';
            link.className = 'flex items-center gap-4 p-4 rounded-xl hover:bg-brand-green/5 text-brand-green/70 hover:text-brand-green transition-all font-functional font-bold';
            link.dataset.id = cat.id;
            link.innerHTML = `<span class="material-symbols-outlined">${cat.icone}</span>${cat.nome}`;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                ativarCategoria(cat.id);
                const section = document.getElementById('section');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
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
                <h2 class="font-display text-4xl text-brand-green uppercase tracking-tight">${cat.nome}</h2>
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