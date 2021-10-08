import './style.css'
import iconFilter from "../../assets/icon-filter.svg"
import Table from '../tabela/tabela'





export default function Main({
  setFilterAberto,
  filterAberto,
  Filtro,
  Resumo,
  registros,
  setModalAberto,
  modalAberto
}) {


  return <div className="main">
    <div className="main__container">
      <button className="open-filters-button" onClick={() => setFilterAberto(!filterAberto)}>
        <img src={iconFilter} alt="" />
        Filter
      </button>
      <div className="main_top">
        <Filtro filterAberto={filterAberto}></Filtro>

        <Resumo
          filterAberto={filterAberto}
          setModalAberto={setModalAberto}
          modalAberto={modalAberto}
        ></Resumo>
      </div>
      <Table
        registros={registros}
      ></Table>
    </div>

  </div>
}