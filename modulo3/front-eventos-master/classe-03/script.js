


const page = {
  btnInscrever: document.querySelector('.btn'),
  modal: document.querySelector('.modal'),
  modalBtn: document.querySelectorAll('.modal button'),
  btnModalSim: document.querySelector('.confirmar'),
  btnModalNao: document.querySelector('.cancelar')
};



page.btnInscrever.addEventListener('click', function () {

  if (page.btnInscrever.classList.contains('inscrito')) {
    page.modal.classList.remove('escondido')
  } else {
    page.btnInscrever.classList.add('inscrito')
    page.btnInscrever.textContent = 'INSCRITO'
  }
})

page.modalBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    page.modal.classList.add('escondido')
  })
})

page.btnModalSim.addEventListener('click', function () {
  page.btnInscrever.classList.remove('inscrito')
  page.btnInscrever.textContent = 'INSCREVER-SE'
})