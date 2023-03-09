import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/header'
import Footer from './components/footer';
import Home from './pages/home'


class App extends React.Component {
render( ){
  
  return (
    <div className='appHtml' >   
            <Header />
            <Home/>        
            <Footer/>
      </div>
  );
}
}
const mapStateToProps = (state) => ({
     countState: state.count,
   });

export default connect(mapStateToProps)(App);
