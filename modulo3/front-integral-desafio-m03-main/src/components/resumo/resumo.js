import './style.css'
import Modal from '../modal/modal'
const entrada = 200
const saida = 500
const balanco = entrada - saida
export default function Resumo({ filterAberto, setModalAberto, modalAberto }) {

  function handleAbrirModal(e) {
    const modal = modalAberto
    setModalAberto({ ...modal, estado: !modal.estado, type: e.target.value })
  }
  return (
    <div className="container-resume" style={filterAberto ? {
      position: 'absolute',
      left: 950
    } : {}}>
      <div className="values">
        <h1>Resumo</h1>
        <div className="entrada">
          <span className='in'>Entradas</span>
          <span className="valor">{entrada}</span>
        </div>

        <div className="saida">
          <span className='out'>Saida</span>
          <span className="valor">{saida}</span>
        </div>

        <div className="balance">
          <span>Saldo</span>
          <span className="valor">{balanco}</span>
        </div>
      </div>
      <button className="btn-add" value="Adicionar" onClick={handleAbrirModal}>Adicionar Registro</button>
      {modalAberto && <Modal></Modal>}
    </div>

  )
}