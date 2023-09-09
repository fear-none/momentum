const quotes = [
  {
    quote: "아름다운 것! 그것은 마음의 눈으로 보이는 미",
    author: "주베르",
  },
  {
    quote: "진정한 발견의 여정은 새로운 경치를 찾아다니는 게 아니라 새로운 눈으로 보는 것이다.",
    author: "마르셀 프루스트",
  },
  {
    quote: "반짝이는 모든 것이 금이 아니듯이 방랑자들이 모두 길을 잃은 것은 아니다.",
    author: "반지의 제왕",
  },
  {
    quote: "배우라. 비교하라. 사실을 수입하라.",
    author: "파플로프",
  },
  {
    quote: "종소리처럼 맑고 분명해라.",
    author: "레이",
  },
  {
    quote: "좌절의 시간들은 잊어라. 그러나 그것이 준 교훈은 절대 잊지 마라.",
    author: "하버트 개서",
  },
  {
    quote: "환한 빛으로 반짝이는 삶의 굽이에서",
    author: "2020년 9월",
  },
  {
    quote: "행복이란 손 닿는 곳에 있는 꽃들로 꽃다발을 만드는 솜씨",
    author: "윌리엄 펠프스",
  },
  {
    quote: "청춘이란 인생의 어떤 기간이 아니라 마음의 상태를 말한다.",
    author: "사무엘 울만",
  },
  {
    quote: "깊고 넓은 감정의 바다가 있다",
    author: "김춘수",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;