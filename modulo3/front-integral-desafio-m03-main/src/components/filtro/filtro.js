import './style.css'
import line from '../../assets/line.svg'
import closeButton from '../../assets/close-filter.svg'
const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

const categorias = ["Pix", "Boleto", "TED", "DOC", "Lazer", "Compras"]

export default function Filtro({ filterAberto }) {
  return (
    <div
      className="container-filters"
      style={filterAberto ? { display: "none" } : { display: 'flex' }}>

      <div className="filter_dia_da_semana">
        <h1>Dia da semana</h1>
        <div className="dias">
          {diasDaSemana.map(dia => {
            return <div className="dia">
              <button>{dia} <img key={dia} src={closeButton} alt="" /></button>
            </div>
          })}
        </div>
      </div>

      <img src={line} alt="" />
      <div className="filter_dia_da_semana">
        <h1>Categorias</h1>
        <div className="dias">
          {categorias.map(dia => {
            return <div className="dia">
              <button>{dia} <img src={closeButton} alt="" /></button>
            </div>
          })}
        </div>
      </div>


      <img src={line} alt="" />
      <div className="filter_inputs">
        <h1>Valor</h1>

        <div className="inputs">
          <div className="input">
            <label htmlFor="min">Min.</label>
            <input type="number" name="min" id="" />
          </div>


          <div className="input">
            <label htmlFor="max">Max.</label>
            <input type="number" name="max" id="" />
          </div>
        </div>

      </div>
      <div className="filter_botoes">
        <button className="clear">Limpar Filtros</button>
        <button className="apply">Aplicar Filtros</button>
      </div>
    </div>
  )
}