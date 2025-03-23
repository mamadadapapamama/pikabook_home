// i18n 초기화
document.addEventListener("DOMContentLoaded", function () {
const resources = {
    ko: {
      translation: {
        headline: "원서공부, 스마트하게",
        features_title: "피카북은 이렇게 도와줘요",
        feature_1_title: "사진만 있다면, 즉시 번역",
        feature_1_desc1: "원서 공부, 첫페이지부터 막막하셨죠?",
        feature_1_desc2: "페이지 사진만 있으면 즉시 번역해 드려요.",
        feature_2_title: "원서 교재를 스마트 교재로",
        feature_2_desc1: "번거로왔던 사전찾기, 비슷한 구조의 문장 찾기,",
        feature_2_desc2: "이제 피카북에서 손쉽게 하세요",
        feature_3_title: "플래시카드로 반복학습을 손쉽게!",
        feature_3_desc1: "어려운 단어는 플래시카드로 저장해요",
        feature_3_desc2: "머릿속에 정리될 때까지 반복 학습해요",
        feature_4_title: "내 방식대로 정리해 손쉽게 복습",
        feature_4_desc1: "챕터별, 일일 학습 분량 별 등 내 방식대로 정리해",
        feature_4_desc2: "언제든 다시 볼 수 있어요",
        download_title: "지금 바로 피카북을 다운로드하세요",
        download_subtitle: "종이책을 스마트한 학습툴로, Pikabook"
      }
    },
    en: {
      translation: {
        headline: "Flip, snap, and read, your language buddy on every page.",
        features_title: "Here's How Pikabook Helps",
        feature_1_title: "Just a Photo — Instant Translation",
        feature_1_desc1: "Feeling stuck from page one of your textbook?",
        feature_1_desc2: "Snap a photo of any page and get instant translation.",
        feature_2_title: "Turn Paper Textbooks into Smart Guides",
        feature_2_desc1: "No more flipping through dictionaries or searching similar sentences.",
        feature_2_desc2: "Pikabook makes it easy and efficient.",
        feature_3_title: "Master with Flashcards — The Easy Way",
        feature_3_desc1: "Save tricky words as flashcards",
        feature_3_desc2: "and review them until they stick.",
        feature_4_title: "Organize Your Way — Review Anytime",
        feature_4_desc1: "Sort by chapter, daily goals, or your own system.",
        feature_4_desc2: "Review whenever you need to.",
        download_title: "Download Pikabook Now",
        download_subtitle: "Turn Paper Books into Smart Learning Tools with Pikabook"
      }
    },
    zh: {
      translation: {
        headline: "原版学习，更智能",
        features_title: "Pikabook 这样帮你学习",
        feature_1_title: "只需一张照片，立刻翻译",
        feature_1_desc1: "原版书从第一页就开始困难重重？",
        feature_1_desc2: "拍下页面照片，立即翻译内容。",
        feature_2_title: "把纸质教材变成智能教材",
        feature_2_desc1: "查词典、找类似句子太麻烦？",
        feature_2_desc2: "用 Pikabook 一键搞定。",
        feature_3_title: "用闪卡轻松反复学习",
        feature_3_desc1: "难记的单词保存为闪卡，",
        feature_3_desc2: "反复学习，直到掌握为止。",
        feature_4_title: "按你的方式整理，复习更高效",
        feature_4_desc1: "按章节、每天学习量等自定义整理，",
        feature_4_desc2: "随时打开复习。",
        download_title: "立即下载 Pikabook",
        download_subtitle: "让纸质书变成智能学习工具，Pikabook"
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
    const headlineElement = document.getElementById("headline");
    if (headlineElement) {
      headlineElement.innerHTML = i18next.t("headline");
    }
    
    const subheadlineElement = document.getElementById("subheadline");
    if (subheadlineElement) {
      subheadlineElement.innerHTML = i18next.t("subheadline");
    }
    
    const featuresTitleElement = document.getElementById("features_title");
    if (featuresTitleElement) {
      featuresTitleElement.innerHTML = i18next.t("features_title");
    }
    
    // 다운로드 섹션
    const downloadTitleElement = document.getElementById("download_title");
    if (downloadTitleElement) {
      downloadTitleElement.innerHTML = i18next.t("download_title");
    }
    
    const downloadSubtitleElement = document.getElementById("download_subtitle");
    if (downloadSubtitleElement) {
      downloadSubtitleElement.innerHTML = i18next.t("download_subtitle");
    }
    
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
  
  // 스크롤 애니메이션
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
  
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});