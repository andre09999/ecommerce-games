import React from 'react';
import { connect } from 'react-redux';
import { game,decrementGame,decre } from '../redux/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import '../App.css';
;

class cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      games: this.props.gameState,
      count: this.props.countState
    });
  }
  async componentDidUpdate(){
    if(this.props.countState !== this.state.count){
      await  this.setState({
        games: this.props.gameState,
        count: this.props.countState
        
      })      
    }
    console.log(this.state.games.game312)
  }


  render( ){
  const { dispatch, countState } = this.props;
  const decrement = (a) => {
    this.setState({
      count: this.state.count - 1
    })
    toast.success(`O jogo ${a.name} foi removido do carrinho`)
    dispatch(decrementGame(a))
    dispatch(decre())
  }

  const increment = (a) => {
    this.setState({
      count: this.state.count + 1
    })
    toast.success(`O jogo ${a.name} foi adicionado no carrinho`)
    dispatch(game(a))
  }
  return (
    <div className='container'>
        <ToastContainer />
      <div className="App-cart">
        {this.state.games.game12?.count> 0 ?
        <div className='inf-carr'>
          <button className='butt' onClick={()=> increment(this.state.games.game12?.data)}>+</button>
         <p>{this.state.games.game12?.count}</p>
         <p>{this.state.games.game12?.data.name}</p>
         <p>R$ {(this.state.games.game12?.tot).toFixed(2)}</p>
         <button className='butt' onClick={()=>decrement(this.state.games.game12?.data)}>-</button>
         </div> : <div/>
        }
        {this.state.games.game312?.count > 0 ?
         <div className='inf-carr'>
           <button className='butt' onClick={()=> increment(this.state.games.game312?.data)}>+</button>
         <p>{this.state.games.game312?.count}</p>
         <p>{this.state.games.game312?.data.name}</p>
         <p>R$ {(this.state.games.game312?.tot).toFixed(2)}</p>
         <button className='butt' onClick={()=>decrement(this.state.games.game312?.data)}>-</button>
         </div>: <div/>

        }
        {this.state.games.game201?.count ? 
        <div className='inf-carr'>
           <button className='butt' onClick={()=> increment(this.state.games.game201?.data)}>+</button>
        <p>{this.state.games.game201?.count}</p>
        <p>{this.state.games.game201?.data.name}</p>
        <p>R$ {(this.state.games.game201?.tot).toFixed(2)}</p>
        <button className='butt' onClick={()=>decrement(this.state.games.game201?.data)}>-</button>
        </div>
        : 
        <div/>

        }
         
         {this.state.games.game501?.count > 0?
          <div className='inf-carr'>
             <button className='butt' onClick={()=> increment(this.state.games.game501?.data)}>+</button>
              <p>{this.state.games.game501?.count}</p>
              <p>{this.state.games.game501?.data.name}</p>
              <p>R$ {(this.state.games.game501?.tot).toFixed(2)}</p>
              <button className='butt' onClick={()=>decrement(this.state.games.game501?.data)}>-</button>
          </div> : <div/>

         }
         {this.state.games.game102?.count > 0 ?
          <div className='inf-carr'>
             <button className='butt' onClick={()=> increment(this.state.games.game102?.data)}>+</button>
         <p>{this.state.games.game102?.count}</p>
         <p>{this.state.games.game102?.data.name}</p>
         <p>R$ {(this.state.games.game102?.tot).toFixed(2)}</p>
         <button className='butt' onClick={()=>decrement(this.state.games.game102?.data)}>-</button>
         </div>:
         <div/>

         }
         {this.state.games.game99?.count > 0 ?
         <div className='inf-carr'>
           <button className='butt' onClick={()=> increment(this.state.games.game99?.data)}>+</button>
          <p>{this.state.games.game99?.count}</p>
         <p>{this.state.games.game99?.data.name}</p>
         <p>R$ {(this.state.games.game99?.tot).toFixed(2)}</p>
         <button className='butt' onClick={()=>decrement(this.state.games.game99?.data)}>-</button>
         </div>
  : <div/>

         }
         {this.state.games.game74?.count > 0 ? 
         <div className='inf-carr'>
           <button className='butt' onClick={()=> increment(this.state.games.game74?.data)}>+</button>
         <p>{this.state.games.game74?.count}</p>
         <p>{this.state.games.game74?.data.name}</p>
         <p>R$ {(this.state.games.game74?.tot).toFixed(2)}</p>
         <button className='butt' onClick={()=>decrement(this.state.games.game74?.data)}>-</button>

         </div>:
         <div/>

         }
         {this.state.games.game31?.count > 0 ?
         <div className='inf-carr'>
           <button className='butt' onClick={()=> increment(this.state.games.game31?.data)}>+</button>
         <p>{this.state.games.game31?.count}</p>
         <p>{this.state.games.game31?.data.name}</p>
         <p>R$ {(this.state.games.game31?.tot).toFixed(2)}</p>
         <button className='butt' onClick={()=>decrement(this.state.games.game31?.data)}>-</button>
         </div> : <div/>

         }
         {this.state.games.game420?.count > 0 ? 
         <div className='inf-carr'>
           <button className='butt' onClick={()=> increment(this.state.games.game420?.data)}>+</button>
         <p>{this.state.games.game420?.count}</p>
         <p>{this.state.games.game420?.data.name}</p>
         <p>R$ {(this.state.games.game420?.tot).toFixed(2)}</p>
         <button className='butt' onClick={()=>decrement(this.state.games.game420?.data)}>-</button>
         </div> :
        <div/>
         }
        </div>

        <div>
          { countState > 0 ?

     <h2> Total: R$  {( this.state.games.game420?.tot + this.state.games.game31?.tot +  this.state.games.game74?.tot +  this.state.games.game99?.tot + this.state.games.game102?.tot + this.state.games.game501?.tot + this.state.games.game201?.tot+  this.state.games.game312?.tot + this.state.games.game12?.tot).toFixed(2)} </h2>: <h2>Não há nada no carrinho</h2>
         }
        </div>
        </div>
  );
}
}
const mapStateToProps = (state) => ({
     countState: state.counter.count,
     gameState: state.games,
   });

export default connect(mapStateToProps)(cart);
