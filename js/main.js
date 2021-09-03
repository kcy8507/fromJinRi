window.onload = function () {
  function onClick() {
    document.querySelector(".sidenav").style.display = "block";
    document.querySelector(".black_bg").style.display = "block";
    document.querySelector(".navbar__lists").style.visibility = "hidden";
    document.querySelector(".navbar__logo").classList.add("left-logo");
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".store__categ").style.visibility = "hidden";
  }
  function offClick() {
    document.querySelector(".sidenav").style.display = "none";
    document.querySelector(".black_bg").style.display = "none";
    document.querySelector(".navbar__lists").style.visibility = "visible";
    document.querySelector(".navbar__logo").classList.remove("left-logo");
    document.querySelector("body").style.removeProperty("overflow");
    document.querySelector(".store__categ").style.removeProperty("visibility");
  }

  document
    .querySelector(".navbar__toggleBtn")
    .addEventListener("click", onClick);
  document.querySelector(".cancel").addEventListener("click", offClick);
};
