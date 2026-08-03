// template_fodbta9
// service_ok2u9az
// to3dd1XMrMf94YGxy

let isModalOpen =false;
let contrastToggle = false;


function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
     document.body.classList += " dark-theme"
  } else {
    document.body.classList.remove("dark-theme")
  }
}



function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
      const success = document.querySelector('.modal__overlay--success')
      loading.classList += " modal__overlay--visible";


     emailjs
     .sendForm(
      'service_ok2u9az',
     'template_fodbta9',
      event.target,
       'to3dd1XMrMf94YGxy'
      ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on email@email.com"
        );
      });
             
    }

    let isModalOpen = false;
    function toggleModal() {
        if (isModalOpen) {
          isModalOpen = false;
        return document.body.classList.remove("modal--open");
      }
       isModalOpen = true;
       // toggle modal
      document.body.classList += " modal--open";
    }