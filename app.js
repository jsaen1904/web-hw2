// ===== Part A =====


//A1

let sumA = 0;
for (let i = 0; i < ratings.length; i++) {
    sumA += ratings[i];
}
console.log("A1 평균 평점: " + sumA / ratings.length);


//A2

let maxA = 0;
for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[maxA]) {
        maxA = i;
    }
}
console.log("A2 최고 평점: " + titles[maxA] + " " + ratings[maxA]);

let scoreA = 0;
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8) {
        scoreA++;
    }
}
console.log("A3 8점이상 : " + scoreA + " " + "편");

//A4

let c2020 = 0;
let c2010 = 0;
let c2000 = 0;
let cOld = 0;
for (let i = 0; i < years.length; i++) {
    const decade = years[i] - (years[i] % 10);
    switch (decade) {
        case 2020:
            c2020++;
            break;
        case 2010:
            c2010++;
            break;
        case 2000:
            c2000++;
            break;
        default:
            cOld++;
            break;
    }
}
console.log(
    "A4 2020년대 " + c2020 + "편, 2010년대 " + c2010 +
    "편, 2000년대 " + c2000 + "편, 그 이전 " + cOld + "편"
);

//A5

let audA = "";
for (let i = 0; i < audiences.length; i++) {
    if (audiences[i] >= 1000000) {
        audA += titles[i] + " ";
    }
}
if (audA === "") {
    audA = "없음";
}
console.log("A5 관객 100만 이상: " + audA);

// average : 배열 ⇒ 평균 평점(숫자)
function average(list) {
    return averageBy(list, "rating");
}

// best : 배열 ⇒ 최고 평점 영화 객체 (동점이면 앞의 것)
function best(list) {
    let result = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i].rating > result.rating) {
            result = list[i];
        }
    }
    return result;
}

// filterByRating : 배열, 숫자 ⇒ 평점이 min 이상인 새 배열
function filterByRating(list, min) {
    return list.filter((m) => m.rating >= min);
}

// sortBy : 배열, 키 이름, 내림차순 여부 ⇒ 정렬된 새 배열(원본 불변)
function sortBy(list, key, desc) {
    const sign = desc ? -1 : 1;
    return [...list].sort((a, b) => {
        if (typeof a[key] === "string") {
            return a[key].localeCompare(b[key]) * sign;
        }
        return (a[key] - b[key]) * sign;
    });
}

// search : 배열, 검색어 ⇒ 제목에 검색어가 들어간 새 배열
function search(list, keyword) {
    const word = keyword.trim().toLowerCase();
    return list.filter((m) => m.title.toLowerCase().includes(word));
}

// formatNumber : 숫자 또는 숫자 문자열 ⇒ "1,234,567"
function formatNumber(n) {
    return Number(n).toLocaleString("ko-KR");
}

// yearsSince : "2014-11-06" ⇒ 올해까지 지난 햇수(숫자)
function yearsSince(dateStr) {
    return new Date().getFullYear() - new Date(dateStr).getFullYear();
}

const bestMovie = best(movies);
const topAudience = sortBy(movies, "audience", true)[0];

document.getElementById("out").textContent =
    "전체 " + movies.length + "편, 평균 평점 " + average(movies).toFixed(1) + "점\n" +
    "최고 평점 " + bestMovie.title + " (" + bestMovie.rating + "점, 개봉한 지 " +
    yearsSince(bestMovie.date) + "년)\n" +
    "관객 1위 " + topAudience.title + " (누적 " + formatNumber(topAudience.audience) + "명)";

// ===== Part C =====
// getList : 응답 객체 ⇒ 영화 배열
function getList(data) {
    return data.results;
}

// averageBy : 배열, 키 이름 ⇒ 그 키 값의 평균(숫자)
function averageBy(list, key) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i][key];
    }
    return sum / list.length;
}


// C1: 페이지 정보와 이번 응답의 영화 수
console.log(
    "C1 page " + TMDB.page +
    ", total_pages " + TMDB.total_pages +
    ", total_results " + TMDB.total_results +
    ", 이번 응답 " + getList(TMDB).length + "편"
);

// C2: 상영작 평균 평점
console.log("C2 상영작 평균 평점: " + averageBy(getList(TMDB), "vote_average").toFixed(1));

// C3: 평점 상위 5편 표
console.log("C3 평점 상위 5편");
console.table(
    sortBy(getList(TMDB), "vote_average", true).slice(0, 5),
    ["title", "release_date", "vote_average"]
);

// C4: 제목 일부로 검색한 개수
console.log("C4 검색 결과: " + search(getList(TMDB), "검색어").length + "편");