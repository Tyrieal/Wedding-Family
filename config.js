/**
 * Korean Traditional Wedding Invitation Configuration
 * 한국 전통 모바일 청첩장 설정
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,

  // ── 메인 (히어로) ──
  groom: {
    name: "한재철",
    nameEn: "Groom",
    father: "한 경",
    mother: "정명숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "허보영",
    nameEn: "Bride",
    father: "허 영",
    mother: "김성숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-05",
    time: "11:10",
    venue: "웨스턴 베니비스",
    hall: "7층 그레이스홀",
    address: "서울 구로구 새말로 97 신도림테크노마트 7층",
    tel: "02-2111-7000",
    des: "\n지하철 이용시      1, 2호선 신도림역 2, 3번 출구\n\n    버스 이용시   5619, 6411, 6511, 6611, 6650, 6651,\n                           5615, 5714, 6512, 6637, 6640 ,160, 503\n\n 자가용 이용시 (네비게이션 주소검색)\n  서울시 구로구 구로동 3-25 신도림테크노마트",
    mapLinks: {
      kakao: "https://kko.to/y5I4GN5p6g",
      naver: "https://naver.me/53lK4SBz"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "처음 만났을 때는 몰랐습니다.\n서로가 서로에게 이렇게 소중한 사람이 되고,\n앞으로의 모든 계절을 함께하게 될 줄은요.\n\n 함께 웃고, 때로는 다투기도 하며\n평범했던 하루하루가 특별한 추억이 되었습니다.\n\n 이제는 연인이 아닌 부부라는 이름으로\n우리의 새로운 이야기를 시작하려 합니다. \n\n 지금까지 저희를 아껴주신 모든 분들께 감사드리며,\n앞으로도 서로의 가장 든든한 편이 되어\n행복하게 살아가겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "한재철", bank: "국민은행", number: "067502-04-329005" },
      { role: "아버지", name: "한 경", bank: "국민은행", number: "085-05-0002-221" },
      { role: "어머니", name: "정명숙", bank: "신한은행", number: "110-003-641949" }
    ],
    bride: [
      { role: "신부", name: "허보영", bank: "국민은행", number: "208401-04-103173" },
      { role: "아버지", name: "허 영", bank: "국민은행", number: "208401-04-244902" }
     ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "한재철 ♥ 허보영 결혼합니다",
    description: "2026년 12월 5일, 소중한 분들을 초대합니다."
  }
};
