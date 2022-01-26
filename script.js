let menuButton = document.querySelector('#menu-bar');
  let sideBar = document.querySelector('#sideBar');
  let overlay = document.querySelector('#overlay');
  let topBar = document.querySelector('#topBar');
  let closeMenu = document.querySelector('#close-menu');

  overlay.addEventListener('click', ()=>{
    // sideBar.classList.add('left-[-1000px]')
    // sideBar.classList.remove('left-0');
    overlay.classList.add('hidden');
    topBar.classList.add('hidden');
    console.log(1);
    
  });

  closeMenu.addEventListener('click', ()=>{
    // sideBar.classList.add('left-[-1000px]')
    // sideBar.classList.remove('left-0');
    overlay.classList.add('hidden');
    topBar.classList.add('hidden');
    console.log(1);
    
  });

  menuButton.addEventListener('click',()=>{
    // overlay.classList.remove('hidden');
    // sideBar.classList.add('left-0');
    // sideBar.classList.remove('left-[-1000px]');
    overlay.classList.remove('hidden');
    topBar.classList.remove('hidden');
    console.log(1);
  });
  //Swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });