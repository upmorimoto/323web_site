document.addEventListener('DOMContentLoaded', function() {
  // 複数のカードデータのリスト
  const cardDataList = [
    {
      id: 1,
      imgSrc: 'img/wafuka.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'キッチン和福香',
      description: '日替わり各種弁当700円　自家製米、無農薬野菜を使ったお弁当を販売♪',
      link: 'https://www.instagram.com/wafuka0514/?igsh=bGNhN2Fxa2R1dXA2',
      instaImgSrc: 'img/icon/instagram-logo-24.png'
    },
    {
      id: 2,
      imgSrc: 'img/ippo.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'ippo',
      description: '暮らしの動線づくりをしながら癒しのグッズを販売！お掃除グッズ／ヒンメリ／藁書の販売。藁書体験（うちわ仕上げ）1,000円',
      link: 'https://www.instagram.com/ippo_7oco/?igsh=MWQ1a3liaWU4bmJwbA%3D%3D&utm_source=qr',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 3,
      imgSrc: 'img/souju.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: '颯樹~soujyu~',
      description: '1点ものを心掛けています。みなさんにしあわせのお手伝いが出来ればと思い制作させていただいております。ハンドメイドアクセサリー、雑貨、天然石、ブリザーブドフラワー、陶芸、ステンドグラス。',
      link: 'https://www.instagram.com/soujyu_3/?igsh=eXZlenFob2pub2Qz',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 4,
      imgSrc: 'img/Yroom.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'Y.room',
      description: '手織りでオリジナルのアクセサリー、マフラー、ターバン等々つくっています。',
      link: 'https://www.instagram.com/yumirin1112/?igsh=MWF5cjA2dDNnampkbw%3D%3D',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 5,
      imgSrc: 'img/ruri.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: '藍染工房 瑠璃',
      description: '工房では、藍染め体験を受け付けております。今回の出展内容は、本藍を使って工房で染めたショールや洋服などです。',
      link: 'https://yoshikonatu.wixsite.com/ruri',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 6,
      imgSrc: 'img/FPhirabayashi.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'FP平林',
      description: '金融機関でFP（ファイナンシャル・プランナー）という仕事をしています。お客様との接点づくりの一つでアンケートご回答の方に、名入れオリジナルキーホルダーを無料プレゼント！',
      link: 'https://www.instagram.com/ippo_7oco/?igsh=MWQ1a3liaWU4bmJwbA%3D%3D&utm_source=qr',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 7,
      imgSrc: 'img/smile2.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'スマイルダイレクション',
      description: '波動の器械を使って臓器の不調をお調べします！20分2,000円／45分4,000円',
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
      imgSrc: 'img/cosmespace2.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'コスメスペース',
      description: 'リバースエイジング体験。お肌診断＆遺伝子コスメお試し!体験された方に遺伝子コスメのミニサンプルプレゼント！',
      link: '',
      instaImgSrc: 'img/icon/another-logo.png'
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
      imgSrc: 'img/mutuan.png',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: '無痛庵',
      description: '石の波動を利用して電磁波、ブルーライト対策や整体をしています♪立ったまま！その場で整体体験！家の電磁波対策相談や携帯電話等の電磁波対応グッズ等の販売。',
      link: 'https://www.instagram.com/mutuuan_seitai/',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 13,
      imgSrc: 'img/ai.jpg',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: 'aimin',
      description: '可愛いをコンセプトに製作しています。是非、手に取って頂ければ嬉しいです♪ハンドメイドピアス・クラフトテープ小物販売',
      link: 'https://www.instagram.com/aimin927/?igsh=ZnB4a2dxb2g5NXFl&utm_source=qr',
      instaImgSrc: 'img/icon/another-logo.png'
    },
    {
      id: 14,
      imgSrc: 'img/',
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
      id: 10,
      imgSrc: 'img/',
      closeImgSrc: 'img/icon/close_FILL0_wght400_GRAD0_opsz24.png',
      title: '',
      description: '',
      link: '',
      instaImgSrc: 'img/icon/another-logo.png'
    }
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

        // wrap-img 要素を作成
        const wrapImg = document.createElement('img');
        wrapImg.classList.add('wrap-img');
        wrapImg.src = cardData.imgSrc;
        wrapImg.alt = '';

        // card-open 要素を作成
        const cardOpen = document.createElement('div');
        cardOpen.classList.add('card-open');

        // close ボタンを作成
        const closeButton = document.createElement('button');
        closeButton.classList.add('close');
        const closeImg = document.createElement('img');
        closeImg.src = cardData.closeImgSrc;
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
        descriptionElement.textContent = cardData.description;

        // site ボタンを作成
        const siteButton = document.createElement('button');
        siteButton.classList.add('site');
        const siteLink = document.createElement('a');
        siteLink.href = cardData.link;
        siteLink.target = '_blank';
        siteLink.rel = 'noreferrer noopener';
        const instaImg = document.createElement('img');
        instaImg.classList.add('insta');
        instaImg.src = cardData.instaImgSrc;
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
        cardOpenWrapper.appendChild(wrapImg);
        cardOpenWrapper.appendChild(cardOpen);

        // body に card-open-wrapper を追加
        document.body.appendChild(cardOpenWrapper);

        // 詳細表示要素を表示
        setTimeout(function() {
          cardOpenWrapper.classList.add('active');
        }, 50); // 少し待ってから表示することでフェードイン効果を加える

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
