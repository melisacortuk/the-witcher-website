function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('video');
  trailer.classList.toggle('active')
  video.currentTime = 0;
  video.pause();
}

/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('.nav-list');
/*===== MENU SHOW ====*/
document.querySelector('.nav-toggle').onclick = () => {
  navMenu.classList.toggle('show-menu');
}
