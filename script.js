// 스크롤 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll('.section-fade');
  
  // 처음 로드 시 첫 번째 섹션(Hero)은 즉시 보이게 처리
  setTimeout(() => {
    if (fadeElements.length > 0) {
      fadeElements[0].classList.add('visible');
    }
  }, 100);
  
  // 스크롤 이벤트 처리 함수
  function checkFade() {
    const triggerBottom = window.innerHeight * 0.8;
    
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < triggerBottom) {
        element.classList.add('visible');
      }
    });
  }
  
  // 초기 확인
  checkFade();
  
  // 스크롤 이벤트 리스너
  window.addEventListener('scroll', checkFade);
});

// 헤더 위치 조정 함수
function adjustHeaderPosition() {
  const banner = document.querySelector('.beta-banner');
  const header = document.querySelector('header');
  if (banner && header) {
    const bannerHeight = banner.offsetHeight;
    header.style.top = `${bannerHeight}px`;
  }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', adjustHeaderPosition);

// 윈도우 리사이즈 시 실행
window.addEventListener('resize', adjustHeaderPosition);