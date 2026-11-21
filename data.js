const titles = [
  "이터널 선샤인",
  "인셉션",
  "인생은 아름다워",
  "맘마미아!",
  "노예 12년",
  "암살자(들)",
  "극장판 치이카와: 인어 섬의 비밀",
  "타짜: 벨제붑의 노래",
  "오디세이",
  "룩백",
];

const ratings = [8.1, 7.2, 8.4, 6.9, 7.9, 7.5, 7.5, 7.2, 8.0, 7.9];

const years = [2004, 2010, 1997, 2008, 2013, 2026, 2026, 2026, 2026, 2026];

const audiences = [
  6014915,4579773, 552670, 498004, 263010,
  3023218, 1311535, 1763672, 12188537, 66994,
];

// Part B : 영화 객체 10건(Part A와 같은 순서)
const movies = [
    {
        title: "이터널 선샤인", year: 2004, date: "2004-03-19", rating: 8.1,
        audience: 6014915, poster: "https://image.tmdb.org/t/p/w342//jULvvUymAqM18gIDHbMRfKHbCSB.jpg", type: "mine", rank: null
    }, {
        title: "인셉션", year: 2010, date: "2010-07-16", rating: 7.2,
        audience: 4579773, poster: "https://image.tmdb.org/t/p/w342//atSxEGstxXRoSKDQFBgqQ5lpGSt.jpg", type: "mine", rank: null
    }, {
        title: "인생은 아름다워", year: 1997, date: "2014-11-06", rating: 8.4,
        audience: 552670, poster: "https://image.tmdb.org/t/p/w342//iyQ8pmCpmnPrGtaHMfmSvQLv8Fy.jpg", type: "mine", rank: null
    }, {
        title: "맘마미아", year: 2008, date: "2008-07-18", rating: 6.9,
        audience: 498004, poster: "https://image.tmdb.org/t/p/w342//9fnWov6Mb7LJKA2dJLV9h1mcSnF.jpg", type: "mine", rank: null
    }, {
        title: "노예 12년", year: 2013, date: "2013-10-18", rating: 7.9,
        audience: 263010, poster: "https://image.tmdb.org/t/p/w342//netHzIutioPMJt6VePen3nXBBCR.jpg", type: "mine", rank: null
    },
    {
        title: "암살자(들)", year: 2026, date: "2026-09-23", rating: 7.5,
        audience: 3023218, poster: "https://image.tmdb.org/t/p/w342//c55ijsOdntj6P25vDwHLdgsBpmV.jpg", type: "mine", rank: null
    }, {
        title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.5,
        audience: 1311535, poster: "https://image.tmdb.org/t/p/w342///5TMyytCI5Pfc9c1eNsljiCdiB05.jpg.jpg", type: "mine", rank: null
    }, {
        title: "타짜: 벨제붑의 노래", year: 2026, date: "2026-09-23", rating: 7.2,
        audience: 1763672, poster: "https://image.tmdb.org/t/p/w342//ueigb5zra1tj6FTK9yhh2P33P9B.jpg", type: "mine", rank: null
    }, {
        title: "오디세이", year: 2026, date: "2026-07-17", rating: 8.0,
        audience: 12188537, poster: "https://image.tmdb.org/t/p/w342//8ze9OcVuFiy94s6FFPvsn4oC2e1.jpg", type: "mine", rank: null
    }, {
        title: "룩백", year: 2026, date: "2026-10-08", rating: 7.9,
        audience: 66994, poster: "https://image.tmdb.org/t/p/w342//mAfcD0lspaNlZDRrzT0fdWS5C01.jpg", type: "mine", rank: null
    },

];