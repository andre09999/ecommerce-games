import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Agradecimento extends React.Component {
  render() {
    const { gameState } = this.props;
 
    const getValidNames = () => {
      const validNames = Object.keys(gameState)
        .map((key) => {
          const gameData = gameState[key];
          return gameData.count > 0 && gameData.data.name;
        })
        .filter(Boolean);

      return validNames.join(', ');
    };

    const validNames = getValidNames();
    return (
      <div className='agradece'>
        <h1>Agradecemos por sua compra!</h1>
        <p>Prezado Cliente,</p>
        <p>Gostaríamos de expressar nossa sincera gratidão por escolher comprar o jogo ,{validNames}. É uma honra tê-lo como nosso valioso cliente, e esperamos que a sua experiência de jogo seja tão emocionante quanto imaginamos.</p>
        <p>Aqui na GameZone, dedicamos esforços para criar experiências envolventes e memoráveis. Estamos confiantes de que você apreciará cada momento de diversão, desafio e descoberta que o nosso jogo proporciona.</p>
        <p>Ao comprar o {validNames}, você não apenas adquire um produto, mas se torna parte da nossa comunidade de jogadores entusiastas. Agradecemos por fazer parte dessa jornada e esperamos que o jogo traga muitas horas de entretenimento e satisfação.</p>
        <p>Se surgir alguma dúvida ou se precisar de suporte, nossa equipe estará sempre disponível para ajudar. Valorizamos a sua confiança em nós e estamos comprometidos em oferecer um suporte excepcional ao cliente.</p>
        <p>Mais uma vez, obrigado por escolher a GameZone. Desejamos a você momentos incríveis de diversão e aventura no universo do {validNames}.</p>
        <p>Atenciosamente,</p>
        <p>GameZone</p>
        <Link to='/'>
            <button className='butt space' onClick={() => { }}>Voltar pagina inicial</button>
            </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counter.count,
  gameState: state.games,
});

export default connect(mapStateToProps)(Agradecimento);
