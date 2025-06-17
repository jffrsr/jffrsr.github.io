function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return React.createElement(
    'nav',
    { className: `navbar is-dark is-fixed-top ${isOpen ? 'is-active' : ''}` },
    React.createElement(
      'div',
      { className: 'navbar-brand is-flex is-align-items-center' },
      React.createElement(
        'a',
        { className: 'navbar-item', href: '#home' },
        React.createElement(
          'svg',
          { className: 'logo-svg', style: { width: '30px', height: '30px' }, role: 'img', 'aria-label': 'logo ecosolares' },
          React.createElement('use', { xlinkHref: './logos.svg#lg-eco' })
        ),
        React.createElement('span', { className: 'has-text-light is-size-5 ml-2' }, 'ecosolares')
      ),
      React.createElement(
        'div',
        {
          className: `navbar-burger ${isOpen ? 'is-active' : ''}`,
          onClick: () => setIsOpen(!isOpen),
          'data-target': 'navbarMenu',
          'aria-label': 'menu',
          'aria-expanded': isOpen
        },
        React.createElement('span', null),
        React.createElement('span', null),
        React.createElement('span', null)
      )
    ),
    React.createElement(
      'div',
      { id: 'navbarMenu', className: `navbar-menu ${isOpen ? 'is-active' : ''}` },
      React.createElement(
        'div',
        { className: 'navbar-start' },
        React.createElement(
          'a',
          { className: 'navbar-item has-text-light', href: '#home', onClick: () => setIsOpen(false) },
          'Home'
        ),
        React.createElement(
          'div',
          { className: `navbar-item has-dropdown ${isDropdownOpen ? 'is-active' : ''}`, onMouseEnter: () => setIsDropdownOpen(true), onMouseLeave: () => setIsDropdownOpen(false) },
          React.createElement(
            'a',
            { className: 'navbar-link has-text-light', href: '#sobre', onClick: () => setIsOpen(false) },
            'Sobre'
          ),
          React.createElement(
            'div',
            { className: 'navbar-dropdown is-dark' },
            ['serviços', 'marcas', 'testemunhos', 'galeria', 'financiamento'].map((item) =>
              React.createElement(
                'a',
                { key: item, href: `#sobre-${item}`, className: 'navbar-item has-text-light', onClick: () => { setIsOpen(false); setIsDropdownOpen(false); } },
                item.charAt(0).toUpperCase() + item.slice(1)
              )
            )
          )
        ),
        React.createElement(
          'a',
          { className: 'navbar-item has-text-light', href: '#contato', onClick: () => setIsOpen(false) },
          'Contato'
        )
      ),
      React.createElement(
        'div',
        { className: 'navbar-end' },
        React.createElement(
          'a',
          { className: 'navbar-item', href: 'https://x.com', target: '_blank', rel: 'noopener noreferrer' },
          React.createElement('i', { className: 'fab fa-x-twitter has-text-light' })
        ),
        React.createElement(
          'a',
          { className: 'navbar-item', href: 'https://t.me', target: '_blank', rel: 'noopener noreferrer' },
          React.createElement('i', { className: 'fab fa-telegram has-text-light' })
        )
      )
    )
  );
}

export default Header;