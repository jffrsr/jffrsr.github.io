function SolarCalculator() {
  const [kWh, setKWh] = React.useState('');
  const [result, setResult] = React.useState(null);

  const calculate = () => {
    try {
      const kWhValue = parseFloat(kWh);
      if (kWhValue > 0) {
        const kWp = (kWhValue / 130).toFixed(2);
        const cost = (kWp * 5000).toFixed(2);
        setResult({ kWp, cost });
      } else {
        alert('Insira um valor válido maior que zero!');
      }
    } catch (error) {
      console.error('Erro na calculadora:', error);
      alert('Ocorreu um erro ao calcular. Tente novamente.');
    }
  };

  return React.createElement(
    'section',
    { className: 'section has-background-black-bis' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement('h2', { className: 'title is-3 has-text-primary has-text-centered' }, 'Calcule Sua Economia'),
      React.createElement(
        'div',
        { className: 'card has-background-grey-darker p-5 is-rounded' },
        React.createElement(
          'div',
          { className: 'card-content' },
          React.createElement(
            'div',
            { className: 'field' },
            React.createElement('label', { className: 'label has-text-light' }, 'Consumo mensal (kWh)'),
            React.createElement(
              'div',
              { className: 'control' },
              React.createElement('input', {
                type: 'number',
                value: kWh,
                onChange: (e) => setKWh(e.target.value),
                placeholder: 'Ex.: 300',
                className: 'input is-rounded no-spinners'
              })
            )
          ),
          React.createElement(
            'div',
            { className: 'field' },
            React.createElement(
              'div',
              { className: 'control' },
              React.createElement(
                'button',
                { onClick: calculate, className: 'button is-success is-fullwidth is-rounded' },
                'Calcular'
              )
            )
          ),
          result && React.createElement(
            'div',
            { className: 'notification is-dark mt-4' },
            React.createElement('p', { className: 'has-text-light' }, `Potência necessária: ${result.kWp} kWp`),
            React.createElement('p', { className: 'has-text-light' }, `Custo estimado: R$${result.cost}`)
          )
        )
      )
    )
  );
}

export default SolarCalculator;