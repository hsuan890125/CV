function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

// banner bg 在 ios 系統上的視差滾動效果
if (isIOS()) {
  const bannerImage = document.querySelector('.banner-image');
  bannerImage.style.cssText = `
    transform: translateY(0);
    transition: transform 0.001s ease-out;
  `;
  bannerImage.classList.remove('background-attachment');

  window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    bannerImage.style.transform = `translateY(${scrollY * 0.3}px)`;
  });
}
