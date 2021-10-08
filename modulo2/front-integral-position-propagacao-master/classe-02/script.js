const btn = document.querySelector('.btn')
const modal = document.querySelector('.modal')


btn.addEventListener('click', () => {

  if (modal.style.display == 'none') {
    modal.style.display = 'block'
  } else {
    modal.style.display = 'none'
  }
})