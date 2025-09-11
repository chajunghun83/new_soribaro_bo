# 소리바로 BO 관리자 페이지

> 소리바로 서비스의 통합 관리자 대시보드 시스템

## 🚀 프로젝트 개요

소리바로 BO(Back Office) 관리자 페이지는 다양한 서비스를 통합 관리할 수 있는 웹 기반 관리자 시스템입니다.

## 📋 주요 기능

### 🔊 소리바로 서비스
- **B2C 서비스**: 개인 고객 신청 및 작업 관리
- **Enterprise 서비스**: 기업 고객 회의록 및 VOD 관리
- **설정 관리**: FAQ, 공지사항, 이벤트 관리

### 🎬 클립데스크 서비스
- **영상 작업 관리**: 의뢰 현황 및 상세 관리
- **프로젝트 분할**: 다중 파일 프로젝트 생성 및 관리
- **금액 관리**: 결제 금액 확정 및 이벤트 처리

### 🌐 번역 서비스
- **다국어 번역**: 출발어 → 중간어 → 번역가 워크플로우
- **작업자 배정**: 각 단계별 작업자 관리 시스템
- **건너뛰기 기능**: 유연한 번역 프로세스

### 👥 사용자 관리
- **작업자 관리**: 작업자 등록 및 관리
- **관리자 계정**: 시스템 관리자 계정 관리

## 🖥️ 화면 미리보기

### 메인 대시보드
- 통합 사이드바 메뉴
- 실시간 통계 정보
- 서비스별 현황 요약

### 클립데스크 상세 페이지
- 2컬럼 레이아웃 (작업현황 + 상담자 정보)
- 프로젝트 분할 생성 모달
- 파일 다운로드 및 클라우드 공유
- 작업 금액 관리 시스템

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **UI Framework**: 커스텀 CSS Grid & Flexbox
- **Icons**: 이모지 기반 아이콘 시스템
- **Responsive**: 데스크톱 최적화 설계

## 📁 프로젝트 구조

```
new_soribaro_bo/
├── index.html                 # 메인 대시보드
├── pages/                     # 각 서비스별 페이지
│   ├── soribaro/             # 소리바로 서비스
│   │   ├── b2c/              # B2C 관리
│   │   ├── enterprise/       # 기업 서비스
│   │   └── settings/         # 설정 관리
│   ├── clipdesk/             # 클립데스크 서비스
│   ├── translation/          # 번역 서비스
│   └── user/                 # 사용자 관리
├── backup*/                  # 개발 과정 백업
└── reference/                # 참조 자료
```

## 🌐 웹사이트 접속

### GitHub Pages (추천)
```
https://chajunghun83.github.io/new_soribaro_bo/
```

### GitHub 저장소
```
https://github.com/chajunghun83/new_soribaro_bo
```

## 🚀 로컬 실행 방법

1. **저장소 클론**
   ```bash
   git clone https://github.com/chajunghun83/new_soribaro_bo.git
   cd new_soribaro_bo
   ```

2. **웹 서버 실행**
   ```bash
   # Python 3 사용 시
   python -m http.server 8000
   
   # Node.js 사용 시
   npx http-server
   ```

3. **브라우저에서 접속**
   ```
   http://localhost:8000
   ```

## 📈 개발 진행 상황

- ✅ **2025.08.22**: 번역 서비스 완전 구현
- ✅ **2025.08.25**: 클립데스크 상세 페이지 완전 구현
- ✅ **2025.08.25**: GitHub 저장소 생성 및 배포

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

## 📄 라이선스

이 프로젝트는 개인 프로젝트입니다.

---

**Made with ❤️ by chajunghun83**
