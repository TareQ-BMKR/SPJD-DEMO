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
  allowTouchMove: true
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
  allowTouchMove: true
});

function showsidebar(){
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display='flex';
}
function hideside(){
    const sidebar=document.querySelector('.sidebar');
  sidebar.style.display='none';
}
