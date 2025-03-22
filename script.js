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
        feature_1_title: "사진만 있으면 바로 번역",
        feature_1_desc1: "책, 노트, 간판… 어디서든 사진을 찍으면 즉시 번역!",
        feature_1_desc2: "AI 기반 텍스트 인식으로 쉽고 빠르게 텍스트를 번역하세요",
        feature_2_title: "이미지가 스마트한 학습 노트로!",
        feature_2_desc1: "번역, 한어병음을 만들어줘요",
        feature_2_desc2: "손쉽게 사전 검색을 할 수 있어요",
        feature_3_title: "플래시카드로 반복학습을 손쉽게!",
        feature_3_desc1: "어려운 단어는 플래시카드로 저장해요",
        feature_3_desc2: "머릿속에 정리될 때까지 반복 학습해요",
        feature_4_title: "내 방식대로 정리해 손쉽게 복습하기!",
        feature_4_desc1: "챕터별, 일일 학습별 등 내 방식대로 하나의 노트로 정리해요",
        feature_4_desc2: "언제든 다시 볼 수 있어요"
      }
    },
    en: {
      translation: {
        headline: "Smart Foreign Language Reading",
        subheadline: "Wondering where to start with foreign language reading?",
        cta_ios: "Download iOS App",
        cta_android: "Download Android App",
        features_title: "How Pikabook Helps You",
        feature_1_title: "Instant Translation with Just a Photo",
        feature_1_desc1: "Books, notes, signs... Take a photo anywhere for immediate translation!",
        feature_1_desc2: "Translate text quickly and easily with AI-based text recognition",
        feature_2_title: "Transform Images into Smart Study Notes!",
        feature_2_desc1: "Creates translations and phonetics",
        feature_2_desc2: "Easily search dictionaries",
        feature_3_title: "Easy Repetitive Learning with Flashcards!",
        feature_3_desc1: "Save difficult words as flashcards",
        feature_3_desc2: "Repeat learning until it's organized in your head",
        feature_4_title: "Organize for Easy Review in Your Own Way!",
        feature_4_desc1: "Organize into a single note by chapter, daily learning, etc.",
        feature_4_desc2: "Available to review anytime"
      }
    },
    zh: {
      translation: {
        headline: "智能外语阅读",
        subheadline: "不知道从哪里开始外语阅读？",
        cta_ios: "下载 iOS 应用",
        cta_android: "下载 Android 应用",
        features_title: "Pikabook 如何帮助您",
        feature_1_title: "只需一张照片即可立即翻译",
        feature_1_desc1: "书籍、笔记、标志...在任何地方拍照即可立即翻译！",
        feature_1_desc2: "通过基于人工智能的文本识别快速轻松地翻译文本",
        feature_2_title: "将图像转换为智能学习笔记！",
        feature_2_desc1: "创建翻译和拼音",
        feature_2_desc2: "轻松搜索词典",
        feature_3_title: "使用抽认卡轻松重复学习！",
        feature_3_desc1: "将难词保存为抽认卡",
        feature_3_desc2: "重复学习直到在您的头脑中整理好",
        feature_4_title: "按照自己的方式整理，轻松复习！",
        feature_4_desc1: "按章节、每日学习等整理成一个笔记",
        feature_4_desc2: "随时可以复习"
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
    // 헤드라인 및 서브헤드라인
    document.getElementById("headline").innerHTML = i18next.t("headline");
    document.getElementById("subheadline").innerHTML = i18next.t("subheadline");
    document.getElementById("features_title").innerHTML = i18next.t("features_title");
    
    // CTA 버튼
    document.getElementById("cta-ios").innerHTML = i18next.t("cta_ios");
    document.getElementById("cta-android").innerHTML = i18next.t("cta_android");
    document.getElementById("cta-ios-footer").innerHTML = i18next.t("cta_ios");
    document.getElementById("cta-android-footer").innerHTML = i18next.t("cta_android");
    
    // 피처 섹션
    updateFeature("feature_1", "feature_1_title", "feature_1_desc1", "feature_1_desc2");
    updateFeature("feature_2", "feature_2_title", "feature_2_desc1", "feature_2_desc2");
    updateFeature("feature_3", "feature_3_title", "feature_3_desc1", "feature_3_desc2");
    updateFeature("feature_4", "feature_4_title", "feature_4_desc1", "feature_4_desc2");
  }
  
  // 피처 섹션 업데이트 함수
  function updateFeature(featureId, titleKey, desc1Key, desc2Key) {
    const featureElement = document.getElementById(featureId);
    if (!featureElement) return;
    
    const titleElement = featureElement.querySelector("h3");
    const paragraphs = featureElement.querySelectorAll("p");
    
    if (titleElement) titleElement.innerHTML = i18next.t(titleKey);
    if (paragraphs.length >= 1) paragraphs[0].innerHTML = i18next.t(desc1Key);
    if (paragraphs.length >= 2) paragraphs[1].innerHTML = i18next.t(desc2Key);
  }
  
  // 언어 선택기 이벤트 리스너
  document.getElementById("languageSwitcher").addEventListener("change", function(e) {
    i18next.changeLanguage(e.target.value, updateContent);
  });
});