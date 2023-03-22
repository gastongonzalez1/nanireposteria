const carousel = document.querySelector("#carousel");
const carouselItems = carousel.querySelectorAll(".carousel-item");
const prevButton = carousel.querySelector(".carousel-control-prev");
const nextButton = carousel.querySelector(".carousel-control-next");
let currentItemIndex = 0;

prevButton.addEventListener("click", () => {
  if (currentItemIndex === 0) {
    currentItemIndex = carouselItems.length - 1;
  } else {
    currentItemIndex--;
  }
  showCurrentItem();
});

nextButton.addEventListener("click", () => {
  if (currentItemIndex === carouselItems.length - 1) {
    currentItemIndex = 0;
  } else {
    currentItemIndex++;
  }
  showCurrentItem();
});

function showCurrentItem() {
  carouselItems.forEach(item => {
    item.classList.remove("active");
  });
  carouselItems[currentItemIndex].classList.add("active");
}

showCurrentItem();