// i18n 초기화
document.addEventListener("DOMContentLoaded", function () {
const resources = {
    ko: {
      translation: {
        headline: "원서공부, 스마트하게",
        subheadline: "원서공부, 어디서부터 시작할지 막막하셨죠?",
        cta_ios: "iOS 앱 다운로드",
        cta_android: "Android 앱 다운로드",
        features_title: "피카북은 이렇게 도와줘요",
        feature_1: "<strong>사진만 있으면 바로 번역</strong><br/>책, 노트, 간판… 어디서든 사진을 찍으면 즉시 번역!<br/>AI 기반 텍스트 인식으로 쉽고 빠르게 텍스트를 번역하세요",
        feature_2: "<strong>이미지가 스마트한 학습 노트로!</strong><br/>번역, 한어병음을 만들어줘요<br/>손쉽게 사전 검색을 할 수 있어요",
        feature_3: "<strong>플래시카드로 반복학습을 손쉽게!</strong><br/>어려운 단어는 플래시카드로 저장해요<br/>머릿속에 정리될 때까지 반복 학습해요",
        feature_4: "<strong>내 방식대로 정리해 손쉽게 복습하기!</strong><br/>챕터별, 일일 학습별 등 내 방식대로 하나의 노트로 정리해요<br/>언제든 다시 볼 수 있어요"
      }
    },
    en: {
      translation: {
        headline: "Smart Foreign Language Reading",
        subheadline: "Wondering where to start with foreign language reading?",
        cta_ios: "Download iOS App",
        cta_android: "Download Android App",
        features_title: "How Pikabook Helps You",
        feature_1: "<strong>Instant Translation with Just a Photo</strong><br/>Books, notes, signs... Take a photo anywhere for immediate translation!<br/>Translate text quickly and easily with AI-based text recognition",
        feature_2: "<strong>Transform Images into Smart Study Notes!</strong><br/>Creates translations and phonetics<br/>Easily search dictionaries",
        feature_3: "<strong>Easy Repetitive Learning with Flashcards!</strong><br/>Save difficult words as flashcards<br/>Repeat learning until it's organized in your head",
        feature_4: "<strong>Organize for Easy Review in Your Own Way!</strong><br/>Organize into a single note by chapter, daily learning, etc.<br/>Available to review anytime"
      }
    },
    zh: {
      translation: {
        headline: "智能外语阅读",
        subheadline: "不知道从哪里开始外语阅读？",
        cta_ios: "下载 iOS 应用",
        cta_android: "下载 Android 应用",
        features_title: "Pikabook 如何帮助您",
        feature_1: "<strong>只需一张照片即可立即翻译</strong><br/>书籍、笔记、标志...在任何地方拍照即可立即翻译！<br/>通过基于人工智能的文本识别快速轻松地翻译文本",
        feature_2: "<strong>将图像转换为智能学习笔记！</strong><br/>创建翻译和拼音<br/>轻松搜索词典",
        feature_3: "<strong>使用抽认卡轻松重复学习！</strong><br/>将难词保存为抽认卡<br/>重复学习直到在您的头脑中整理好",
        feature_4: "<strong>按照自己的方式整理，轻松复习！</strong><br/>按章节、每日学习等整理成一个笔记<br/>随时可以复习"
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
    document.getElementById("features_title").innerHTML = i18next.t("features_title");
    document.getElementById("feature_1").innerHTML = i18next.t("feature_1");
    document.getElementById("feature_2").innerHTML = i18next.t("feature_2");
    document.getElementById("feature_3").innerHTML = i18next.t("feature_3");
    document.getElementById("feature_4").innerHTML = i18next.t("feature_4");
    
    // CTA 버튼 번역
    document.getElementById("cta-ios").innerHTML = i18next.t("cta_ios");
    document.getElementById("cta-android").innerHTML = i18next.t("cta_android");
    document.getElementById("cta-ios-footer").innerHTML = i18next.t("cta_ios");
    document.getElementById("cta-android-footer").innerHTML = i18next.t("cta_android");
  }
  
  document.getElementById("languageSwitcher").addEventListener("change", function(e) {
    i18next.changeLanguage(e.target.value, updateContent);
  });
});