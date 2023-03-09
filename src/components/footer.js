import React from "react";
import { connect } from 'react-redux';
import '../App.css';

class footer extends React.Component {
    render() {
        return (
            <footer>
               <h2>Criado e desenvolvido por <a className="linkCreator" href="https://www.linkedin.com/in/dev-andre-front-end/"  target="_blank" rel="noreferrer">Andre Luis</a></h2>
            </footer>
        );
    }

}

const mapStateToProps = (state) => ({
    countState: state.count,
  });

export default connect(mapStateToProps)(footer);