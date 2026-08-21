# SSAFYnity 블로그

> 싸피 수료생들이 직접 운영하는 동문회의 공식 블로그

**[ssafynity.github.io/blog](https://ssafynity.github.io/blog)**

공지, 일지, 기술, 후기, 회비 기록을 포함한 SSAFYnity의 공식 블로그입니다.

## 스택

- Astro
- GitHub Pages + GitHub Actions
- Pretendard

## 카테고리

| 카테고리 | 설명 |
|----------|------|
| 공지 | 공지사항 아카이브 |
| 일지 | 동문회 활동과 운영 기록 |
| 기술 | 기술 관련 포스팅 |
| 후기 | 회원 후기 |
| 회비 | 연도별 회비내역 |

## 포스팅 작성

1. 이슈를 생성합니다 (`카테고리:*` 라벨 부착).
2. `src/content/posts/카테고리/YYYY-MM-DD-slug.md` 파일을 작성합니다.
3. frontmatter에 `title`, `description`, `pubDate`, `category`를 입력합니다.
4. Pull Request를 열고 리뷰를 요청합니다.
5. `main` 브랜치에 머지되면 자동 배포됩니다.

## 시작하기

```bash
npm install
npm run dev
```

## 기본 구조

- `docs/design-system.md`: 블로그 저장소 안에서 완결되는 디자인 토큰과 UI 사용 기준
- `src/layouts`: 공통 레이아웃
- `src/components`: 헤더, 푸터, 포스트 카드
- `src/content/posts`: 카테고리별 Markdown 포스트
- `src/styles/global.css`: 메인 사이트와 톤을 맞춘 글로벌 스타일

## 디자인 시스템

- 블로그의 디자인 기준은 [`docs/design-system.md`](docs/design-system.md)를 따릅니다.
- 디자인 토큰은 `src/styles/global.css`에 저장소 내부 값으로 선언합니다.
- 공식 홈페이지나 상위 작업공간 파일을 import하지 않으며, 이 저장소만으로 `/blog` 경로를 빌드·배포할 수 있어야 합니다.

## 문의

ssafynity@gmail.com

## 라이선스

© 2026 SSAFYnity. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참고하세요.
