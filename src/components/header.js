import React from "react";
import { connect } from 'react-redux';
import '../App.css';
import { createBrowserHistory } from 'history';
import Cart from "../pages/cart";

class header extends React.Component {
    constructor(){
        super()
        this.state = ({visible : 'cartsnone'})
    }
       render() {
        const { countState } = this.props;
    const red = () => {
        if(this.state.visible === 'cartsnone'){
            this.setState({visible: 'cartsnoner'})
        }
        if(this.state.visible === 'cartsnoner'){
            this.setState({visible: 'cartsnone'})
        }
    }
        return (
            <header>
                <img className="logo" src="https://assets.toolzz.com.br/25202234/logo-instituicao/a1f866061c000e90d46459ebc0a3c8bd.png" alt="logo"></img>
                <h1 className="header-title">Potência tech</h1>
               
                <button className="cart" onClick={()=> red()}>
                    <div className="boxcart">
                <img className="cartImage" src="https://img.icons8.com/ios/50/null/shopping-cart--v1.png" alt="carrinho"/>
                    { countState }
                    </div>          
                    </button>    
                    <div className={this.state.visible}>
                    <Cart/>
                    </div>
            </header>
        );
    }

}

const mapStateToProps = (state) => ({
    countState: state.counter.count,
  });

export default connect(mapStateToProps)(header);