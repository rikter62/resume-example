
const cardInfoIcon = document.querySelectorAll(".card .fa-info-circle");
const modalCardInfo = document.querySelectorAll(".card--more-info");
const modalCardInfoOthers = document.querySelectorAll(".card--list li");

function handlePhotoClick(event) {
  if(event.type === 'click' || event.key === "Enter" || event.keyCode === 32){
    const button = event.currentTarget;
    const cardParent = button.closest('li');
  
    // show the modal
    if(cardParent.classList.contains("open") === true ) {
      cardParent.classList.remove("open");
    }
    else {
      cardParent.classList.add("open");
    }
    event.preventDefault();
  }
};




cardInfoIcon.forEach((button) =>
  button.addEventListener("click", handlePhotoClick)
);
cardInfoIcon.forEach((button) =>
  button.addEventListener("keydown", handlePhotoClick)
);

modalCardInfo.forEach((button) =>
  button.addEventListener("click", handlePhotoClick)
);
modalCardInfo.forEach((button) =>
  button.addEventListener("keydown", handlePhotoClick)
);


function closeModal() {
  
  const modalOverlay = document.querySelectorAll(".card--list-item");

  [].forEach.call(modalOverlay, el => {
      el.classList.remove('open');
  });
  // hide the modal
}

window.addEventListener("keydown", (event) => {
 
  if (event.key === "Escape") {
    closeModal();
  }
});
const checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}