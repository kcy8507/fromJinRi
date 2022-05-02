let bagCardContainer = document.querySelector(".store__bagContainer");
let hairCardContainer = document.querySelector(".store__hairContainer");

let bagCategBtn = document.querySelector(".store__categ--bags");
let hairsCategBtn = document.querySelector(".store__categ--hairs");

class Product {
  constructor(title, url, image) {
    this.title = title;
    this.url = url;
    this.image = image;
  }
  static searchResult() {
    bagProducts.filter((item) => item.title === searchValue);
    hairProducts.filter((item) => item.title === searchValue);
  }
}

let bagProducts = [
  new Product("Blue square Bag", "https://smartstore.naver.com/from_jinri/products/5834620895", "bag__img1"),
  new Product("Shiny pink bag", "https://smartstore.naver.com/from_jinri/products/5834615830", "bag__img2"),
  new Product("Warm white bag", "https://smartstore.naver.com/from_jinri/products/5834612535", "bag__img3"),
  new Product("Cozy ivory bag", "https://smartstore.naver.com/from_jinri/products/5834608357", "bag__img4"),

  //   new Product("Black letter", "https://smartstore.naver.com/from_jinri/products/5834602457", "hair__img1"),
  //   new Product("Pink letter", "https://smartstore.naver.com/from_jinri/products/5834584335", "hair__img2"),
  //   new Product("October", "https://smartstore.naver.com/from_jinri/products/5834568610", "hair__img3"),
  //   new Product("Yellow letter", "https://smartstore.naver.com/from_jinri/products/5834592529", "hair__img4"),
  //   new Product("Libby", "https://smartstore.naver.com/from_jinri/products/5909560718", "hair__img5"),
];

let hairProducts = [
  //   new Product("Blue square Bag", "https://smartstore.naver.com/from_jinri/products/5834620895", "bag__img1"),
  //   new Product("Shiny pink bag", "https://smartstore.naver.com/from_jinri/products/5834615830", "bag__img2"),
  //   new Product("Warm white bag", "https://smartstore.naver.com/from_jinri/products/5834612535", "bag__img3"),
  //   new Product("Cozy ivory bag", "https://smartstore.naver.com/from_jinri/products/5834608357", "bag__img4"),

  new Product("Black letter", "https://smartstore.naver.com/from_jinri/products/5834602457", "hair__img1"),
  new Product("Pink letter", "https://smartstore.naver.com/from_jinri/products/5834584335", "hair__img2"),
  new Product("October", "https://smartstore.naver.com/from_jinri/products/5834568610", "hair__img3"),
  new Product("Yellow letter", "https://smartstore.naver.com/from_jinri/products/5834592529", "hair__img4"),
  new Product("Libby", "https://smartstore.naver.com/from_jinri/products/5909560718", "hair__img5"),
];

render();

function bagProductRender() {
  bagProducts.forEach(function (el, i) {
    let template = `
            <div class="bag1">
            <a href="${el.url}" class="bags__hairs-link">
            <div class="${el.image}"></div>
            <div class="bag__content1">${el.title}</div>
          </a>
          </div>
            `;
    bagCardContainer.insertAdjacentHTML("beforeend", template);
  });
}

function hairProductRender() {
  hairProducts.forEach(function (el, i) {
    let template = `
            <div class="bag1">
            <a href="${el.url}" class="bags__hairs-link">
            <div class="${el.image}"></div>
            <div class="bag__content1">${el.title}</div>
          </a>
          </div>
            `;
    hairCardContainer.insertAdjacentHTML("beforeend", template);
  });
}

function render() {
  console.log("render");
  bagProductRender();
  bagCategBtn.addEventListener(
    "click",
    () => {
      // bagCardContainer.classList.remove("hidden");
      // hairCardContainer.classList.add("hidden");
      bagCardContainer.innerHTML = "";
      bagProductRender();
    },
    { once: true }
  );
  hairsCategBtn.addEventListener(
    "click",
    () => {
      // bagCardContainer.classList.add("hidden");
      // hairCardContainer.classList.remove("hidden");
      hairProductRender();
    },
    { once: true }
  );
}

let searchBtn = document.querySelector("#search");
let searchInput = document.querySelector(".searchInput");

searchBtn.addEventListener("click", () => {
  let searchValue = searchInput.value;

  let bagResult = bagProducts.filter((el) => el.title === searchValue);
  bagCardContainer.innerHTML = "";
  let searchBagRender = bagResult.forEach(function (el, i) {
    let template = `
    <div class="bag1">
    <a href="${el.url}" class="bags__hairs-link">
    <div class="${el.image}"></div>
    <div class="bag__content1">${el.title}</div>
  </a>
  </div>
    `;
    bagCardContainer.insertAdjacentHTML("beforeend", template);
  });
  searchBagRender;
  searchValue === "" ? bagProductRender() : searchBagRender;

  let hairResult = hairProducts.filter((el) => el.title === searchValue);
  hairCardContainer.innerHTML = "";
  let searchHairRender = hairResult.forEach(function (el, i) {
    let template = `
    <div class="bag1">
    <a href="${el.url}" class="bags__hairs-link">
    <div class="${el.image}"></div>
    <div class="bag__content1">${el.title}</div>
    </a>
    </div>
    `;
    hairCardContainer.insertAdjacentHTML("beforeend", template);
  });
  searchHairRender;
  searchValue === "" ? hairProductRender() : searchHairRender;

  // console.log(result);
  console.log(bagResult);
  console.log(searchValue);
});
