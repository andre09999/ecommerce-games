import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

class CompraSimulacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      valor: '',
      dataVencimento: '',
    };
  }

 

  componentDidMount() {
    var dataAtual = new Date();
    var dia = String(dataAtual.getDate()).padStart(2, '0');
    var mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    var ano = dataAtual.getFullYear();

    var dataFormatada = dia + '/' + mes + '/' + ano;
    
    this.setState({
      dataVencimento: dataFormatada,
    });
  }
  render() {
    const { nome, dataVencimento } = this.state;
   const gerarBoleto = () => {
      const { dataVencimento } = this.state;
      toast.success(`Boleto Gerado para data:, ${ dataVencimento }`);
    };
    return (
      <div className='pagcompra'>
        <h1>Compra</h1>
        <label className='label'>
          Nome:
          <input className='inputs' type="text" value={nome} onChange={(e) => this.setState({ nome: e.target.value })} />
        </label>
        <br />
        <label className='label'>
          Valor:
          <input type="text" className='value inputs' value={Number(this.props.totReducer)} disabled />
        </label>
        <br />
        <label className='label'>
          Data de Vencimento:
          <input className='value inputs' disabled type="text" value={dataVencimento} readOnly />
        </label>
        <br />
        <div className='buts'>    
        <Link to='/'>
            <button className='butt space' onClick={() => { }}>Voltar pagina inicial</button>
            </Link>
        <Link to='/agradecimento'>
        <button className='butt space'  onClick={()=>gerarBoleto()}>Gerar Boleto</button>
            </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  totReducer: state.compra.tot,
});

export default connect(mapStateToProps)(CompraSimulacao);
