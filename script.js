
// Load new files

function load_new_page(page) {

  switch (page) {
    case 1:
      window.location.href = "index.html"
      break;
    case 2:
      window.location.href = "Biografia.html"
      break;
    case 3:
      window.location.href = "Galeria.html"
      break;
    case 4:
      window.location.href = "LinhadoTempo.html"
      break;
    default:
      console.log("page goes 404");
  }
}

// ANIMAÇÃO DA GALERIA –>
function exibe(texto) {
  if (texto === 'text_photo_3')
    document.getElementById(texto).innerHTML = '<p class="text_photos" id="text_photo_3"> As Margaridas de Mário <br> 1922</p>';

  if (texto === 'text_photo_4')
    document.getElementById(texto).innerHTML = '<p class="text_photos" id="text_photo_4"> La Chambre Bleue <br> 1925 </p>';

  if (texto === 'text_photo_5')
    document.getElementById(texto).innerHTML = '<p class="text_photos" id="text_photo_5"> Veneza, Canaletoz <br> 1924</p>';
}

function esconde(texto) {
  if (texto === 'text_photo_3')
    document.getElementById(texto).innerHTML = '<p id="text_photo_3"> </p>';

  if (texto === 'text_photo_4')
    document.getElementById(texto).innerHTML = '<p id="text_photo_4"> </p>';

  if (texto === 'text_photo_5')
    document.getElementById(texto).innerHTML = '<p id="text_photo_5"> </p>';
}


// CAUROSEL–>
// const horizontalScroll = document.querySelector("#horizontal-scroll-wrapper");
// let isDown = false,
//   startX = 0,
//   scrollLeft = 0;

// const handleMouseDown = (e) => {
//   if (!horizontalScroll) return;
//   horizontalScroll.classList.add("--is-grabbing");
//   isDown = true;
//   startX = e.pageX - horizontalScroll.offsetLeft;
//   scrollLeft = horizontalScroll.scrollLeft;
// };

// const handleMouseLeave = () => {
//   horizontalScroll.classList.remove("--is-grabbing");
//   isDown = false;
// };

// const handleMouseUp = () => {
//   horizontalScroll.classList.remove("--is-grabbing");
//   isDown = false;
// };

// const handleMouseMove = (e) => {
//   if (!isDown || !horizontalScroll) return;

//   e.preventDefault();
//   const x = e.pageX - horizontalScroll.offsetLeft;
//   const walk = x - startX;
//   horizontalScroll.scrollLeft = scrollLeft - walk;
// };

// horizontalScroll.addEventListener("mousedown", handleMouseDown);
// horizontalScroll.addEventListener("mouseleave", handleMouseLeave);
// horizontalScroll.addEventListener("mouseup", handleMouseUp);
// horizontalScroll.addEventListener("mousemove", handleMouseMove);

// // NAV BAR HOOVER–>
// (function() {

//   const hoover = document.querySelector(".hoover");
//   const links = document.querySelectorAll(".navbar .menu ");
//   const colors = ["#D49634"];

//   function mouseenterFunc() {
//     if (!this.parentNode.classList.contains("active")) {
//       for (let i = 0; i < links.length; i++) {
//         if (links[i].parentNode.classList.contains("active")) {
//           links[i].parentNode.classList.remove("active");
//         }
//         links[i].style.opacity = "0.25";
//       }

//       this.parentNode.classList.add("active");
//       this.style.opacity = "1";

//       const width = this.getBoundingClientRect().width;
//       const height = this.getBoundingClientRect().height;
//       const left = this.getBoundingClientRect().left + window.pageXOffset;
//       const top = this.getBoundingClientRect().top + window.pageYOffset;
//       const color = colors[Math.floor(Math.random() * colors.length)];

//       hoover.style.width = `${width}px`;
//       hoover.style.height = `${height}px`;
//       hoover.style.left = `${left}px`;
//       hoover.style.top = `${top}px`;
//       hoover.style.borderColor = color;
//       hoover.style.transform = "none";
//     }
//   }

//   for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", (e) => e.preventDefault());
//     links[i].addEventListener("mouseenter", mouseenterFunc);
//   }

//   function resizeFunc() {
//     const active = document.querySelector(".mynav li.active");

//     if (active) {
//       const left = active.getBoundingClientRect().left + window.pageXOffset;
//       const top = active.getBoundingClientRect().top + window.pageYOffset;

//       hoover.style.left = `${left}px`;
//       hoover.style.top = `${top}px`;
//     }
//   }

//   window.addEventListener("resize", resizeFunc);

// })();