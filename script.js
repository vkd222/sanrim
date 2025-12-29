/* 히어로 슬라이드 */
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

if (slides.length > 0) {
  showSlide(0);
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000);
}

/* 주소 복사 */
const copyBtn = document.getElementById("btn-copy-address");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const address = "경기도 화성시 팔탄면 시청로777";
    navigator.clipboard.writeText(address).then(() => {
      alert("주소가 복사되었습니다.");
    });
  });
}

/* 푸터 검색 (더미 기능) */
const searchBtn = document.getElementById("search-btn");
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    alert("검색 기능은 준비 중입니다.");
  });
}
