import ana from './assets/anna-bia.png'
import charles from './assets/charles-santos.png'
import kelvin from './assets/kelvin-costa.png'
import mario from './assets/mario-hisashi.png'

function Card(props) {
  const [icon, nome, insta, seguidores, seguindo] = props.children
  return <div className="card">
    <img className='card__image' src={icon} alt="" />
    <h1 className='card__name'>{nome}</h1>
    <span className='card__insta'>@{insta}</span>
    <span className='card__seguidores'>{seguidores} seguidores</span>
    <span className='card__seguindo'>{seguindo} seguindo</span>
  </div>

}

function App() {
  return (
    <div className="App">
      <Card>
        {kelvin}
        {`Kelvin Costa`}
        {`costa`}
        {`140`}
        {`207`}
      </Card>
      <Card>
        {charles}
        {`Charles Santos`}
        {`charles.santos`}
        {`303`}
        {`419`}
      </Card>
      <Card>
        {ana}
        {`Anna Bia`}
        {`anab`}
        {`842`}
        {`150`}
      </Card>
      <Card>
        {mario}
        {`Mario Hisashi`}
        {`hisashi`}
        {`28`}
        {`17`}
      </Card>
    </div>
  );
}

export default App;
