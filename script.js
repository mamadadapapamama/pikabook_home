// i18n 초기화
const resources = {
    ko: {
      translation: {
        headline: "원서공부, 스마트하게",
        subheadline: "원서공부, 어디서부터 시작할지 막막하셨죠?",
        cta: "앱 다운로드",
        features_title: "피카북은 이렇게 도와줘요",
        feature_1: "<strong>사진만 있으면 바로 번역</strong><br/>책, 노트, 간판… 어디서든 사진을 찍으면 즉시 번역!<br/>AI 기반 텍스트 인식으로 쉽고 빠르게 텍스트를 번역하세요",
        feature_2: "<strong>이미지가 스마트한 학습 노트로!</strong><br/>번역, 한어병음을 만들어줘요<br/>손쉽게 사전 검색을 할 수 있어요",
        feature_3: "<strong>플래시카드로 반복학습을 손쉽게!</strong><br/>어려운 단어는 플래시카드로 저장해요<br/>머릿속에 정리될 때까지 반복 학습해요",
        feature_4: "<strong>내 방식대로 정리해 손쉽게 복습하기!</strong><br/>챕터별, 일일 학습별 등 내 방식대로 하나의 노트로 정리해요<br/>언제든 다시 볼 수 있어요"
      }
    },
    en: {
      translation: {
        headline: "Smart way to study with original texts",
        subheadline: "Not sure where to start with foreign books?",
        cta: "Download the App",
        features_title: "How Pikabook helps you",
        feature_1: "<strong>Translate instantly from any photo</strong><br/>Books, notes, signs... just snap and translate!<br/>AI-powered OCR makes reading effortless",
        feature_2: "<strong>Turn images into smart study notes!</strong><br/>Get translation, pinyin and dictionary lookups with ease",
        feature_3: "<strong>Review with flashcards easily!</strong><br/>Save hard words as flashcards<br/>Review until it sticks in your mind",
        feature_4: "<strong>Organize your way, review anytime!</strong><br/>Group by chapter or day — make your own notes<br/>Come back anytime to review"
      }
    },
    zh: {
      translation: {
        headline: "原版书学习，更聪明",
        subheadline: "不知道如何开始学原版书？",
        cta: "下载应用",
        features_title: "Pikabook 如何帮助你",
        feature_1: "<strong>拍照即翻译</strong><br/>书本、笔记、路牌… 拍一张就能翻译！<br/>AI 文字识别快速准确",
        feature_2: "<strong>图片变成智能学习笔记！</strong><br/>翻译、拼音、词典查阅一键完成",
        feature_3: "<strong>用闪卡轻松复习！</strong><br/>难词加入闪卡<br/>反复学习直到掌握",
        feature_4: "<strong>按你方式整理笔记，随时复习！</strong><br/>按章节、按日期分组都可以<br/>想复习就能看"
      }
    }
  };
  
  i18next.init({
    lng: "ko",
    resources
  }, function(err, t) {
    updateContent();
  });
  
  function updateContent() {
    document.getElementById("headline").innerHTML = i18next.t("headline");
    document.getElementById("subheadline").innerHTML = i18next.t("subheadline");
    document.getElementById("cta").innerHTML = i18next.t("cta");
    document.getElementById("features_title").innerHTML = i18next.t("features_title");
    document.getElementById("feature_1").innerHTML = i18next.t("feature_1");
    document.getElementById("feature_2").innerHTML = i18next.t("feature_2");
    document.getElementById("feature_3").innerHTML = i18next.t("feature_3");
    document.getElementById("feature_4").innerHTML = i18next.t("feature_4");
  }
  
  document.getElementById("languageSwitcher").addEventListener("change", function(e) {
    i18next.changeLanguage(e.target.value, updateContent);
  });
  