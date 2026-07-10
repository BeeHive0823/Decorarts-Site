export type Product = {
  id: string
  title: string
  image: string
  oldPrice?: string
  price: string
  pixDiscount?: string
  installments: string
  altInstallments?: string
  creditBadge?: string
  freeShipping?: boolean
}

export const products: Product[] = [
  {
    id: 'kit-6-asa',
    title: 'Kit 6 Asa De 2,50 X 1,70 Cm C/ Ou S/ Borda Tecido Tensionado',
    image: '/images/produto-asa.png',
    price: 'R$ 460',
    installments: '12x R$ 44,48',
    freeShipping: true,
  },
  {
    id: 'espiral-parafuso',
    title: 'Espiral Ou Parafuso Kit C/ 5 Pç Em Tecido Tensionado 1.70 Cm',
    image: '/images/produto-espiral.png',
    oldPrice: 'R$ 469,90',
    price: 'R$ 446,40',
    pixDiscount: '5% OFF no Pix',
    installments: 'ou R$ 469,90 em 9x R$ 52,21',
    altInstallments: 'sem juros',
    creditBadge: '7% OFF Linha de crédito',
    freeShipping: true,
  },
  {
    id: 'decoracao-estrela',
    title: 'Decoração P/ Loja De Veículos (kit 4 Estrela 0,70 Cm²)',
    image: '/images/produto-estrela.png',
    price: 'R$ 350',
    installments: '12x R$ 34,24',
    freeShipping: true,
  },
  {
    id: 'cone-espiral',
    title: 'Cone Espiral Em Tecido Tensionado 2,00 M Decoração De Eventos',
    image: '/images/produto-cone.png',
    price: 'R$ 280',
    installments: '12x R$ 27,80',
    freeShipping: true,
  },
  {
    id: 'vela-nautica',
    title: 'Vela Náutica Tensionada Kit C/ 3 Peças Decoração De Fachada',
    image: '/images/produto-vela.png',
    oldPrice: 'R$ 549,90',
    price: 'R$ 522,40',
    pixDiscount: '5% OFF no Pix',
    installments: 'ou R$ 549,90 em 10x R$ 54,99',
    altInstallments: 'sem juros',
    freeShipping: true,
  },
  {
    id: 'bandeirinha',
    title: 'Bandeirinha Ponta Tensionada Kit C/ 10 Un Decoração De Loja',
    image: '/images/produto-bandeirinha.png',
    price: 'R$ 190',
    installments: '12x R$ 18,90',
    freeShipping: true,
  },
  {
    id: 'estrela-3d',
    title: 'Estrela 3D Em Tecido Tensionado 0,90 Cm Decoração De Eventos',
    image: '/images/produto-estrela.png',
    price: 'R$ 220',
    installments: '12x R$ 21,84',
    creditBadge: '7% OFF Linha de crédito',
  },
  {
    id: 'tunel-arco',
    title: 'Arco De Entrada Estrutura Tensionada P/ Eventos E Festas',
    image: '/images/produto-tunel.png',
    price: 'R$ 640',
    installments: '12x R$ 61,90',
    freeShipping: true,
  },
]
