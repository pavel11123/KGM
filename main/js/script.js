function menu__open() {
   document.getElementById("phone__menu-id").style.width = "100%";
   document.getElementById("phone__menu-id-body").style.overflow = "hidden";
}

function menu__close() {
   document.getElementById("phone__menu-id").style.width = "0";
   document.getElementById("phone__menu-id-body").style.overflow = "visible";
}

const popup = () => {
   const popupBtn = document.getElementById('popup')
   const popupModal = document.querySelector('.popup')

   const cartCloseBtn = popupModal.querySelector('.cart-close')

   const openPopup = () => {
      popupModal.style.display = 'flex'
      //popupModal.style.visibility = 'visible'
   }

   const closePopup = () => {
      popupModal.style.display = 'none'
      // popupModal.style.visibility = 'hidden'
   }

   popupBtn.addEventListener('click', openPopup)
   cartCloseBtn.addEventListener('click', closePopup)

}

popup()
