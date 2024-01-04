import React from 'react';
import { connect } from 'react-redux';
import { actionCreator, game, decrementGame, decre, limpar, limparClearn,finalizar } from '../redux/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../App.css';
import { Link } from 'react-router-dom';


class Cart extends React.Component {

  decrement = (a) => {
    const { dispatch, countState } = this.props;

    if (countState > 0) {
      dispatch(decrementGame(a));
    }
    dispatch(decre());
    toast.success(`O jogo ${a.name} foi removido do carrinho`);
  };

  
  increment = (a) => {
    const { dispatch } = this.props;
    toast.success(`O jogo ${a.name} foi adicionado no carrinho`);
    dispatch(actionCreator());
    dispatch(game(a));
  };
  clear = () => {
    toast.success('Carrinho limpo com sucesso');
    this.props.dispatch(limparClearn(this.props.gameState));
    this.props.dispatch(limpar(this.props.gameState));
  };
  finish = (a) => {
    this.props.dispatch(finalizar(a));
  }

  render() {
    const { gameState } = this.props;
    return (
      <div className='container'>
        <ToastContainer />
        <div className="App-cart">
          {Object.keys(gameState).map((key) => {
            const gameData = gameState[key];
            return (
              gameData.count > 0 && (
                <div className='inf-carr' key={key}>
                  <button className='butt' onClick={() => this.increment(gameData.data)}>+</button>
                  <p>{gameData.count}</p>
                  <p>{gameData.data.name}</p>
                  <p>R$ {(gameData.tot).toFixed(2)}</p>
                  <button className='butt' onClick={() => this.decrement(gameData.data)}>-</button>
                </div>
              )
            );
          })}
        </div>

        <div>
          {this.props.countState >= 0 ? (
            <h2> Total: R$ {(Object.values(gameState).reduce((total, game) => total + game.tot, 0)).toFixed(2)} </h2>
          ) : (
            <h2>Não há nada no carrinho</h2>
          )}
          <button className='butt space' onClick={this.clear}>Limpar Carrinho</button>
          <Link to='/pagamento'>
            <button className='butt space' onClick={() => { this.finish((Object.values(gameState).reduce((total, game) => total + game.tot, 0)).toFixed(2))  }}>Finalizar Compra</button>
            </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counter.count,
  gameState: state.games,
});

export default connect(mapStateToProps)(Cart);
