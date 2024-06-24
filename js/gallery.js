document.addEventListener('DOMContentLoaded', function() {
  const closeImgSrc = 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png';
  const instaImgSrc = 'img/icon/instagram-logo-24.png';

  const cardDataList = [
        // 複数イメージSumple
    // {
    //   id: 0,
    //   title: '',
    //   img: 'img/',
    //   description: '',
    //   link: 'https://www.instagram.com/wafuka0514/?igsh=bGNhN2Fxa2R1dXA2',
    //   imgSrcs: ['img/', 'img/', 'img/']
    // },

      // 複数のカードデータのリスト
        {
      id: 2,
      title: 'ippo＆逸穂',
      img: 'img/ippo.jpg',
      description: '妖精が宿るヒンメリと藁書の販売します。ヒンメリか藁書ワークショップ致します。<br>どちらかは当日のお楽しみに😊体験1,000円です。',
      link: 'https://www.instagram.com/ippo_7oco/?igsh=MWQ1a3liaWU4bmJwbA%3D%3D&utm_source=qr',
      imgSrcs: ['img/ippo2.jpg', 'img/ippo.jpg']
    },

    // {
    //   id: 2,
    //   imgSrc: 'img/ippo.jpg',
    //   closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
    //   title: 'ippo',
    //   description: '暮らしの動線づくりをしながら癒しのグッズを販売！お掃除グッズ／ヒンメリ／藁書の販売。藁書体験（うちわ仕上げ）1,000円',
    //   link: 'https://www.instagram.com/ippo_7oco/?igsh=MWQ1a3liaWU4bmJwbA%3D%3D&utm_source=qr',
    //   instaImgSrc: 'img/icon/another-logo.png'
    // },
    {
      id: 3,
      imgSrc: 'img/souju714.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: '颯樹~soujyu~',
      description: 'ハンドメイドアクセサリー、天然石、雑貨、プリザーブドフラワー、販売ワークショップ幸せのお手伝いが出来ますようにあなただけの1点を探してください',
      link: 'https://www.instagram.com/soujyu_3/?igsh=eXZlenFob2pub2Qz',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 4,
      imgSrc: 'img/cosmespace714.2.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'コスメスペース',
      description: 'これからの季節におすすめのスキンケアやコスメをご紹介♪お肌診断やポイントメイク、ハンドマッサージなど楽しいコーナーもございます!ミニサンプルプレゼント♪',
      link: '',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 5,
      imgSrc: 'img/reisuigaku2.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: ' 令翠学鑑定士 白明光令翠(ﾚｲｽｲｶﾞｸｶﾝﾃｲｼ ﾊｸﾒｲｺｳﾚｲｽｲ)',
      description: '令翠学ワンポイント鑑定　20分　2000円',
      link: 'https://www.instagram.com/hakumeikoreisui?igsh=bTd5Z3V1MG5wNHhj&utm_source=qr',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 6,
      imgSrc: 'img/megumiya.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'めぐみや',
      description: '手作り雑貨を販売します',
      link: '',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 7,
      imgSrc: 'img/hanamizuki1.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'はなみずき',
      description: '困っていることはありませんか？どうすれば良いのかお話を聞きながら一緒に悩み事を解決できるようお手伝いします。料金20分¥2,000延長10分¥1,000',
      link: 'https://www.instagram.com/mibyoshidan_yosshi/?igsh=dDVnNGR6bWhwcHRj',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 8,
      imgSrc: 'img/Manacapua3.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'Manacapua',
      description: 'インナーチャイルドセラピー。気づくことのなかった自分の本当の気持ちを知って自分の力で海運していこう。20分3枚引き2,000円／30分6枚引き3,000円',
      link: 'https://www.instagram.com/manacapua.kirara/?igsh=MW1lM2VuZzE4ZHNvYg%3D%3D',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 9,
      title: '',
      img: 'img/',
      description: '',
      link: 'https://www.instagram.com/wafuka0514/?igsh=bGNhN2Fxa2R1dXA2',
      imgSrcs: ['img/', 'img/', 'img/']
    },
    {
      id: 10,
      imgSrc: 'img/wannnaka.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'ワイヤーアートと和雑貨の店 『和んなか』',
      description: 'ワイヤーアートで製作したインテリア雑貨を中心に、生活を彩るアイテムをお届けします。ワイヤーアート雑貨、水引細工のポチ袋・祝儀袋、ビーズアクセサリー',
      link: 'https://www.instagram.com/wannaka_wireart_wazakka/?igsh=cHlla2RkcGV4MzZ0',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 11,
      imgSrc: 'img/takenoco2.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'たけのこ',
      description: 'プラスティック粘土で楽しい、ワクワク、かっこいいを追及しています！ポリマークレイを中心にハンドメイドアクセサリー、雑貨を販売♪',
      link: 'https://www.instagram.com/takenoco_2000/?igsh=MTJ4NncyZXBscnUzbQ%3D%3D',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 12,
      imgSrc: 'img/mutsuan714.png',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: '無痛庵',
      description: '立ったまま整体体験や電磁波対策相談及びグッズの販売',
      link: 'https://www.instagram.com/mutuuan_seitai/',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 13,
      imgSrc: 'img/ai714.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'aimin',
      description: '可愛いとほのぼのを、コンセプトに製作しています。是非、手に取って頂ければ嬉しいです♪handmadeピアスクラフトテープ雑貨販売',
      link: 'https://www.instagram.com/aimin927/?igsh=ZnB4a2dxb2g5NXFl&utm_source=qr',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 14,
      imgSrc: 'img/guilt2.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'GUILT',
      description: 'アストロダイス占い。蓮花作りのワークショップ',
      link: '',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 15,
      imgSrc: 'img/kanatumuri2.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'かなつむり',
      description: 'がらずビーズを使った耳飾りやブローチの作品販売と、キックボクシングミット打ち体験【自己紹介】耳飾り：個性的なのに挑戦しやすくて、ピアス穴がなくても楽しめて、他の人とちょっと差をつけられる。そんな耳飾りをお届けします。ミット打ち体験：キックボクシングのトレーニングの1つ”ミット打ち”。それに特化したフィットネスで、実は流行ってきてます（笑）パチン☆ミと決まるとめちゃくちゃスッキリ!筋肉アクセサリー作家という異名を掲げて、あなたのキック受け止めます👍手ぶらで参加できますので気になったらぜひチャレンジしてみて下さい。',
      link: '',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 16,
      imgSrc: 'img/alba_July.png',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'Alba',
      description: '日常にひとつ「新しい」を取り入れ、普段とは違う自分を過ごしてみませんか？変わらなくていい、そのままでいい。ただ「少し」昨日より新しいだけ♪',
      link: '',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 17,
      imgSrc: 'img/terumi.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: '温熱療法【美温】',
      description: '温熱療法『イトオテルミー』療法とは：身体のぬくもりと刺激を与えることで自然治癒力に働きかけ、病態の改善、病気の予防、疲労回復、健康増進を図る温熱刺激療法です。',
      link: '',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 18,
      imgSrc: 'img/yamatogojou2',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: '大和五條MARUSE',
      description: 'ジェラート&レモンスカッシュ',
      link: '',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 19,
      imgSrc: 'img/colorfuls2',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: "colorful's  workshop",
      description: 'スニーカーペイント（体験）',
      link: 'https://www.instagram.com/colorfuls_workshop?igsh=cGk3ZGxrOGR4b3gw&utm_source=qr',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 10,
      imgSrc: 'img/',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: '',
      description: '',
      link: '',
      instaImgSrc: 'img/icon/another-logo.png'
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
        prevButton.textContent = 'Previous';

        // wrap-img 要素を作成
        const wrapImg = document.createElement('img');
        wrapImg.classList.add('wrap-img');
        wrapImg.src = cardData.imgSrcs[0];
        wrapImg.alt = '';

        // next ボタンを作成
        const nextButton = document.createElement('button');
        nextButton.classList.add('next');
        nextButton.textContent = 'Next';

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