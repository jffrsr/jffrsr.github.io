import App from './App.js';

document.addEventListener('DOMContentLoaded', () => {
  try {
    // Verificar carregamento do estilo.css
    const cssLink = document.querySelector('link[href="estilo.css"]');
    if (!cssLink) {
      console.warn('estilo.css não encontrado no <head>');
    } else {
      console.log('estilo.css carregado com sucesso');
    }

    if (typeof React === 'undefined') {
      throw new Error('React não está definido. Verifique se o script React foi carregado.');
    }
    if (typeof ReactDOM === 'undefined') {
      throw new Error('ReactDOM não está definido. Verifique se o script ReactDOM foi carregado.');
    }
    if (typeof Swiper === 'undefined') {
      throw new Error('Swiper não está definido. Verifique se o script Swiper foi carregado.');
    }

    const rootElement = document.getElementById('root');
    if (!rootElement) {
      throw new Error('Elemento #root não encontrado no DOM');
    }
    ReactDOM.render(React.createElement(App), rootElement);
    console.log('Aplicação renderizada com sucesso');
  } catch (error) {
    console.error('Erro ao renderizar o app:', error);
    const errorElement = document.getElementById('error');
    if (errorElement) {
      errorElement.innerHTML = `<h1>Erro: ${error.message}</h1><p>Verifique o console para mais detalhes.</p>`;
    }
  }
});