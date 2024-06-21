// Clickイベント
window.addEventListener('load', function () {
  const $button = document.querySelector('.toggle');
  const $menu = document.querySelector('.menu-list');
  $button.addEventListener('click', () => {
      if ($menu.classList.contains('show')) {
          $menu.classList.remove('show');
          $button.classList.remove('show');
      }
      else {
          $menu.classList.add('show');
          $button.classList.add('show');
      }
      
  });
});

// Smooth scroll 
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
       let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }


// Fade
const targets = document.getElementsByClassName('fade');
for(let i = targets.length; i--;){
 let observer = new IntersectionObserver((entries, observer) => {
  for(let j = entries.length; j--;){
   if (entries[j].isIntersecting) {
    entries[j].target.classList.add('active');
   } else{
    entries[j].target.classList.remove('active');
   }
  }
 });
 observer.observe(targets[i]);
}

  // Gallery クリックイベント

  document.addEventListener('DOMContentLoaded', function() {
    const cardDataList = [
      {
        id: 1,
        title: 'キッチン和福香',
        img: 'img/wafuka.jpg',
        description: '日替わり各種弁当700円　自家製米、無農薬野菜を使ったお弁当を販売♪',
        link: 'https://www.instagram.com/wafuka0514/?igsh=bGNhN2Fxa2R1dXA2',
        openImg: 'img/wafuka.jpg'
      },
      {
        id: 2,
        title: '他の店',
        img: 'img/another.jpg',
        description: '他の説明文',
        link: 'https://example.com',
        openImg: 'img/another.jpg'
      }
      // 他のカードデータもここに追加
    ];
  
    const cards = document.querySelectorAll('.card');
    const cardOpenWrapper = document.querySelector('.card-open-wrapper');
    const wrapImg = cardOpenWrapper.querySelector('.wrap-img');
    const cardOpenTitle = cardOpenWrapper.querySelector('h3');
    const cardOpenDescription = cardOpenWrapper.querySelector('p');
    const cardOpenLink = cardOpenWrapper.querySelector('.site a');
    const closeButton = cardOpenWrapper.querySelector('.close');
  
    cards.forEach(card => {
      card.addEventListener('click', function() {
        const cardId = parseInt(card.getAttribute('data-id'), 10);
        const cardData = cardDataList.find(data => data.id === cardId);
  
        if (cardData) {
          wrapImg.src = cardData.openImg;  // card-openの中の画像
          cardOpenTitle.textContent = cardData.title;
          cardOpenDescription.textContent = cardData.description;
          cardOpenLink.href = cardData.link;
  
          cardOpenWrapper.classList.add('active');
        }
      });
    });
  
    closeButton.addEventListener('click', function() {
      cardOpenWrapper.classList.remove('active');
    });
  });
  