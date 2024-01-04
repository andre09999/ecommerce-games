import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import PaginaAgradecimento from './pages/final';  
import compra from './pages/simulacaoCompra';  

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='appHtml'>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/agradecimento' component={PaginaAgradecimento} />
            <Route path='/pagamento' component={compra} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
});

export default connect(mapStateToProps)(App);
