import { useState } from 'react'
import { format } from 'date-fns';
import formatPt from 'date-fns/locale/pt';
import './style.css'
import lixeira from '../../assets/lixeira.svg'
import lapis from '../../assets/lapis.svg'



export default function Table({ registros }) {

  const [modalExcluir, setModalExcluir] = useState(false)

  // function handleClick(e) {
  //   console.log(e)

  //   setModalExcluir(!modalExcluir)
  // }
  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          <th className="column-title" id="date">Data</th>
          <th className="column-title" id="week-day">Dia da Semana</th>
          <th className="column-title">Descrição</th>
          <th className="column-title">Categoria</th>
          <th className="column-title" id="value">Valor</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="table-body">

        {registros.map(registro => {
          const date = format(registro.data, 'P', {
            locale: formatPt
          })

          let day = registro.data.getDay() + 1
          if (day === 1) day = 'Domingo'
          if (day === 2) day = 'Segunda'
          if (day === 3) day = 'Terça'
          if (day === 4) day = 'Quarta'
          if (day === 5) day = 'Quinta'
          if (day === 6) day = 'Sexta'
          if (day === 7) day = 'Sábado'
          const valor = String(registro.valor / 100).replace(".", ",")
          return <tr className="table-line" key={registro.id}>
            <td className="data">{String(date)}</td>
            <td className="dia">{day}</td>
            <td className="descricao">{registro.descricao}</td>
            <td className="categoria">{registro.categoria}</td>
            <td className="valor">R${valor}</td>
            <td className="icons">
              <img className="lapis" src={lapis} alt="" />
              <img className="lixeira" src={lixeira} id={registro.id} alt="" onClick={() => setModalExcluir(!modalExcluir)} />
              {modalExcluir && <div className="container-confirm-delete">
                <h3>Apagar Item</h3>
                <div className="buttons">

                  <button className="btn-actions-confirm-delete">Sim</button>
                  <button className="btn-actions-no-confirm-delete" onClick={() => setModalExcluir(!modalExcluir)}>Não</button>
                </div>
              </div>}
            </td>
          </tr>
        })}

      </tbody>
    </table>
  )

}
