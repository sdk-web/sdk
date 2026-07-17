# songdk — 퍼블리싱 포트폴리오 (songdk.kro.kr)

웹 퍼블리싱 실무 포트폴리오 사이트. PHP + 패럴랙스 스크롤 기반입니다.

## 도메인 / 서버

- **URL:** https://songdk.kro.kr
- **서버 경로:** `/var/www/sdk`
- **GitHub:** `sdk-web/sdk` (branch `main`)

> `portfolio.songdk.kro.kr` 과는 **다른 사이트**입니다.

## 구조

```
index.php              # 메인 랜딩 (패럴랙스)
index2.php             # 예전/실험 페이지
_inc/
  header.php, footer.php, front_header.php
  rnb.php, sub_banner.php, _lib.php
assets/
  css/                 # common, main, reset
  js/
    parallax-main.js   # 스크롤 패럴랙스 핵심
    popup.js
  parallax-main/       # main_0000.webp ~ 시퀀스 (60+장)
  portfolio/           # site1~7.webp 썸네일
  images/              # 스킬 아이콘 등
popup/
  popup.php, popup1.html
deploy/
  SERVER-DEPLOY.md     # Agent용 배포 문서
  scripts/             # 서버 git 배포 스크립트
```

## 배포

```bash
git push origin main
ssh root@115.68.230.229 "cd /var/www/sdk && git pull origin main"
```

Deploy Key 최초 설정: [deploy/SERVER-DEPLOY.md](./deploy/SERVER-DEPLOY.md)

## 기술 요약

- PHP include 기반 레이아웃
- jQuery + 커스텀 parallax (webp 이미지 시퀀스)
- 카페24, 그누보드, 워드프레스 등 스킬 섹션
