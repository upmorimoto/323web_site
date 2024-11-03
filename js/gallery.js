document.addEventListener('DOMContentLoaded', function() {
  const closeImgSrc = 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png';
  const instaImgSrc = 'img/icon/instagram-logo-24.png';

  const cardDataList = [
        // 複数イメージSumple
    {
      id: 0,
      title: '',
      img: 'img/',
      description: '',
      link: 'https://www.instagram.com/wafuka0514/?igsh=bGNhN2Fxa2R1dXA2',
      imgSrcs: ['img/', 'img/', 'img/']
    },

      // 複数のカードデータのリスト
    {
      id: 1,
      title: 'ほんわか',
      img: 'img/',
      description: '',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/ippo2.jpg','img/', 'img/', 'img/']
    },
    {
      id: 2,
      title: 'Manacapua',
      img: 'img/Manacapua2.jpg',
      description: '魂の地図リーディング/インナーチャイルドセラピー<br>※魂の地図リーディング　20分2,000円<br>インナーチャイルドセラピー　3枚引20分2,000円、6枚引30分3,000円',
      link: 'https://www.instagram.com/manacapua.kirara/?igsh=MW1lM2VuZzE4ZHNvYg%3D%3D',
      imgSrcs: ['img/Manacapua2.jpg', 'img/manacapua.jpg']
    },
    {
      id: 3,
      title: 'AQUA~アクア~',
      img: 'img/',
      description: '',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/']
    },
    {
      id: 4,
      title: 'めぐみや',
      img: 'img/megumiya.jpg',
      description: '手作り雑貨を販売します',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/megumiya.jpg']
    },
    {
      id: 5,
      title: 'クレンズヨガ',
      img: 'img/',
      description: '　20分　2000円',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/', 'img/', 'img/']
    },
    {
      id: 6,
      title: '焼き菓子COCORAE',
      img: 'img/',
      description: '',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/']
    },
    {
      id: 7,
      title: 'スピリチュアルヒーリング',
      img: 'img/',
      description: '<br>料金20分¥2,000延長10分¥1,000',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/', 'img/', 'img/']
    },
    {
      id: 8,
      title: 'スピリチュアルリラクゼーション',
      img: 'img/',
      description: '　3枚引20分2,000円、6枚引30分3,000円',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/', 'img/']
    },
    {
      id: 9,
      title: 'HOKULEA SAND ART',
      img: 'img/',
      description: '',
      link: 'https://www.instagram.com/',
      imgSrcs: ['img/', 'img/']
    },
    {
      id: 10,
      title: 'ippo＆逸穂',
      img: 'img/ippo.jpg',
      description: '妖精が宿るヒンメリと藁書の販売します。<br>藁書体験うちわ仕上げ😊体験1,000円です。',
      link: 'https://www.instagram.com/ippo_7oco/?igsh=MWQ1a3liaWU4bmJwbA%3D%3D&utm_source=qr',
      imgSrcs: ['img/ippo2.jpg','img/ippo.jpg', 'img/ippo3.jpg', 'img/ippo4.jpg']
    },
    

    // 他のカードデータもここに追加
  ];

  // カード要素を取得
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    // カードごとのIDを取得
    const cardId = parseInt(card.getAttribute('data-id'), 10);

    // カードがクリックされたときの処理
    card.addEventListener('click', function() {
      // 対応するカードデータを取得
      const cardData = cardDataList.find(data => data.id === cardId);

      if (cardData) {
        // 既存のcard-open-wrapperを削除
        const existingWrapper = document.querySelector('.card-open-wrapper');
        if (existingWrapper) {
          document.body.removeChild(existingWrapper);
        }

        // card-open-wrapper 要素を作成
        const cardOpenWrapper = document.createElement('div');
        cardOpenWrapper.classList.add('card-open-wrapper');

        // wrap-img-container 要素を作成
        const wrapImgContainer = document.createElement('div');
        wrapImgContainer.classList.add('wrap-img-container');

        // prev ボタンを作成
        const prevButton = document.createElement('button');
        prevButton.classList.add('prev');
        prevButton.textContent = 'その他のお写真';

        // wrap-img 要素を作成
        const wrapImg = document.createElement('img');
        wrapImg.classList.add('wrap-img');
        wrapImg.src = cardData.imgSrcs[0];
        wrapImg.alt = '';

        // next ボタンを作成
        const nextButton = document.createElement('button');
        nextButton.classList.add('next');
        nextButton.textContent = '次の写真へ';

        wrapImgContainer.appendChild(prevButton);
        wrapImgContainer.appendChild(wrapImg);
        wrapImgContainer.appendChild(nextButton);

        // card-open 要素を作成
        const cardOpen = document.createElement('div');
        cardOpen.classList.add('card-open');

        // close ボタンを作成
        const closeButton = document.createElement('button');
        closeButton.classList.add('close');
        const closeImg = document.createElement('img');
        closeImg.src = closeImgSrc;
        closeImg.alt = '';
        closeButton.appendChild(closeImg);
        closeButton.addEventListener('click', function() {
          closeCardOpen(cardOpenWrapper);
        });

        // h3 タイトルを作成
        const titleElement = document.createElement('h3');
        titleElement.textContent = cardData.title;

        // p 説明文を作成
        const descriptionElement = document.createElement('p');
        // descriptionの改行を<br>に変更する
        const descriptionText = cardData.description.replace(/\n/g, '<br>');
        descriptionElement.innerHTML = descriptionText;

        // site ボタンを作成
        const siteButton = document.createElement('button');
        siteButton.classList.add('site');
        const siteLink = document.createElement('a');
        siteLink.href = cardData.link;
        siteLink.target = '_blank';
        siteLink.rel = 'noreferrer noopener';
        const instaImg = document.createElement('img');
        instaImg.classList.add('insta');
        instaImg.src = instaImgSrc;
        instaImg.alt = '';
        siteLink.appendChild(instaImg);
        const siteText = document.createElement('p');
        siteText.textContent = 'Instagram or SiteへGo!';
        siteLink.appendChild(siteText);
        siteButton.appendChild(siteLink);

        // card-open に要素を追加
        cardOpen.appendChild(closeButton);
        cardOpen.appendChild(titleElement);
        cardOpen.appendChild(descriptionElement);
        cardOpen.appendChild(siteButton);

        // card-open-wrapper に要素を追加
        cardOpenWrapper.appendChild(wrapImgContainer);
        cardOpenWrapper.appendChild(cardOpen);

        // body に card-open-wrapper を追加
        document.body.appendChild(cardOpenWrapper);

        // 詳細表示要素を表示
        setTimeout(function() {
          cardOpenWrapper.classList.add('active');
        }, 50); // 少し待ってから表示することでフェードイン効果を加える

        // スライドショー機能の実装
        let currentImageIndex = 0;

        function updateImage() {
          wrapImg.src = cardData.imgSrcs[currentImageIndex];
        }

        prevButton.addEventListener('click', function() {
          currentImageIndex = (currentImageIndex - 1 + cardData.imgSrcs.length) % cardData.imgSrcs.length;
          updateImage();
        });

        nextButton.addEventListener('click', function() {
          currentImageIndex = (currentImageIndex + 1) % cardData.imgSrcs.length;
          updateImage();
        });

        // card-open-wrapper の外側をクリックしたときに閉じるイベントリスナーを追加
        document.addEventListener('click', outsideClickListener);

        function outsideClickListener(event) {
          if (!cardOpenWrapper.contains(event.target) && !card.contains(event.target)) {
            closeCardOpen(cardOpenWrapper);
            document.removeEventListener('click', outsideClickListener);
          }
        }
      }
    });
  });

  // 詳細表示を閉じる関数
  function closeCardOpen(cardOpenWrapper) {
    cardOpenWrapper.classList.remove('active');
    setTimeout(function() {
      document.body.removeChild(cardOpenWrapper);
    }, 800); // フェードアウトの時間を考慮して遅延させる
  }
});