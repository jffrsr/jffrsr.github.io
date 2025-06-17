import { images, mockTestimonials, marcas, galeria, bancos } from './data.js';
import Header from './Header.js';
import SolarCalculator from './SolarCalculator.js';

function App() {
  const [bgImage, setBgImage] = React.useState(images[0]);

  React.useEffect(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBgImage(randomImage);

    try {
      const swiperTestemunhos = document.querySelector('.swiper-testemunhos');
      if (swiperTestemunhos) {
        new Swiper('.swiper-testemunhos', {
          loop: mockTestimonials.length > 1,
          autoplay: { delay: 3000, disableOnInteraction: false },
          slidesPerView: 1,
          spaceBetween: 10,
          breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }
        });
      }

      const swiperBancos = document.querySelector('.swiper-bank');
      if (swiperBancos) {
        new Swiper('.swiper-bank', {
          loop: bancos.length > 1,
          autoplay: { delay: 4000, disableOnInteraction: false },
          slidesPerView: 1,
          spaceBetween: 10,
          breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }
        });
      }
    } catch (error) {
      console.error('Erro ao inicializar Swipers:', error);
    }
  }, []);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header),
    React.createElement(
      'section',
      { id: 'home', className: 'hero is-fullheight has-background-black-bis', style: { backgroundImage: `url(${bgImage || images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' } },
      React.createElement(
        'div',
        { className: 'hero-body hero-overlay' },
        React.createElement(
          'div',
          { className: 'container has-text-centered' },
          React.createElement('h1', { className: 'title is-1 energia-limpa has-text-primary' }, 'Energia Limpa'),
          React.createElement('p', { className: 'subtitle is-3 has-text-light' }, 'Futuro Brilhante'),
          React.createElement(
            'a',
            { href: '#contato', className: 'button is-warning is-large is-rounded' },
            'Fale Conosco'
          )
        )
      )
    ),
    React.createElement(SolarCalculator),
    React.createElement(
      'section',
      { id: 'sobre', className: 'section has-background-black-bis' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('h2', { className: 'title is-3 has-text-primary has-text-centered' }, 'Sobre Nós'),
        React.createElement(
          'div',
          { className: 'columns is-vcentered' },
          React.createElement(
            'div',
            { className: 'column is-5' },
            React.createElement('img', {
              src: 'https://images.unsplash.com/photo-1745187946672-2c1d8cf26a2b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              alt: 'Painel solar',
              className: 'image'
            })
          ),
          React.createElement(
            'div',
            { className: 'column is-7 content quem-somos has-text-left' },
            React.createElement('h2', { className: 'title is-3 has-text-primary' }, 'Quem Somos'),
            React.createElement(
              'p',
              { className: 'has-text-light' },
              'A ECOSOLARES é uma referência no setor de energia solar, contando com mais de 14 anos de experiência no mercado. Durante nossa trajetória, nos dedicamos a oferecer soluções sustentáveis e inovadoras que promovem um futuro mais verde e energeticamente eficiente.'
            ),
            React.createElement('h3', { className: 'title is-4 has-text-primary' }, 'Nossa Missão'),
            React.createElement(
              'p',
              { className: 'has-text-light' },
              'Nossa missão é transformar a maneira como o mundo utiliza a energia, incentivando a adoção de fontes renováveis e reduzindo a dependência de combustíveis fósseis. Com uma equipe altamente qualificada e comprometida, garantimos excelência em cada projeto, desde a concepção até a implementação, sempre priorizando a satisfação dos nossos clientes e o respeito ao meio ambiente.'
            ),
            React.createElement(
              'blockquote',
              { className: 'has-text-light is-italic' },
              'Promovendo um futuro mais verde e energeticamente eficiente.'
            )
          )
        )
      )
    ),
    React.createElement(
      'section',
      { id: 'sobre-servicos', className: 'section has-background-black-bis' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('h2', { className: 'title is-4 has-text-primary has-text-centered' }, 'Nossos Serviços'),
        React.createElement(
          'div',
          { className: 'columns is-multiline is-vcentered' },
          ['Instalação', 'Manutenção', 'Consultoria'].map((servico) =>
            React.createElement(
              'div',
              { key: servico, className: 'column is-4' },
              React.createElement(
                'div',
                { className: 'card has-background-grey-darker p-4 is-rounded' },
                React.createElement(
                  'div',
                  { className: 'card-content has-text-centered' },
                  React.createElement('h4', { className: 'title is-5 has-text-primary' }, servico),
                  React.createElement('p', { className: 'has-text-light' }, 'Serviço de alta qualidade para sistemas solares.'),
                  React.createElement('p', null, React.createElement('a', { href: '#contato', className: 'has-text-warning' }, 'Saiba mais'))
                )
              )
            )
          )
        )
      )
    ),
    React.createElement(
      'section',
      { id: 'sobre-marcas', className: 'section has-background-black-bis' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('h2', { className: 'title is-4 has-text-primary has-text-centered' }, 'Nossas Marcas'),
        React.createElement(
          'div',
          { className: 'columns is-multiline is-vcentered' },
          marcas.map((marca) =>
            React.createElement(
              'div',
              { key: marca.nome, className: 'column is-3' },
              React.createElement(
                'div',
                { className: 'card has-background-grey-darker p-4 is-rounded' },
                React.createElement(
                  'div',
                  { className: 'card-content has-text-centered' },
                  React.createElement('img', { src: marca.logo, alt: marca.nome, className: 'image is-96x96 mx-auto mb-3' }),
                  React.createElement('p', { className: 'has-text-light' }, marca.nome)
                )
              )
            )
          )
        )
      )
    ),
    React.createElement(
      'section',
      { id: 'sobre-testemunhos', className: 'section has-background-black-bis' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('h2', { className: 'title is-4 has-text-primary has-text-centered' }, 'Nossos Clientes'),
        React.createElement(
          'div',
          { className: 'swiper swiper-testemunhos' },
          React.createElement(
            'div',
            { className: 'swiper-wrapper' },
            mockTestimonials.map((t, i) =>
              React.createElement(
                'div',
                { key: i, className: 'swiper-slide' },
                React.createElement(
                  'div',
                  { className: 'card has-background-grey-darker p-4 is-rounded' },
                  React.createElement(
                    'div',
                    { className: 'card-content has-text-centered' },
                    React.createElement('img', { src: t.foto, alt: t.nome, className: 'image is-64x64 is-rounded mx-auto mb-3' }),
                    React.createElement('p', { className: 'is-italic has-text-light' }, `"${t.depoimento}"`),
                    React.createElement('p', { className: 'has-text-light has-text-weight-bold' }, `${t.nome}, ${t.cidade}`)
                  )
                )
              )
            )
          )
        )
      )
    ),
    React.createElement(
      'section',
      { id: 'sobre-galeria', className: 'section has-background-black-bis' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('h2', { className: 'title is-4 has-text-primary has-text-centered' }, 'Projetos'),
        React.createElement(
          'div',
          { className: 'magazine-grid' },
          galeria.map((projeto) =>
            React.createElement(
              'div',
              { key: projeto.nome, className: 'magazine-item' },
              React.createElement('img', { src: projeto.imagem, alt: projeto.nome, className: 'magazine-image is-rounded' }),
              React.createElement('div', { className: 'has-background-black is-opacity-70 p-3 has-text-light has-text-centered' }, projeto.nome)
            )
          )
        )
      )
    ),
    React.createElement(
      'section',
      { id: 'sobre-financiamento', className: 'section has-background-black-bis' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('h2', { className: 'title is-4 has-text-primary has-text-centered' }, 'Financeiras'),
        React.createElement('p', { className: 'subtitle is-5 has-text-light has-text-centered' }, 'Parcerias com bancos para facilitar sua instalação solar.'),
        React.createElement(
          'div',
          { className: 'swiper swiper-bank' },
          React.createElement(
            'div',
            { className: 'swiper-wrapper' },
            bancos.map((banco) =>
              React.createElement(
                'div',
                { key: banco.nome, className: 'swiper-slide' },
                React.createElement(
                  'div',
                  { className: 'card has-background-grey-darker p-4 is-rounded' },
                  React.createElement(
                    'div',
                    { className: 'card-content has-text-centered' },
                    React.createElement(
                      'svg',
                      { className: 'bank-logo', style: { width: '64', height: '64px' }, role: 'img', 'aria-label': `logo ${banco.nome.toLowerCase()}` },
                      React.createElement('use', { xlinkHref: `./bancos.svg#${banco.logo}` })
                    ),
                    React.createElement('p', { className: 'has-text-light mt-3' }, banco.nome),
                    React.createElement('p', { className: 'has-text-light is-size-7' }, 'Taxa: 1,2% a.m.'),
                    React.createElement('p', null, React.createElement('a', { href: '#', className: 'has-text-warning' }, 'Saiba mais'))
                  )
                )
              )
            )
          )
        )
      )
    ),
    React.createElement(
      'section',
      { id: 'contato', className: 'section has-background-black-bis' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('h2', { className: 'title is-3 has-text-primary has-text-centered' }, 'Contato'),
        React.createElement(
          'div',
          { className: 'columns is-vcentered' },
          React.createElement(
            'div',
            { className: 'column is-6' },
            React.createElement(
              'div',
              { className: 'card has-background-grey-darker p-5 is-rounded' },
              React.createElement(
                'div',
                { className: 'card-content' },
                React.createElement(
                  'div',
                  { className: 'field' },
                  React.createElement('label', { className: 'label has-text-light' }, 'Nome'),
                  React.createElement(
                    'div',
                    { className: 'control' },
                    React.createElement('input', { className: 'input is-rounded', type: 'text', placeholder: 'Nome' })
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'field' },
                  React.createElement('label', { className: 'label has-text-light' }, 'Email'),
                  React.createElement(
                    'div',
                    { className: 'control' },
                    React.createElement('input', { className: 'input is-rounded', type: 'email', placeholder: 'Email' })
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'field' },
                  React.createElement('label', { className: 'label has-text-light' }, 'Telefone'),
                  React.createElement(
                    'div',
                    { className: 'control' },
                    React.createElement('input', { className: 'input is-rounded', type: 'tel', placeholder: 'Telefone' })
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'field' },
                  React.createElement('label', { className: 'label has-text-light' }, 'Mensagem'),
                  React.createElement(
                    'div',
                    { className: 'control' },
                    React.createElement('textarea', { className: 'textarea is-rounded', placeholder: 'Mensagem', rows: '4' })
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'field' },
                  React.createElement(
                    'div',
                    { className: 'control' },
                    React.createElement('button', { type: 'button', className: 'button is-success is-fullwidth is-rounded' }, 'Enviar')
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'column is-6' },
            React.createElement('iframe', {
              src: 'https://www.google.com/maps/embed/v1/place?key=SUA_CHAVE_API&q=Av.+Solar,+246,+São+Paulo,+SP,+Brazil&language=pt-BR',
              className: 'contact-map is-rounded',
              style: { width: '100%', height: '400px' },
              allowFullScreen: '',
              loading: 'lazy'
            }),
            React.createElement('p', { className: 'has-text-light is-size-6 mt-2' }, 'Endereço: Av. Solar, 246, São Paulo, SP'),
            React.createElement('p', { className: 'has-text-light is-size-6' }, 'Email: contato@ecosolares.com.br'),
            React.createElement('p', { className: 'has-text-light is-size-6' }, 'Telefone: (62) 3233-5678')
          )
        )
      )
    ),
    React.createElement(
      'footer',
      { className: 'footer has-background-black-ter' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'columns' },
          React.createElement(
            'div',
            { className: 'column is-4' },
            React.createElement('h3', { className: 'title is-5 has-text-light' }, 'ecosolares'),
            React.createElement(
              'svg',
              { className: 'logo-svg', style: { width: '30px', height: '30px' }, role: 'img', 'aria-label': 'logo ecosolares' },
              React.createElement('use', { xlinkHref: './logos.svg#lg-eco' })
            ),
            React.createElement('p', { className: 'has-text-light is-size-6 mt-2' }, '© 2025 Todos os direitos reservados.')
          ),
          React.createElement(
            'div',
            { className: 'column is-4' },
            React.createElement('h3', { className: 'title is-5 has-text-light' }, 'Links Rápidos'),
            React.createElement(
              'ul',
              null,
              ['home', 'sobre', 'contato'].map((item) =>
                React.createElement('li', { key: item }, React.createElement('a', { href: `#${item}`, className: 'has-text-light' }, item.charAt(0).toUpperCase() + item.slice(1)))
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'column is-4' },
            React.createElement('h3', { className: 'title is-5 has-text-light' }, 'Contato'),
            React.createElement('p', { className: 'has-text-light is-size-6' }, 'Email: contato@ecosolares.com.br'),
            React.createElement('p', { className: 'has-text-light is-size-6' }, 'Telefone: (62) 3233-5678'),
            React.createElement(
              'p',
              { className: 'has-text-light is-size-6' },
              'Redes: ',
              React.createElement('a', { href: 'https://x.com', className: 'has-text-warning' }, 'X'),
              ' | ',
              React.createElement('a', { href: 'https://t.me', className: 'has-text-warning' }, 'Telegram')
            )
          )
        )
      )
    )
  );
}

export default App;