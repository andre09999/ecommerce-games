import React from "react";
import { connect } from 'react-redux';
import '../App.css';
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
                <img className="logoSupera" src="https://thumbs.dreamstime.com/b/retro-game-neon-sign-video-games-night-light-symbol-glowing-gamer-poster-gaming-club-banner-vector-flyer-icon-142115217.jpg" alt="logo"></img>
                <h1 className="header-title">GameZone</h1>
               
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