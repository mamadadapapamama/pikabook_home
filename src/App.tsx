import React from 'react';
import { Store as AppStore, Store as PlayStore, Mail, Camera, Headphones, Save, FolderOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[80vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1456081445129-830eb8d4bfc6?auto=format&fit=crop&w=2000&q=80"
            alt="학습하는 모습"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <nav className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">Pikabook</h1>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">
              문의하기
            </a>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              언어의 벽을 넘어<br />세상과 소통하세요
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              AI 기반 실시간 번역으로 더 쉽고 스마트하게 언어를 배우세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors text-lg font-semibold"
              >
                <AppStore className="w-6 h-6 mr-2" />
                App Store
              </a>
              <a
                href="https://play.google.com"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
              >
                <PlayStore className="w-6 h-6 mr-2" />
                Play Store
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-yellow-500">스마트한 기능</span>으로<br />
            더 쉽게 배우세요
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-10 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <Camera className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold ml-4">찰칵! 바로 번역</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                책, 노트, 간판... 어디서든 사진을 찍으면 즉시 번역! AI 기반 텍스트 인식으로 쉽고 빠르게 원하는 정보를 얻으세요.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold ml-4">듣고 말하며 학습</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                원어민 수준의 발음으로 읽어주는 TTS 기능! 눈으로 보고, 귀로 듣고, 입으로 따라 말하며 자연스럽게 습득하세요.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <Save className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold ml-4">나만의 단어장</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                중요한 문장, 잘 안외워지는 단어들은 따로 모아 Flip card로 정리! 쉽고 빠르게 반복해서 내 단어로 만들어보세요.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <FolderOpen className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold ml-4">스마트 학습 관리</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                원문과 번역된 내용을 폴더별, 주제별로 정리. 책에서 본 문장, 여행에서 배운 표현, 업무에서 필요한 용어까지 내 학습 스타일에 맞게 관리하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            이제 외국어 학습, 더 효율적으로 해보세요
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            읽고, 저장하고, 필요할 때 다시 학습하는 스마트 언어 학습 도구!
            Pikabook으로 내가 직접 만들어가는 언어 라이브러리를 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors text-lg font-semibold"
            >
              <AppStore className="w-6 h-6 mr-2" />
              App Store에서 다운로드
            </a>
            <a
              href="https://play.google.com"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              <PlayStore className="w-6 h-6 mr-2" />
              Google Play에서 다운로드
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">문의하기</h2>
            <div className="bg-gray-50 p-12 rounded-2xl">
              <p className="text-xl text-gray-600 mb-8">
                피카북 서비스에 대해 궁금하신 점이 있으시다면 언제든 문의해주세요.
              </p>
              <a
                href="mailto:contact@pikabook.com"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors text-lg font-semibold"
              >
                <Mail className="w-6 h-6 mr-2" />
                이메일 보내기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-lg mb-4 md:mb-0">© 2024 Pikabook. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">이용약관</a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">개인정보처리방침</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;