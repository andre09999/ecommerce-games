import React from 'react';
import { connect } from 'react-redux';
import { actionCreator,game } from '../redux/actions';
import inform from '../data/products.json'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import '../App.css';

class hpme extends React.Component {
  constructor(){
    super()
    this.state = ({showmessage: false})
  }
  render( ){
  const { dispatch } = this.props;
  const dates = (a) => {
    dispatch( actionCreator() )
     dispatch( game(a))
  }
  const message = async (a) => {
   await this.setState({showmessage: true})
    setTimeout(async () => {
     await this.setState({showmessage: !this.state.showmessage})
     if(this.state.showmessage === false){
      return
    }
    }, 1000);
   
   await toast.success(`O jogo ${a.name} foi adicionado com sucesso no carrinho`)   
  }

  return (
      <div className="App">
         <ToastContainer />
          {
            inform.map((a) => (
              <div key={a.id} className='box'>
                <h2 className='nameGame'>{a.name}</h2>
                <img className='cards' src={require(`../images/${a.image}`)} alt='Imagem jogo'/>
                <button className='but' disabled={this.state.showmessage} onClick={() => {
                  
                  dates(a)
                  message(a)   
                } }>Add Cart R$ {a.price.toFixed(2)}</button>
                
              </div>
            ))
          }
        </div>
  );
}
}
const mapStateToProps = (state) => ({
     countState: state.counter,
     counterGames: state.counterGames,
   });

export default connect(mapStateToProps)(hpme);
