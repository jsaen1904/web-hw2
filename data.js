//part A

const titles = [
    //인생영화
    "이터널 선셔인", "인셉션", "인생은 아름다워", "맘마미아!", "노예 12년",
    //박스오피스
    "암살자(들)", "극장판 치이카와: 인어 섬의 비밀", "타짜: 벨제붑의 노래", "오디세이", "룩백"
];

const ratings = [
8.1, 7.2, 8.4, 6.9, 7.9,
  7.5, 7.5, 7.2, 8.0, 7.9,
]

const years = [
2004, 2010, 1997, 2008, 2013,
  2026, 2026, 2026, 2026, 2026,
]

const audiences = [
 552670,6014915,225291,4579773,500662,
 3023218,1311535,1763672,12188537,66994
]

//part B

const movies = [
  { title: "이터널 선샤인", year: 2004, date: "2004-03-19", rating: 8.1,
    audience: 55260, poster: "/jULvvUymAqM18gIDHbMRfKHbCSB.jpg", type: "mine", rank: null },
  { title: "인셉션", year: 2010, date: "2010-07-15", rating: 7.2,
    audience: 6014915, poster: "/atSxEGstxXRoSKDQFBgqQ5lpGSt.jpg", type: "mine", rank: null },
  { title: "인생은 아름다워", year: 1997, date: "1997-12-20", rating: 8.4,
    audience: 225291, poster: "/iyQ8pmCpmnPrGtaHMfmSvQLv8Fy.jpg", type: "mine", rank: null },
  { title: "맘마미아!", year: 2008, date: "2008-07-10", rating: 6.9,
    audience: 4579773, poster: "/9fnWov6Mb7LJKA2dJLV9h1mcSnF.jpg", type: "mine", rank: null },
  { title: "노예 12년", year: 2013, date: "2013-08-30", rating: 7.9,
    audience: 500662, poster: "/netHzIutioPMJt6VePen3nXBBCR.jpg", type: "mine", rank: null },

  { title: "암살자(들)", year: 2026, date: "2026-09-23", rating: 7.5,
    audience: 3023218, poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg", type: "boxoffice", rank: 1 },
  { title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.5,
    audience: 1311535, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 2 },
  { title: "타짜: 벨제붑의 노래", year: 2026, date: "2026-09-23", rating: 7.2,
    audience: 1763672, poster: "/ueigb5zra1tj6FTK9yhh2P33P9B.jpg", type: "boxoffice", rank: 3 },
  { title: "오디세이", year: 2026, date: "2026-08-05", rating: 8.0,
    audience: 12188537, poster: "/8ze9OcVuFiy94s6FFPvsn4oC2e1.jpg", type: "boxoffice", rank: 4 },
  { title: "룩백", year: 2026, date: "2026-10-08", rating: 7.9,
    audience: 66994, poster: "/mAfcD0lspaNlZDRrzT0fdWS5C01.jpg", type: "boxoffice", rank: 5 },
];
