# songdk (Publishing) — 서버 배포 참고 (Agent용)

Cursor Agent에게 **「songdk.kro.kr 서버에도 적용해줘」** 라고 할 때 이 문서를 함께 주세요.  
전체 인프라·다른 프로젝트는 상위 [HANDOFF.md](../HANDOFF.md) 를 참고하세요.

---

## Agent 요청 예시

```
deploy/SERVER-DEPLOY.md 보고 songdk 프로젝트 서버 배포/업데이트 해줘.
기존 사이트·SSL 인증서 건드리지 말고, /var/www/sdk + songdk.kro.kr 기준으로.
SSH: ssh root@115.68.230.229
```

---

## 프로젝트 고정값

| 항목 | 값 |
|------|-----|
| 도메인 | `songdk.kro.kr` (`www` → apex 리다이렉트) |
| 서버 경로 | `/var/www/sdk` |
| GitHub | `https://github.com/sdk-web/sdk` (private) |
| Git remote (서버) | `git@github-sdk-web-sdk:sdk-web/sdk.git` |
| Deploy Key | `/root/.ssh/github_sdk_web_sdk` |
| 브랜치 | `main` |
| 웹서버 | **Apache2** |
| SSL | 공용 cert `dyauto.songdk.kro.kr` SAN |

---

## 로컬 개발

이 프로젝트는 PHP 단일 페이지(패럴랙스 퍼블리싱 포트폴리오)입니다.  
로컬 Docker 스택에는 아직 전용 vhost가 없을 수 있습니다. 필요 시 Apache/nginx로 `/var/www/sdk` 경로를 직접 서빙하세요.

---

## 배포 종류

### A. 코드만 업데이트 (일상)

로컬에서 push 한 뒤, 서버에서:

```bash
cd /var/www/sdk
git pull origin main
```

또는 `bash /root/pull-sdk.sh` (업로드 후).

### B. Git 최초 연결 / Deploy Key 설정

1. 로컬에서 `deploy/upload.sh` 로 스크립트 업로드
2. 서버에서 `bash /root/setup-git-deploy-sdk.sh` 실행
3. 출력된 **공개키**를 GitHub `sdk-web/sdk` → Settings → Deploy keys (read-only)에 등록
4. 다시 `bash /root/setup-git-deploy-sdk.sh` 실행

---

## 디렉터리 구조 (요약)

| 경로 | 설명 |
|------|------|
| `index.php` | 메인 랜딩 (패럴랙스 스크롤) |
| `index2.php` | 예전/실험용 페이지 (GitHub에만 있을 수 있음) |
| `_inc/` | PHP include (header, footer, nav 등) |
| `assets/css/` | 스타일 |
| `assets/js/` | `parallax-main.js`, popup 등 |
| `assets/parallax-main/` | 패럴랙스용 webp 시퀀스 이미지 |
| `assets/portfolio/` | 포트폴리오 썸네일 |
| `popup/` | 팝업 HTML/PHP |

---

## 주의

- `portfolio.songdk.kro.kr` 과 **다른 사이트**입니다. 혼동하지 말 것.
- 서버 `git reset --hard` 시 운영 파일이 GitHub `main` 과 동일해집니다. push 후 pull 하세요.
