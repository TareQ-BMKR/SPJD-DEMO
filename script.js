const swiper1 = new Swiper('.mySwiper1', {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: false,  // normal direction
  },
  speed: 3000,
  grabCursor: true,
  allowTouchMove: true,
    breakpoints: {
    0: { slidesPerView: 2 },      // phones
    480: { slidesPerView: 3 },    // small tablets
    768: { slidesPerView: 4 },    // tablets
    1024: { slidesPerView: 5 }    // desktops
  }
});

const swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,  // reverse direction
  },
  speed: 3000,
  grabCursor: true,
  allowTouchMove: true,
  breakpoints: {
    0: { slidesPerView: 2 },      // phones
    480: { slidesPerView: 3 },    // small tablets
    768: { slidesPerView: 4 },    // tablets
    1024: { slidesPerView: 5 }    // desktops
  }
});

function showsidebar(){
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display='flex';
}
function hideside(){
    const sidebar=document.querySelector('.sidebar');
  sidebar.style.display='none';
}
