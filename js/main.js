// window.onload = function () {
//   function onClick() {
//     document.querySelector(".sidenav").style.display = "block";
//     document.querySelector(".black_bg").style.display = "block";
//     document.querySelector(".navbar__lists").style.visibility = "hidden";
//     document.querySelector(".navbar__logo").classList.add("left-logo");
//     document.querySelector("body").style.overflow = "hidden";
//     document.querySelector(".store__categ").style.visibility = "hidden";
//   }
//   function offClick() {
//     document.querySelector(".sidenav").style.display = "none";
//     document.querySelector(".black_bg").style.display = "none";
//     document.querySelector(".navbar__lists").style.visibility = "visible";
//     document.querySelector(".navbar__logo").classList.remove("left-logo");
//     document.querySelector("body").style.removeProperty("overflow");
//     document.querySelector(".store__categ").style.removeProperty("visibility");
//   }

//   document
//     .querySelector(".navbar__toggleBtn")
//     .addEventListener("click", onClick);
//   document.querySelector(".cancel").addEventListener("click", offClick);
// };

const toggleBtn = document.querySelector(".navbar__toggleBtn");
const nav = document.querySelector(".sidenav");
const cancelBtn = document.querySelector(".cancel");
const blackBg = document.querySelector(".black_bg");
const hiddenNav = document.querySelector(".navbar__lists");
const leftLogo = document.querySelector(".navbar__logo");

const bagsCateg = document.querySelector(".store__categ--bags");
const hairsCateg = document.querySelector(".store__categ--hairs");
const bagsItems = document.querySelector(".store__bagContainer");
const hairsItems = document.querySelector(".store__hairContainer");

toggleBtn.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  blackBg.classList.toggle("hidden");
  hiddenNav.classList.toggle("list__hidden");
  leftLogo.classList.toggle("left-logo");
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector(".store__categ").style.visibility = "hidden";
});
cancelBtn.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  blackBg.classList.toggle("hidden");
  hiddenNav.classList.toggle("list__hidden");
  leftLogo.classList.toggle("left-logo");
  document.querySelector("body").style.removeProperty("overflow");
  document.querySelector(".store__categ").style.removeProperty("visibility");
});

bagsCateg.addEventListener("click", function () {
  bagsItems.classList.remove("hidden");
  hairsItems.classList.add("hidden");
  bagsCateg.style.textDecorationLine = "underline";
  bagsCateg.style.textUnderlineOffset = "5px";
  hairsCateg.style.textDecorationLine = "none";
});

hairsCateg.addEventListener("click", function () {
  bagsItems.classList.add("hidden");
  hairsItems.classList.remove("hidden");
  hairsCateg.style.textDecorationLine = "underline";
  hairsCateg.style.textUnderlineOffset = "5px";
  bagsCateg.style.textDecorationLine = "none";
});
