import { useState } from 'react'

import image1 from './assets/gallery/image 1.png'
import image2 from './assets/gallery/image 2.png'
import image3 from './assets/gallery/image 3.png'
import image4 from './assets/gallery/image 4.png'
import image5 from './assets/gallery/image 5.png'
import image6 from './assets/gallery/image 6.png'
import image7 from './assets/gallery/image 7.png'
import image8 from './assets/gallery/image 8.png'
import image9 from './assets/gallery/image 9.png'
import image10 from './assets/gallery/image 10.png'


import closedMenu from './assets/closed-menu.svg'
import closeModal from './assets/close-modal.svg'
import openMenu from './assets/open-menu.svg'
import home from './assets/active-home.svg'
import like from './assets/inactive-like.svg'
import liked from './assets/like.svg'
import setting from './assets/inactive-settings.svg'

const arrayImages = [
  { image: image1, isLiked: false, key: Math.random() },
  { image: image2, isLiked: false, key: Math.random() },
  { image: image3, isLiked: false, key: Math.random() },
  { image: image4, isLiked: false, key: Math.random() },
  { image: image5, isLiked: false, key: Math.random() },
  { image: image6, isLiked: false, key: Math.random() },
  { image: image7, isLiked: false, key: Math.random() },
  { image: image8, isLiked: false, key: Math.random() },
  { image: image9, isLiked: false, key: Math.random() },
  { image: image10, isLiked: false, key: Math.random() }
]

function App() {
  const [sideMenuState, setSideMenuState] = useState('fechado')
  const [photoModal, setphotoModal] = useState({})
  const [modalAberto, setModalAberto] = useState(false)
  const [images, setImages] = useState(arrayImages)


  function handleMenu() {
    setSideMenuState(sideMenuState === 'aberto' ? 'fechado' : 'aberto')
  }
  function handleModal(event) {
    setModalAberto(!modalAberto)
    const imagesCopy = images.slice()

    const fotoFinder = imagesCopy.find(x => {
      return x.key === Number(event.target.parentElement.id)
    })

    fotoFinder && setphotoModal({ image: fotoFinder.image, isLiked: fotoFinder.isLiked, id: fotoFinder.key })




  }
  function handleDblclick(event) {
    const imagesCopy = images.slice()
    let indice = 0

    const novaImagem = images.find((x, i) => {
      if (Number(event.target.parentElement.id) === x.key) indice = i
      return Number(event.target.parentElement.id) === x.key
    })

    novaImagem.isLiked = !novaImagem.isLiked
    imagesCopy.splice(indice, 1, novaImagem)
    setImages(imagesCopy)
  }
  function ItemGallery(props) {
    return (
      <div className="item" id={props.id}>

        <img src={props.children} onClick={handleModal} alt="" className="item__image" />
        <img src={props.liked} onDoubleClick={handleDblclick} className="item__like" alt="" />
        <div className="item__image__info">
          <span className="item__image__info_description">Lorem Impsum</span>
          <span className="item__image__info_time">há 1 mês atrás</span>
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      <div className={`side_menu ${sideMenuState}`}>
        <img src={sideMenuState === 'aberto' ? openMenu : closedMenu} onClick={handleMenu} className="side_menu__hamburguer" alt="" />

        <div className="side_menu__home">
          <img src={home} className="" alt="" />
          <span style={sideMenuState === 'aberto' ? { display: 'inline', marginLeft: '20px' } : {}}>inicio</span>
        </div>

        <div className="side_menu__like">
          <img src={like} alt="" />
          <span style={sideMenuState === 'aberto' ? { display: 'inline', marginLeft: '20px' } : {}}>favoritos</span>
        </div>

        <div className="side_menu__setting">
          <img src={setting} alt="" />
          <span style={sideMenuState === 'aberto' ? { display: 'inline', marginLeft: '20px' } : {}}>Configurações</span>
        </div>

      </div>
      <div className="main">
        <h1 className="main__title">Início</h1>
        <div className="main__gallery">
          {images.map(x => {
            return <ItemGallery key={x.key} id={x.key} liked={x.isLiked === true ? liked : like}>
              {x.image}
            </ItemGallery>
          })}

        </div>
      </div>

      <div className="modal" style={modalAberto === true ? { display: 'flex' } : { display: 'none' }}>
        <img src={closeModal} className="modal__close" onClick={handleModal} alt="" />
        <img src={photoModal.isLiked === true ? liked : like} className="modal__like" alt="" />
        <img src={photoModal.image} className="modal__image" onClick={handleModal} alt="" />
      </div>
    </div >
  );
}

export default App;
